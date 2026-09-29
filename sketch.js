const r = require("raylib");
const f = require("./detectorFunctions");
const d = require("./detector1");

const windowWidth = 400;
const windowHeight = 200;

// const d1.Width = 20;
// const d1.particleWidth = 30;
// const d1.particleStart = 100;
// const d1.upperBound = windowWidth / 2 - d.Width;
// const d1.particleHeight = windowWidth;
// let d1.scannertart = 0;
// let d1.velocity = 5;

//for Detector2
const detector2Width = 10;
const detector2Height = 20;
const particle2Height = windowHeight;
const particle2Start = 300;
const particle2Width = 20;
const upperBound2 = windowWidth - detector2Width;
const lowerBound2 = windowWidth / 2;
let detector2Start = lowerBound2;
let detectorVelocity3 = 3;

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
  d.velocity = f.detectorVelocity(d.velocity, d.start, d.upperBound, 0);
  d.start = f.moveDetector(d.start, d.velocity);

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
    f.detectorDetectsParticle(
      d.start,
      d.Width,
      d.particleStart,
      d.particleWidth,
    ) ||
    f.detectorDetectsParticle(d.start, d.Width, particle2Start, particle2Width)
      ? r.RED
      : r.WHITE;

  let detector2Color =
    f.detectorDetectsParticle(
      detector2Start,
      detector2Width,
      particle2Start,
      particle2Width,
    ) ||
    f.detectorDetectsParticle(
      detector2Start,
      detector2Width,
      particle2Start,
      particle2Width,
    )
      ? r.RED
      : r.WHITE;

  let detector3Color = f.detectorDetectsParticle(
    detector3Start,
    detector2Height,
    verticalParticleY,
    verticalParticleHeight,
  )
    ? r.RED
    : r.WHITE;

  r.DrawRectangle(
    d.particleStart,
    0,
    d.particleWidth,
    d.particleHeight,
    r.BLUE,
  );
  r.DrawRectangle(particle2Start, 0, particle2Width, particle2Height, r.BLUE);
  r.DrawRectangle(d.start, 0, d.Width, r.GetScreenHeight(), detector1Color);
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
