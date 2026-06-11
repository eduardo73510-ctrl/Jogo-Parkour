const PHASE1_LAYOUT = "Layout 1";
const PHASE2_LAYOUT = "Fase 2";
const PHASE1_EXIT_X = 12090;

const SPAWNS = {
  [PHASE1_LAYOUT]: { x: 180, y: 611.5, deathY: 870 },
  [PHASE2_LAYOUT]: { x: 330, y: 681, deathY: 1030 }
};

const RETURN_SPAWN_PHASE1 = { x: 380, y: 611.5, deathY: 870 };

const TRANSITION = {
  objectName: "TelaPretaTransicao",
  width: 1600,
  height: 900,
  y: 360,
  offLeftX: -800,
  coveredX: 640,
  offRightX: 2080,
  speed: 2600
};

const CHECKPOINTS = {
  [PHASE1_LAYOUT]: [
    { x: 4860, spawnX: 4950, spawnY: 611.5 },
    { x: 8340, spawnX: 8440, spawnY: 611.5 }
  ]
};

const RESET_COOLDOWN_MS = 500;

runOnStartup(async runtime => {
  let transitionState = "idle";
  let transitionTargetLayout = "";
  let transitionTargetSpawn = null;
  let nextResetAllowedAt = 0;
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

  function resetGameplayState(player) {
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

      const normalMaxSpeed = Number(runtime.globalVars?.NormalMaxSpeed) || 330;
      const normalJumpStrength = Number(runtime.globalVars?.NormalJumpStrength) || 650;
      platform.maxSpeed = normalMaxSpeed;
      platform.jumpStrength = normalJumpStrength;
    }

    try {
      player.setAnimation("Parado", "beginning");
      player.startAnimation("beginning");
    } catch (_) {
      // Animation reset is a safety polish only; movement reset is the critical part.
    }
  }

  function getPlayer() {
    return runtime.objects.Sprite4?.getFirstInstance() ?? null;
  }

  function getTransitionScreen() {
    return runtime.objects[TRANSITION.objectName]?.getFirstInstance() ?? null;
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

  function getBounds(instance) {
    return {
      left: instance.x - instance.width / 2,
      right: instance.x + instance.width / 2,
      top: instance.y - instance.height / 2,
      bottom: instance.y + instance.height / 2
    };
  }

  function overlaps(a, b) {
    const ab = getBounds(a);
    const bb = getBounds(b);

    return ab.left < bb.right &&
      ab.right > bb.left &&
      ab.top < bb.bottom &&
      ab.bottom > bb.top;
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
    } else {
      platform.maxSpeed = controlSnapshot.maxSpeed || Number(runtime.globalVars?.NormalMaxSpeed) || 330;
      platform.jumpStrength = controlSnapshot.jumpStrength || Number(runtime.globalVars?.NormalJumpStrength) || 650;
      controlSnapshot.hasSnapshot = false;
    }
  }

  function holdPlayerStill() {
    const player = getPlayer();
    const platform = player?.behaviors?.Plataforma;
    if (!platform) return;

    if (typeof platform.setVector === "function") {
      platform.setVector(0, 0);
    } else {
      platform.vectorX = 0;
      platform.vectorY = 0;
    }
  }

  function startTransition(targetLayout, targetSpawn) {
    if (transitionState !== "idle") return;

    transitionTargetLayout = targetLayout;
    transitionTargetSpawn = { ...targetSpawn };
    transitionState = "covering";

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
      }

      return true;
    }

    return transitionState === "switching";
  }

  function getObjectInstance(name) {
    return runtime.objects[name]?.getFirstInstance() ?? null;
  }

  function checkPhasePortals(layoutName, player) {
    if (transitionState !== "idle") return;

    if (layoutName === PHASE1_LAYOUT) {
      const finalFase1 = getObjectInstance("FinalFase1");
      if ((finalFase1 && overlaps(player, finalFase1)) || player.x >= PHASE1_EXIT_X) {
        startTransition(PHASE2_LAYOUT, getActiveSpawn(PHASE2_LAYOUT));
      }
      return;
    }

    if (layoutName === PHASE2_LAYOUT) {
      const retornoFase2 = getObjectInstance("RetornoFase2");
      if (retornoFase2 && overlaps(player, retornoFase2)) {
        startTransition(PHASE1_LAYOUT, RETURN_SPAWN_PHASE1);
      }
    }
  }

  function resetPlayerToSpawn(player, spawn) {
    player.x = spawn.x;
    player.y = spawn.y;
    resetGameplayState(player);
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

  runtime.addEventListener("tick", () => {
    const dt = runtime.dt || 1 / 60;
    if (updateTransition(dt)) return;

    const layoutName = runtime.layout.name;
    const spawn = SPAWNS[layoutName];
    if (!spawn) return;

    const player = getPlayer();
    if (!player) return;

    updateCheckpoints(layoutName, player);
    checkPhasePortals(layoutName, player);

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
    }
  });
});
