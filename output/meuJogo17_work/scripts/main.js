const LAYOUT_NAME = "Layout 1";

const START_SPAWN = { x: 180, y: 611.5, deathY: 980 };
const RESPAWN_DEFAULTS = {
  delay: 0.24,
  cooldown: 0.65,
  fadeSpeed: 9
};

const SAFE_POINTS = [
  { x: 0, spawnX: 180, spawnY: 611.5 },
  { x: 820, spawnX: 910, spawnY: 611.5 },
  { x: 1460, spawnX: 1540, spawnY: 590 },
  { x: 2020, spawnX: 2110, spawnY: 611.5 },
  { x: 2530, spawnX: 2610, spawnY: 600 },
  { x: 3000, spawnX: 3080, spawnY: 585 },
  { x: 3440, spawnX: 3530, spawnY: 611.5 },
  { x: 3950, spawnX: 4070, spawnY: 611.5 },
  { x: 4710, spawnX: 4830, spawnY: 595 },
  { x: 5300, spawnX: 5380, spawnY: 570 },
  { x: 5760, spawnX: 5850, spawnY: 600 },
  { x: 6260, spawnX: 6360, spawnY: 611.5 },
  { x: 7240, spawnX: 7330, spawnY: 611.5 },
  { x: 7840, spawnX: 7960, spawnY: 611.5 },
  { x: 8580, spawnX: 8660, spawnY: 595 },
  { x: 9140, spawnX: 9220, spawnY: 565 },
  { x: 9600, spawnX: 9670, spawnY: 590 },
  { x: 10040, spawnX: 10120, spawnY: 610 },
  { x: 10520, spawnX: 10620, spawnY: 611.5 },
  { x: 11480, spawnX: 11600, spawnY: 611.5 }
];

const FALL_ZONES = [
  { name: "Gap_Pequeno_01", x: 760, y: 710, w: 60, h: 250 },
  { name: "Gap_Medio_02", x: 1380, y: 700, w: 80, h: 260 },
  { name: "Gap_Medio_03", x: 1890, y: 710, w: 130, h: 250 },
  { name: "Gap_Medio_04", x: 2440, y: 705, w: 90, h: 255 },
  { name: "Gap_Dificil_05", x: 2860, y: 690, w: 140, h: 270 },
  { name: "Gap_Final_06", x: 3330, y: 710, w: 110, h: 250 },
  { name: "Gap_Etapa2_01_Entrada", x: 4590, y: 705, w: 120, h: 255 },
  { name: "Gap_Etapa2_02_Altura", x: 5170, y: 685, w: 130, h: 275 },
  { name: "Gap_Etapa2_03_Aterrissagem", x: 5640, y: 695, w: 120, h: 265 },
  { name: "Gap_Etapa2_04_PreSprint", x: 6120, y: 710, w: 140, h: 250 },
  { name: "Gap_Etapa2_05_Sprint", x: 7020, y: 710, w: 220, h: 250 },
  { name: "Gap_Etapa3_01_Conexao", x: 8400, y: 710, w: 180, h: 250 },
  { name: "Gap_Etapa3_02_Subida", x: 9000, y: 685, w: 140, h: 275 },
  { name: "Gap_Etapa3_03_Curto", x: 9480, y: 695, w: 120, h: 265 },
  { name: "Gap_Etapa3_04_Ritmo", x: 9900, y: 710, w: 140, h: 250 },
  { name: "Gap_Etapa3_05_PreSprint", x: 10360, y: 710, w: 160, h: 250 },
  { name: "Gap_Etapa3_06_SprintFinal", x: 11280, y: 710, w: 200, h: 250 }
];

runOnStartup(async runtime => {
  let lastSafeX = START_SPAWN.x;
  let lastSafeY = START_SPAWN.y;
  let isRespawning = false;
  let respawnTimer = 0;
  let nextRespawnAllowedAt = 0;
  let shouldPlacePlayer = false;
  let fadeAlpha = 0;

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

  function syncGlobals() {
    setGlobal("lastSafeX", lastSafeX);
    setGlobal("lastSafeY", lastSafeY);
    setGlobal("isRespawning", isRespawning ? 1 : 0);
    setGlobal("respawnCooldown", getGlobalNumber("respawnCooldown", RESPAWN_DEFAULTS.cooldown));
    setGlobal("respawnDelay", getGlobalNumber("respawnDelay", RESPAWN_DEFAULTS.delay));
  }

  function getPlayer() {
    return runtime.objects.Sprite4?.getFirstInstance() ?? null;
  }

  function getFadeScreen() {
    return runtime.objects.Sprite5?.getFirstInstance() ?? null;
  }

  function getPlayerBounds(player) {
    if (typeof player.getBoundingBox === "function") {
      const bounds = player.getBoundingBox();
      const left = bounds.left ?? bounds.x;
      const top = bounds.top ?? bounds.y;
      return {
        left,
        top,
        right: bounds.right ?? (left + bounds.width),
        bottom: bounds.bottom ?? (top + bounds.height)
      };
    }

    return {
      left: player.x - player.width * 0.5,
      top: player.y - player.height * 0.5,
      right: player.x + player.width * 0.5,
      bottom: player.y + player.height * 0.5
    };
  }

  function intersectsZone(bounds, zone) {
    return bounds.left < zone.x + zone.w &&
      bounds.right > zone.x &&
      bounds.top < zone.y + zone.h &&
      bounds.bottom > zone.y;
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
      // Movement reset is the important part here.
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

  function configureFade(alpha) {
    const screen = getFadeScreen();
    if (!screen) return;

    screen.width = 1600;
    screen.height = 900;
    screen.x = 640;
    screen.y = 360;
    screen.isVisible = alpha > 0.01;
    screen.opacity = Math.max(0, Math.min(1, alpha));
  }

  function updateSafePoint(player) {
    lastSafeX = START_SPAWN.x;
    lastSafeY = START_SPAWN.y;
    syncGlobals();
  }

  function freezePlayerForRespawn(player) {
    if (!player) return;

    setGlobal("IsSliding", 0);
    setGlobal("SlideInputLock", 0);
    setGlobal("SlideEndTime", 0);
    setGlobal("IsSprinting", 0);
    setGlobal("SprintDirection", 0);
    setGlobal("SprintEndTime", 0);

    const platform = player.behaviors?.Plataforma;
    if (platform) {
      if (typeof platform.setVector === "function") {
        platform.setVector(0, 0);
      } else {
        platform.vectorX = 0;
        platform.vectorY = 0;
      }
    }

    try {
      player.setAnimation("Parado", "beginning");
      player.startAnimation("beginning");
      if (typeof player.stopAnimation === "function") {
        player.stopAnimation();
      }
    } catch (_) {
      // Animation names can vary; the movement freeze still prevents control bugs.
    }
  }

  function startRespawn() {
    const now = Date.now();
    if (isRespawning || now < nextRespawnAllowedAt) return;

    isRespawning = true;
    respawnTimer = getGlobalNumber("respawnDelay", RESPAWN_DEFAULTS.delay);
    nextRespawnAllowedAt = now + getGlobalNumber("respawnCooldown", RESPAWN_DEFAULTS.cooldown) * 1000;
    shouldPlacePlayer = true;
    const player = getPlayer();
    setPlayerControlEnabled(player, false);
    freezePlayerForRespawn(player);
    syncGlobals();
  }

  function finishRespawn(player) {
    lastSafeX = START_SPAWN.x;
    lastSafeY = START_SPAWN.y;
    player.x = START_SPAWN.x;
    player.y = START_SPAWN.y;
    resetGameplayState(player);
  }

  function updateRespawn(dt) {
    if (!isRespawning) {
      fadeAlpha = Math.max(0, fadeAlpha - RESPAWN_DEFAULTS.fadeSpeed * dt);
      configureFade(fadeAlpha);
      return false;
    }

    fadeAlpha = Math.min(1, fadeAlpha + RESPAWN_DEFAULTS.fadeSpeed * dt);
    configureFade(fadeAlpha);
    respawnTimer -= dt;

    const player = getPlayer();
    if (player) {
      setPlayerControlEnabled(player, false);
      freezePlayerForRespawn(player);
    }

    if (shouldPlacePlayer && respawnTimer <= 0) {
      if (player) finishRespawn(player);
      shouldPlacePlayer = false;
      respawnTimer = 0.08;
      return true;
    }

    if (!shouldPlacePlayer && respawnTimer <= 0) {
      isRespawning = false;
      if (player) setPlayerControlEnabled(player, true);
      syncGlobals();
    }

    return true;
  }

  function isInFallZone(player) {
    return FALL_ZONES.some(zone => {
      const horizontalMargin = Math.min(18, zone.w * 0.25);
      const insideGapX = player.x > zone.x + horizontalMargin &&
        player.x < zone.x + zone.w - horizontalMargin;

      const hasFallenBelowRoof = player.y > zone.y + 70;
      return insideGapX && hasFallenBelowRoof;
    });
  }

  runtime.addEventListener("tick", () => {
    const dt = runtime.dt || 1 / 60;

    if (updateRespawn(dt)) return;
    if (runtime.layout.name !== LAYOUT_NAME) return;

    const player = getPlayer();
    if (!player) return;

    updateSafePoint(player);

    if (isInFallZone(player) || player.y > START_SPAWN.deathY) {
      startRespawn();
    }
  });

  runtime.addEventListener("afteranylayoutstart", () => {
    if (runtime.layout.name !== LAYOUT_NAME) return;

    lastSafeX = START_SPAWN.x;
    lastSafeY = START_SPAWN.y;
    isRespawning = false;
    respawnTimer = 0;
    shouldPlacePlayer = false;
    nextRespawnAllowedAt = 0;
    fadeAlpha = 0;

    const player = getPlayer();
    if (player) {
      finishRespawn(player);
      setPlayerControlEnabled(player, true);
    }

    configureFade(0);
    syncGlobals();
  });
});
