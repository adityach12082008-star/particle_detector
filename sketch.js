const r = require("raylib");
const f = require("./detectorFunctions");
const d = require("./detector");
const windowWidth = 400;
const windowHeight = 200;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "scanner");
  r.SetTargetFPS(60);
}

function update() {
  d.detectorVelocity1 = f.detectorVelocity(
    d.detectorVelocity1,
    d.detector1Start,
    d.upperBound1,
    0,
  );
  d.detector1Start = f.moveDetector(d.detector1Start, d.detectorVelocity1);

  d.detectorVelocity2 = f.detectorVelocity(
    d.detectorVelocity2,
    d.detector2Start,
    d.upperBound2,
    d.lowerBound2,
  );
  d.detector2Start = f.moveDetector(d.detector2Start, d.detectorVelocity2);

  d.detectorVelocity3 = f.detectorVelocity(
    d.detectorVelocity3,
    d.detector3Start,
    d.upperBound3,
    0,
  );
  d.detector3Start = f.moveDetector(d.detector3Start, d.detectorVelocity3);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  let detector1Color =
    f.detectorDetectsParticle(
      d.detector1Start,
      d.detector1Width,
      d.particle1Start,
      d.particle1Width,
    ) ||
    f.detectorDetectsParticle(
      d.detector1Start,
      d.detector1Width,
      d.particle2Start,
      d.particle2Width,
    )
      ? r.RED
      : r.WHITE;

  let detector2Color =
    f.detectorDetectsParticle(
      d.detector2Start,
      d.detector2Width,
      d.particle2Start,
      d.particle2Width,
    ) ||
    f.detectorDetectsParticle(
      d.detector2Start,
      d.detector2Width,
      d.particle2Start,
      d.particle2Width,
    )
      ? r.RED
      : r.WHITE;

  let detector3Color = f.detectorDetectsParticle(
    d.detector3Start,
    d.detector2Height,
    d.verticalParticleY,
    d.verticalParticleHeight,
  )
    ? r.RED
    : r.WHITE;

  r.DrawRectangle(
    d.particle1Start,
    0,
    d.particle1Width,
    d.particle1Height,
    r.BLUE,
  );
  r.DrawRectangle(
    d.particle2Start,
    0,
    d.particle2Width,
    d.particle2Height,
    r.BLUE,
  );
  r.DrawRectangle(
    d.detector1Start,
    0,
    d.detector1Width,
    r.GetScreenHeight(),
    detector1Color,
  );
  r.DrawRectangle(
    d.detector2Start,
    0,
    d.detector2Width,
    r.GetScreenHeight(),
    detector2Color,
  );

  r.DrawRectangle(
    0,
    d.verticalParticleY,
    r.GetScreenWidth(),
    d.verticalParticleHeight,
    r.BLUE,
  );
  r.DrawRectangle(
    0,
    d.detector3Start,
    r.GetScreenWidth(),
    d.detector2Height,
    detector3Color,
  );

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
