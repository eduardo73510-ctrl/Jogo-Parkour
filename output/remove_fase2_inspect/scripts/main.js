const PHASE1_LAYOUT = "Layout 1";

const PHASE1_START_SPAWN = { x: 180, y: 611.5, deathY: 980 };
const RESPAWN_DEFAULTS = {
  delay: 0.32,
  cooldown: 0.75,
  fadeSpeed: 7.5
};

const CHECKPOINTS = {
  [PHASE1_LAYOUT]: [
    { x: 980, spawnX: 180, spawnY: 611.5, name: "RespawnPoint1_AntesPrimeiroBuraco" },
    { x: 2700, spawnX: 2830, spawnY: 611.5, name: "RespawnPoint2_AntesSprint" },
    { x: 5450, spawnX: 5520, spawnY: 531, name: "RespawnPoint3_Bifurcacao" },
    { x: 8050, spawnX: 8060, spawnY: 611.5, name: "RespawnPoint4_Reconexao" },
    { x: 11200, spawnX: 11380, spawnY: 551.5, name: "RespawnPoint5_Final" },
    { x: 12600, spawnX: 12760, spawnY: 611.5, name: "RespawnPoint6_FinalSeguro" }
  ]
};

runOnStartup(async runtime => {
  let nextResetAllowedAt = 0;
  let lastSafeX = PHASE1_START_SPAWN.x;
  let lastSafeY = PHASE1_START_SPAWN.y;
  let lastSafeName = "RespawnPoint0_Inicio";
  let isRespawning = false;
  let respawnTimer = 0;
  let fadeAlpha = 0;
  let shouldPlacePlayer = false;

  const activeSpawns = new Map();
  const controlSnapshot = {
    hasSnapshot: false,
    maxSpeed: 330,
    jumpStrength: 650
  };

  function setGlobal(name, value) {
    if (!runtime.globalVars || !(name in runtime.globalVars)) return;
    runtime.globalVars[name] = value;
  }

  function getGlobalNumber(name, fallback) {
    const value = Number(runtime.globalVars?.[name]);
    return Number.isFinite(value) ? value : fallback;
  }

  function syncRespawnGlobals() {
    setGlobal("lastSafeX", lastSafeX);
    setGlobal("lastSafeY", lastSafeY);
    setGlobal("isRespawning", isRespawning ? 1 : 0);
    setGlobal("respawnCooldown", getGlobalNumber("respawnCooldown", RESPAWN_DEFAULTS.cooldown));
    setGlobal("respawnDelay", getGlobalNumber("respawnDelay", RESPAWN_DEFAULTS.delay));
  }

  function clearTransitionGlobals() {
    setGlobal("IsTransitioning", 0);
    setGlobal("TargetLayout", "");
    setGlobal("TargetSpawn", "");
    setGlobal("TransitionDirection", 0);
    setGlobal("TransitionCooldown", 0);
  }

  function getPlayer() {
    return runtime.objects.Sprite4?.getFirstInstance() ?? null;
  }

  function getFadeScreen() {
    return runtime.objects.Sprite5?.getFirstInstance() ?? null;
  }

  function getFallZones() {
    return runtime.objects.ZonaDeQueda?.getAllInstances() ?? [];
  }

  function getBounds(instance, originX = 0.5, originY = 0.5) {
    if (typeof instance.getBoundingBox === "function") {
      const bounds = instance.getBoundingBox();
      const left = bounds.left ?? bounds.x;
      const top = bounds.top ?? bounds.y;
      const right = bounds.right ?? (left + bounds.width);
      const bottom = bounds.bottom ?? (top + bounds.height);
      return { left, top, right, bottom };
    }

    const left = instance.x - instance.width * originX;
    const top = instance.y - instance.height * originY;
    return {
      left,
      top,
      right: left + instance.width,
      bottom: top + instance.height
    };
  }

  function intersects(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }

  function resetGameplayState(player) {
    setGlobal("IsSliding", 0);
    setGlobal("SlideInputLock", 0);
    setGlobal("SlideEndTime", 0);
    setGlobal("IsSprinting", 0);
    setGlobal("SprintDirection", 0);
    setGlobal("SprintEndTime", 0);

    const platform = player.behaviors?.Plataforma;
    if (!platform) return;

    if (typeof platform.setVector === "function") {
      platform.setVector(0, 0);
    } else {
      platform.vectorX = 0;
      platform.vectorY = 0;
    }

    platform.maxSpeed = getGlobalNumber("NormalMaxSpeed", 330);
    platform.jumpStrength = getGlobalNumber("NormalJumpStrength", 650);

    try {
      player.setAnimation("Parado", "beginning");
      player.startAnimation("beginning");
    } catch (_) {
      // The movement reset above is the important part; animation reset is polish.
    }
  }

  function setPlayerControlEnabled(player, isEnabled) {
    const platform = player?.behaviors?.Plataforma;
    if (!platform) return;

    if (!controlSnapshot.hasSnapshot) {
      controlSnapshot.maxSpeed = platform.maxSpeed;
      controlSnapshot.jumpStrength = platform.jumpStrength;
      controlSnapshot.hasSnapshot = true;
    }

    if ("isEnabled" in platform) {
      platform.isEnabled = isEnabled;
    } else if ("enabled" in platform) {
      platform.enabled = isEnabled;
    }

    if (!isEnabled) {
      platform.maxSpeed = 0;
      if (typeof platform.setVector === "function") {
        platform.setVector(0, 0);
      } else {
        platform.vectorX = 0;
        platform.vectorY = 0;
      }
      return;
    }

    platform.maxSpeed = getGlobalNumber("NormalMaxSpeed", controlSnapshot.maxSpeed || 330);
    platform.jumpStrength = getGlobalNumber("NormalJumpStrength", controlSnapshot.jumpStrength || 650);
    controlSnapshot.hasSnapshot = false;
  }

  function configureFadeScreen(alpha) {
    const screen = getFadeScreen();
    if (!screen) return;

    screen.width = 1600;
    screen.height = 900;
    screen.x = 640;
    screen.y = 360;
    screen.isVisible = alpha > 0.01;
    screen.opacity = Math.max(0, Math.min(1, alpha));
  }

  function getActiveSpawn(layoutName) {
    if (!activeSpawns.has(layoutName)) {
      activeSpawns.set(layoutName, { ...PHASE1_START_SPAWN, name: "RespawnPoint0_Inicio" });
    }

    return activeSpawns.get(layoutName);
  }

  function saveSafePoint(layoutName, checkpoint) {
    const activeSpawn = getActiveSpawn(layoutName);
    if (activeSpawn.x >= checkpoint.spawnX) return;

    activeSpawn.x = checkpoint.spawnX;
    activeSpawn.y = checkpoint.spawnY;
    activeSpawn.name = checkpoint.name;
    lastSafeX = checkpoint.spawnX;
    lastSafeY = checkpoint.spawnY;
    lastSafeName = checkpoint.name;
    syncRespawnGlobals();
  }

  function updateCheckpoints(layoutName, player) {
    const checkpoints = CHECKPOINTS[layoutName];
    if (!checkpoints) return;

    for (const checkpoint of checkpoints) {
      if (player.x >= checkpoint.x) {
        saveSafePoint(layoutName, checkpoint);
      }
    }
  }

  function placePlayerAtLastSafePoint(player) {
    player.x = lastSafeX;
    player.y = lastSafeY;
    resetGameplayState(player);
  }

  function startRespawn() {
    const now = Date.now();
    if (isRespawning || now < nextResetAllowedAt) return;

    isRespawning = true;
    respawnTimer = getGlobalNumber("respawnDelay", RESPAWN_DEFAULTS.delay);
    shouldPlacePlayer = true;
    nextResetAllowedAt = now + getGlobalNumber("respawnCooldown", RESPAWN_DEFAULTS.cooldown) * 1000;
    setPlayerControlEnabled(getPlayer(), false);
    syncRespawnGlobals();
  }

  function playerIsInsideFallZone(player) {
    const playerBounds = getBounds(player);
    return getFallZones().some(zone => intersects(playerBounds, getBounds(zone, 0, 0)));
  }

  function updateRespawn(dt) {
    if (!isRespawning) {
      fadeAlpha = Math.max(0, fadeAlpha - RESPAWN_DEFAULTS.fadeSpeed * dt);
      configureFadeScreen(fadeAlpha);
      return false;
    }

    fadeAlpha = Math.min(1, fadeAlpha + RESPAWN_DEFAULTS.fadeSpeed * dt);
    configureFadeScreen(fadeAlpha);
    respawnTimer -= dt;

    const player = getPlayer();
    if (player) {
      setPlayerControlEnabled(player, false);
    }

    if (shouldPlacePlayer && respawnTimer <= 0) {
      if (player) {
        placePlayerAtLastSafePoint(player);
      }
      shouldPlacePlayer = false;
      respawnTimer = 0.12;
      return true;
    }

    if (!shouldPlacePlayer && respawnTimer <= 0) {
      isRespawning = false;
      if (player) {
        setPlayerControlEnabled(player, true);
      }
      syncRespawnGlobals();
    }

    return true;
  }

  runtime.addEventListener("tick", () => {
    const dt = runtime.dt || 1 / 60;
    clearTransitionGlobals();

    if (updateRespawn(dt)) return;

    const layoutName = runtime.layout.name;
    if (layoutName !== PHASE1_LAYOUT) return;

    const player = getPlayer();
    if (!player) return;

    updateCheckpoints(layoutName, player);

    if (playerIsInsideFallZone(player) || player.y > PHASE1_START_SPAWN.deathY) {
      startRespawn();
    }
  });

  runtime.addEventListener("afteranylayoutstart", () => {
    if (runtime.layout.name !== PHASE1_LAYOUT) return;

    nextResetAllowedAt = 0;
    lastSafeX = PHASE1_START_SPAWN.x;
    lastSafeY = PHASE1_START_SPAWN.y;
    lastSafeName = "RespawnPoint0_Inicio";
    activeSpawns.set(PHASE1_LAYOUT, { ...PHASE1_START_SPAWN, name: lastSafeName });

    const player = getPlayer();
    if (player) {
      placePlayerAtLastSafePoint(player);
      setPlayerControlEnabled(player, true);
    }

    isRespawning = false;
    respawnTimer = 0;
    fadeAlpha = 0;
    shouldPlacePlayer = false;
    configureFadeScreen(0);
    clearTransitionGlobals();
    syncRespawnGlobals();
  });
});
