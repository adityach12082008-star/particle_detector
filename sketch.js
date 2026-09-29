const r = require("raylib");
const f = require("./detectorFunctions");
const d = require("./detector1");
const d2 = require("./detector2");
const d3 = require("./detector3");

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
  d.velocity = f.detectorVelocity(d.velocity, d.start, d.upperBound, 0);
  d.start = f.moveDetector(d.start, d.velocity);

  d2.velocity = f.detectorVelocity(
    d2.velocity,
    d2.start,
    d2.upperBound,
    d2.lowerBound,
  );
  d2.start = f.moveDetector(d2.start, d2.velocity);

  d3.velocity = f.detectorVelocity(d3.velocity, d3.start, d3.upperBound, 0);
  d3.start = f.moveDetector(d3.start, d3.velocity);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  let detector1Color =
    f.detectorDetectsParticle(
      d.start,
      d.width,
      d.particleStart,
      d.particleWidth,
    ) ||
    f.detectorDetectsParticle(
      d.start,
      d.width,
      d2.particleStart,
      d2.particleWidth,
    )
      ? r.RED
      : r.WHITE;

  let detector2Color =
    f.detectorDetectsParticle(
      d2.start,
      d2.width,
      d2.particleStart,
      d2.particleWidth,
    ) ||
    f.detectorDetectsParticle(
      d2.start,
      d2.width,
      d2.particleStart,
      d2.particleWidth,
    )
      ? r.RED
      : r.WHITE;

  let detector3Color = f.detectorDetectsParticle(
    d3.start,
    d2.height,
    d3.verticalParticleY,
    d3.verticalParticleHeight,
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
  r.DrawRectangle(
    d2.particleStart,
    0,
    d2.particleWidth,
    d2.particleHeight,
    r.BLUE,
  );
  r.DrawRectangle(d.start, 0, d.width, r.GetScreenHeight(), detector1Color);
  r.DrawRectangle(d2.start, 0, d2.width, r.GetScreenHeight(), detector2Color);

  r.DrawRectangle(
    0,
    d3.verticalParticleY,
    r.GetScreenWidth(),
    d3.verticalParticleHeight,
    r.BLUE,
  );
  r.DrawRectangle(0, d3.start, r.GetScreenWidth(), d2.height, detector3Color);

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
