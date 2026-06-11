import fs from "node:fs";
import path from "node:path";

const work = process.argv[2];
const layoutPath = path.join(work, "layouts", "Layout 1.json");
const mainPath = path.join(work, "scripts", "main.js");

const layout = JSON.parse(fs.readFileSync(layoutPath, "utf8"));
const instances = layout.layers[0].instances;
const inst = uid => instances.find(i => i.uid === uid);
const setWorld = (i, x, y, width, height) => {
  i.world.x = x;
  i.world.y = y;
  i.world.width = width;
  i.world.height = height;
};
const setVisible = (i, visible) => {
  i.showing = visible;
  if (i.properties && Object.prototype.hasOwnProperty.call(i.properties, "initially-visible")) {
    i.properties["initially-visible"] = visible;
  }
};

const slide1 = inst(13);
setWorld(slide1, 3605, 610, 190, 36);
slide1.tags = "Parkour_Fase_01 Area_Slide_Treino_TetoBaixo Colisao_Invisivel";
setVisible(slide1, false);
const slide1Visual = inst(27);
setWorld(slide1Visual, 3605, 610, 190, 36);
slide1Visual.tags = "Decor_Etapa1 Visual_Slide_Treino_TetoBaixo";

const slide2 = inst(39);
setWorld(slide2, 6580, 610, 260, 36);
slide2.tags = "Parkour_Fase_02 Etapa_02 Area_Sprint_Slide_TetoBaixo Colisao_Invisivel";
setVisible(slide2, false);
const slide2Visual = inst(45);
setWorld(slide2Visual, 6580, 610, 260, 36);
slide2Visual.tags = "Decor_Etapa2 Visual_Sprint_Slide_TetoBaixo";

const slide3 = inst(59);
setWorld(slide3, 10870, 610, 280, 36);
slide3.tags = "Parkour_Fase_03 Etapa_03 Area_Sprint_Final_Slide_TetoBaixo Colisao_Invisivel";
setVisible(slide3, false);
const slide3Visual = inst(66);
setWorld(slide3Visual, 10870, 610, 280, 36);
slide3Visual.tags = "Decor_Etapa3 Visual_Sprint_Final_Slide_TetoBaixo";

const warn1 = inst(22);
setWorld(warn1, 3490, 629, 96, 62);
warn1.tags = "Decor_Etapa1 Aviso_Slide_Treino";
const warn2 = inst(42);
setWorld(warn2, 6410, 629, 96, 62);
warn2.tags = "Decor_Etapa2 Aviso_Sprint_Slide";
const warn3 = inst(67);
setWorld(warn3, 10680, 629, 96, 62);
warn3.tags = "Decor_Etapa3 Aviso_Sprint_Final";

const cloneInstance = (source, uid, sid, tags, x, y, width, height) => {
  const clone = JSON.parse(JSON.stringify(source));
  clone.uid = uid;
  clone.sid = sid;
  clone.tags = tags;
  setWorld(clone, x, y, width, height);
  setVisible(clone, true);
  return clone;
};

const checkpointTemplate = inst(91);
const pipeTemplate = inst(68);
instances.push(
  cloneInstance(checkpointTemplate, 114, 997300000000001, "Checkpoint_Fase1_01 Visual_Respawn_Seguro", 4020, 629, 96, 62),
  cloneInstance(checkpointTemplate, 115, 997300000000002, "Checkpoint_Fase1_02 Visual_Respawn_Seguro", 7910, 629, 96, 62),
  cloneInstance(checkpointTemplate, 116, 997300000000003, "Checkpoint_Fase1_03 Visual_Respawn_Seguro", 10590, 629, 96, 62),
  cloneInstance(pipeTemplate, 117, 997300000000004, "Decor_DetalhesCenario Checkpoint_01_Cano_Guia", 3980, 655, 230, 36),
  cloneInstance(pipeTemplate, 118, 997300000000005, "Decor_DetalhesCenario Checkpoint_02_Cano_Guia", 7870, 655, 230, 36),
  cloneInstance(pipeTemplate, 119, 997300000000006, "Decor_DetalhesCenario Checkpoint_03_Cano_Guia", 10540, 655, 260, 36)
);

fs.writeFileSync(layoutPath, JSON.stringify(layout, null, "\t"), { encoding: "utf8" });

let main = fs.readFileSync(mainPath, "utf8");
main = main.replace(
`const RESET_COOLDOWN_MS = 500;`,
`const CHECKPOINTS = {
  [PHASE1_LAYOUT]: [
    { x: 3950, spawnX: 4050, spawnY: 611.5 },
    { x: 7840, spawnX: 7940, spawnY: 611.5 },
    { x: 10520, spawnX: 10620, spawnY: 611.5 }
  ]
};

const RESET_COOLDOWN_MS = 500;`
);
main = main.replace(
`  let nextResetAllowedAt = 0;`,
`  let nextResetAllowedAt = 0;
  const activeSpawns = new Map();`
);
main = main.replace(
`  function resetPlayerToSpawn(player, spawn) {
    player.x = spawn.x;
    player.y = spawn.y;
    resetGameplayState(player);
  }

  runtime.addEventListener("tick", () => {`,
`  function resetPlayerToSpawn(player, spawn) {
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

  runtime.addEventListener("tick", () => {`
);
main = main.replace(
`    const player = runtime.objects.Sprite4?.getFirstInstance();
    if (!player) return;

    if (layoutName === PHASE1_LAYOUT && player.x >= PHASE1_EXIT_X) {`,
`    const player = runtime.objects.Sprite4?.getFirstInstance();
    if (!player) return;

    updateCheckpoints(layoutName, player);

    if (layoutName === PHASE1_LAYOUT && player.x >= PHASE1_EXIT_X) {`
);
main = main.replace(
`        resetPlayerToSpawn(player, spawn);`,
`        resetPlayerToSpawn(player, getActiveSpawn(layoutName));`
);
main = main.replace(
`    const spawn = SPAWNS[runtime.layout.name];
    if (!spawn) return;

    const player = runtime.objects.Sprite4?.getFirstInstance();`,
`    const spawn = SPAWNS[runtime.layout.name];
    if (!spawn) return;

    activeSpawns.set(runtime.layout.name, { ...spawn });

    const player = runtime.objects.Sprite4?.getFirstInstance();`
);
fs.writeFileSync(mainPath, main, { encoding: "utf8" });
