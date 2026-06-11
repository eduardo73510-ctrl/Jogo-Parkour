const PHASE1_LAYOUT = "Layout 1";
const PHASE2_LAYOUT = "Fase 2";

const PHASE1_START_SPAWN = { x: 180, y: 611.5, deathY: 980 };
const PHASE1_RETURN_SPAWN = { x: 12800, y: 611.5, deathY: 980 };
const PHASE2_ENTRY_SPAWN = { x: 360, y: 681, deathY: 1030 };

const SPAWNS = {
  [PHASE1_LAYOUT]: PHASE1_START_SPAWN,
  [PHASE2_LAYOUT]: PHASE2_ENTRY_SPAWN
};

const TRANSITION = {
  width: 1600,
  height: 900,
  y: 360,
  offLeftX: -800,
  coveredX: 640,
  offRightX: 2080,
  speed: 7200
};

const CHECKPOINTS = {
  [PHASE1_LAYOUT]: [
    { x: 3350, spawnX: 3460, spawnY: 611.5 },
    { x: 7800, spawnX: 8060, spawnY: 611.5 },
    { x: 11200, spawnX: 11380, spawnY: 611.5 }
  ]
};

const PHASE1_EXIT_X = 13600;
const PHASE2_RETURN_X = 155;
const MIN_TRIGGER_MOTION = 20;
const RESET_COOLDOWN_MS = 500;
const TRANSITION_TRIGGER_COOLDOWN_MS = 650;

runOnStartup(async runtime => {
  let transitionState = "idle";
  let transitionTargetLayout = "";
  let transitionTargetSpawn = null;
  let nextResetAllowedAt = 0;
  let triggersEnabledAt = 0;
  let lastPlayerX = null;

  const activeSpawns = new Map();
  const portalArmed = new Map();
  const controlSnapshot = {
    hasSnapshot: false,
    maxSpeed: 330,
    jumpStrength: 650
  };

  function setGlobal(name, value) {
    if (!runtime.globalVars || !(name in runtime.globalVars)) return;
    runtime.globalVars[name] = value;
  }

  function syncTransitionGlobals(isTransitioning, targetLayout = "", targetSpawn = "", direction = 0) {
    setGlobal("IsTransitioning", isTransitioning ? 1 : 0);
    setGlobal("TargetLayout", targetLayout);
    setGlobal("TargetSpawn", targetSpawn);
    setGlobal("TransitionDirection", direction);
    setGlobal("TransitionCooldown", TRANSITION_TRIGGER_COOLDOWN_MS / 1000);
  }

  function getPlayer() {
    return runtime.objects.Sprite4?.getFirstInstance() ?? null;
  }

  function getTransitionScreen() {
    return runtime.objects.Sprite5?.getFirstInstance() ?? null;
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

    platform.maxSpeed = Number(runtime.globalVars?.NormalMaxSpeed) || 330;
    platform.jumpStrength = Number(runtime.globalVars?.NormalJumpStrength) || 650;

    try {
      player.setAnimation("Parado", "beginning");
      player.startAnimation("beginning");
    } catch (_) {
      // Animation reset is only polish; movement reset is the critical part.
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

    platform.maxSpeed = controlSnapshot.maxSpeed || Number(runtime.globalVars?.NormalMaxSpeed) || 330;
    platform.jumpStrength = controlSnapshot.jumpStrength || Number(runtime.globalVars?.NormalJumpStrength) || 650;
    controlSnapshot.hasSnapshot = false;
  }

  function holdPlayerStill() {
    const platform = getPlayer()?.behaviors?.Plataforma;
    if (!platform) return;

    if (typeof platform.setVector === "function") {
      platform.setVector(0, 0);
    } else {
      platform.vectorX = 0;
      platform.vectorY = 0;
    }
  }

  function configureTransitionScreen(x) {
    const screen = getTransitionScreen();
    if (!screen) return null;

    screen.width = TRANSITION.width;
    screen.height = TRANSITION.height;
    screen.x = x;
    screen.y = TRANSITION.y;
    screen.isVisible = true;
    return screen;
  }

  function resetPlayerToSpawn(player, spawn) {
    player.x = spawn.x;
    player.y = spawn.y;
    resetGameplayState(player);
    lastPlayerX = player.x;
  }

  function getActiveSpawn(layoutName) {
    if (!activeSpawns.has(layoutName)) {
      activeSpawns.set(layoutName, { ...SPAWNS[layoutName] });
    }

    return activeSpawns.get(layoutName);
  }

  function updateCheckpoints(layoutName, player) {
    const checkpoints = CHECKPOINTS[layoutName];
    if (!checkpoints) return;

    const activeSpawn = getActiveSpawn(layoutName);
    for (const checkpoint of checkpoints) {
      if (player.x >= checkpoint.x && activeSpawn.x < checkpoint.spawnX) {
        activeSpawn.x = checkpoint.spawnX;
        activeSpawn.y = checkpoint.spawnY;
      }
    }
  }

  function startTransition(targetLayout, targetSpawn, direction) {
    if (transitionState !== "idle") return;

    transitionTargetLayout = targetLayout;
    transitionTargetSpawn = { ...targetSpawn };
    transitionState = "covering";
    syncTransitionGlobals(true, targetLayout, direction > 0 ? "Spawn_Fase2_EntradaDaFase1" : "Spawn_Fase1_RetornoDaFase2", direction);
    configureTransitionScreen(TRANSITION.offLeftX);
    setPlayerControlEnabled(getPlayer(), false);
  }

  function updateTransition(dt) {
    const screen = getTransitionScreen();
    if (!screen || transitionState === "idle") return false;

    holdPlayerStill();

    if (transitionState === "covering") {
      screen.x = Math.min(TRANSITION.coveredX, screen.x + TRANSITION.speed * dt);
      if (screen.x >= TRANSITION.coveredX) {
        screen.x = TRANSITION.coveredX;
        transitionState = "switching";
        runtime.goToLayout(transitionTargetLayout);
      }
      return true;
    }

    if (transitionState === "uncovering") {
      screen.x = Math.min(TRANSITION.offRightX, screen.x + TRANSITION.speed * dt);
      if (screen.x >= TRANSITION.offRightX) {
        screen.x = TRANSITION.offRightX;
        transitionState = "idle";
        transitionTargetLayout = "";
        transitionTargetSpawn = null;
        setPlayerControlEnabled(getPlayer(), true);
        syncTransitionGlobals(false);
      }
      return true;
    }

    return transitionState === "switching";
  }

  function updatePortalArming(layoutName, player) {
    if (layoutName === PHASE1_LAYOUT && player.x < PHASE1_EXIT_X - 220) {
      portalArmed.set(layoutName, true);
    }

    if (layoutName === PHASE2_LAYOUT && player.x > PHASE2_RETURN_X + 180) {
      portalArmed.set(layoutName, true);
    }
  }

  function checkPhaseTransitions(layoutName, player, horizontalMotion) {
    if (transitionState !== "idle" || Date.now() < triggersEnabledAt) return;

    if (layoutName === PHASE1_LAYOUT &&
      portalArmed.get(layoutName) === true &&
      player.x >= PHASE1_EXIT_X &&
      horizontalMotion > MIN_TRIGGER_MOTION) {
      startTransition(PHASE2_LAYOUT, PHASE2_ENTRY_SPAWN, 1);
      return;
    }

    if (layoutName === PHASE2_LAYOUT &&
      portalArmed.get(layoutName) === true &&
      player.x <= PHASE2_RETURN_X &&
      horizontalMotion < -MIN_TRIGGER_MOTION) {
      startTransition(PHASE1_LAYOUT, PHASE1_RETURN_SPAWN, -1);
    }
  }

  function getHorizontalMotion(player, deltaX, dt) {
    const vectorX = player.behaviors?.Plataforma?.vectorX;
    if (Number.isFinite(vectorX) && Math.abs(vectorX) > 1) return vectorX;
    return dt > 0 ? deltaX / dt : deltaX;
  }

  runtime.addEventListener("tick", () => {
    const dt = runtime.dt || 1 / 60;
    if (updateTransition(dt)) return;

    const layoutName = runtime.layout.name;
    const spawn = SPAWNS[layoutName];
    if (!spawn) return;

    const player = getPlayer();
    if (!player) return;

    const deltaX = lastPlayerX === null ? 0 : player.x - lastPlayerX;
    const horizontalMotion = getHorizontalMotion(player, deltaX, dt);
    lastPlayerX = player.x;

    updatePortalArming(layoutName, player);
    updateCheckpoints(layoutName, player);
    checkPhaseTransitions(layoutName, player, horizontalMotion);

    if (player.y > spawn.deathY) {
      const now = Date.now();
      if (now >= nextResetAllowedAt) {
        nextResetAllowedAt = now + RESET_COOLDOWN_MS;
        resetPlayerToSpawn(player, getActiveSpawn(layoutName));
      }
    }
  });

  runtime.addEventListener("afteranylayoutstart", () => {
    nextResetAllowedAt = 0;
    triggersEnabledAt = Date.now() + TRANSITION_TRIGGER_COOLDOWN_MS;
    portalArmed.set(runtime.layout.name, false);

    const spawn = transitionTargetSpawn ?? SPAWNS[runtime.layout.name];
    if (!spawn) return;

    activeSpawns.set(runtime.layout.name, { ...spawn });

    const player = getPlayer();
    if (!player) return;

    resetPlayerToSpawn(player, spawn);

    if (transitionState === "switching") {
      configureTransitionScreen(TRANSITION.coveredX);
      transitionState = "uncovering";
      setPlayerControlEnabled(player, false);
    } else {
      configureTransitionScreen(TRANSITION.offLeftX);
      setPlayerControlEnabled(player, true);
      syncTransitionGlobals(false);
    }
  });
});
