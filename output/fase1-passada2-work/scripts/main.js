const PHASE1_LAYOUT = "Layout 1";
const PHASE2_LAYOUT = "Fase 2";
const PHASE1_EXIT_X = 12100;

const SPAWNS = {
  [PHASE1_LAYOUT]: { x: 180, y: 611.5, deathY: 870 },
  [PHASE2_LAYOUT]: { x: 173, y: 681, deathY: 1030 }
};

const CHECKPOINTS = {
  [PHASE1_LAYOUT]: [
    { x: 3780, spawnX: 3860, spawnY: 611.5 },
    { x: 7320, spawnX: 7420, spawnY: 611.5 },
    { x: 10160, spawnX: 10220, spawnY: 610.5 }
  ]
};

const RESET_COOLDOWN_MS = 500;

runOnStartup(async runtime => {
  let changingLayout = false;
  let nextResetAllowedAt = 0;
  const activeSpawns = new Map();

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
    if (changingLayout) return;

    const layoutName = runtime.layout.name;
    const spawn = SPAWNS[layoutName];
    if (!spawn) return;

    const player = runtime.objects.Sprite4?.getFirstInstance();
    if (!player) return;

    updateCheckpoints(layoutName, player);

    if (layoutName === PHASE1_LAYOUT && player.x >= PHASE1_EXIT_X) {
      changingLayout = true;
      runtime.goToLayout(PHASE2_LAYOUT);
      return;
    }

    if (player.y > spawn.deathY) {
      const now = Date.now();
      if (now >= nextResetAllowedAt) {
        nextResetAllowedAt = now + RESET_COOLDOWN_MS;
        resetPlayerToSpawn(player, getActiveSpawn(layoutName));
      }
    }
  });

  runtime.addEventListener("afteranylayoutstart", () => {
    changingLayout = false;
    nextResetAllowedAt = 0;

    const spawn = SPAWNS[runtime.layout.name];
    if (!spawn) return;

    activeSpawns.set(runtime.layout.name, { ...spawn });

    const player = runtime.objects.Sprite4?.getFirstInstance();
    if (!player) return;

    resetPlayerToSpawn(player, spawn);
  });
});