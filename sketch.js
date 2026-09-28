const r = require("raylib");
const f = require("./detectorFunctions");

const windowWidth = 400;
const windowHeight = 200;

const detector1Width = 20;
const particle1Width = 30;
const particle1Start = 100;
const upperBound1 = windowWidth / 2 - detector1Width;
const particle1Height = windowWidth;
let detector1Start = 0;
let detectorVelocity1 = 5;

const detector2Width = 10;
const particle2Height = windowHeight;
const particle2Start = 300;
const particle2Width = 20;
const upperBound2 = windowWidth - detector2Width;
const lowerBound2 = windowWidth / 2;
let detector2Start = lowerBound2;
let detectorVelocity3 = 3;

const detector2Height = 20;
const upperBound3 = windowHeight - detector2Height;
const verticalParticleY = 100;
const verticalParticleHeight = 10;
let detector3Start = 0;
let detectorVelocity2 = 3;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "scanner");
  r.SetTargetFPS(60);
}

function update() {
  detectorVelocity1 = f.detectorVelocity(
    detectorVelocity1,
    detector1Start,
    upperBound1,
    0,
  );
  detector1Start = f.moveDetector(detector1Start, detectorVelocity1);

  detectorVelocity2 = f.detectorVelocity(
    detectorVelocity2,
    detector2Start,
    upperBound2,
    lowerBound2,
  );
  detector2Start = f.moveDetector(detector2Start, detectorVelocity2);

  detectorVelocity3 = f.detectorVelocity(
    detectorVelocity3,
    detector3Start,
    upperBound3,
    0,
  );
  detector3Start = f.moveDetector(detector3Start, detectorVelocity3);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  let detector1Color =
    f.changeColor(
      detector1Start,
      detector1Width,
      particle1Start,
      particle1Width,
    ) ||
    f.changeColor(
      detector1Start,
      detector1Width,
      particle2Start,
      particle2Width,
    )
      ? r.RED
      : r.WHITE;

  let detector2Color =
    f.changeColor(
      detector2Start,
      detector2Width,
      particle2Start,
      particle2Width,
    ) ||
    f.changeColor(
      detector2Start,
      detector2Width,
      particle2Start,
      particle2Width,
    )
      ? r.RED
      : r.WHITE;

  let detector3Color = f.changeColor(
    detector3Start,
    detector2Height,
    verticalParticleY,
    verticalParticleHeight,
  )
    ? r.RED
    : r.WHITE;

  r.DrawRectangle(particle1Start, 0, particle1Width, particle1Height, r.BLUE);
  r.DrawRectangle(particle2Start, 0, particle2Width, particle2Height, r.BLUE);
  r.DrawRectangle(
    detector1Start,
    0,
    detector1Width,
    r.GetScreenHeight(),
    detector1Color,
  );
  r.DrawRectangle(
    detector2Start,
    0,
    detector2Width,
    r.GetScreenHeight(),
    detector2Color,
  );

  r.DrawRectangle(
    0,
    verticalParticleY,
    r.GetScreenWidth(),
    verticalParticleHeight,
    r.BLUE,
  );
  r.DrawRectangle(
    0,
    detector3Start,
    r.GetScreenWidth(),
    detector2Height,
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
