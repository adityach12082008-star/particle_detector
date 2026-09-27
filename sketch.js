const r = require("raylib");
const f = require("./functions")


const windowWidth = 600;
const windowHeight = 300;

const scanner1Width = 50;
const scanner1Height = windowHeight;

const scanner2Width = 20

const maxRangefor1 = (windowWidth) / 2 - scanner1Width;

const maxRangefor2 = windowWidth - scanner2Width;
const minRangefor2 = (windowWidth) / 2;


const verticalScannerHeight = 40

const verticalScannerMaxRange = windowHeight - verticalScannerHeight

let scannerY = 0;
let scanner1X = 0;
let scanner1Y = 0;
let scanner2X = minRangefor2;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "scanner",);
  r.SetTargetFPS(60);
}

function update() {

  scanner1X = f.movingHorizontally1(scanner1X, maxRangefor1, 0);
  scanner2X = f.movingHorizontally2(scanner2X, maxRangefor2, minRangefor2);
  scannerY = f.movingVertically(scannerY, verticalScannerMaxRange, 0);

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const particle1Width = 30;
  const particle1X = 100;
  const particle1Y = 0;
  const particle1Height = windowWidth;

  const particle2X = 500;
  const particle2Y = 0;
  const particle2Width = 20;
  const particle2Height = windowHeight;


  const verticalParticleX = 0;
  const verticalParticleY = 100;
  const verticalParticleWidth = windowWidth;
  const verticalParticleHeight = 10;


  let colorFor1 = f.changeColor(scanner1X, scanner1Width, particle1X, particle1Width) || f.changeColor(scanner1X, scanner1Width, particle2X, particle2Width) ? r.RED : r.WHITE;
  let colorFor2 = f.changeColor(scanner2X, scanner2Width, particle2X, particle2Width) || f.changeColor(scanner2X, scanner2Width, particle2X, particle2Width) ? r.RED : r.WHITE;

  let colorV = f.changeColor(scannerY, verticalScannerHeight, verticalParticleY, verticalParticleHeight) ? r.RED : r.WHITE;

  r.DrawRectangle(particle1X, particle1Y, particle1Width, particle1Height, r.BLUE);
  r.DrawRectangle(particle2X, particle2Y, particle2Width, particle2Height, r.BLUE);
  r.DrawRectangle(scanner1X, scanner1Y, scanner1Width, scanner1Height, colorFor1);
  r.DrawRectangle(scanner2X, 0, scanner2Width, scanner1Height, colorFor2);

  r.DrawRectangle(verticalParticleX, verticalParticleY, verticalParticleWidth, verticalParticleHeight, r.BLUE)
  r.DrawRectangle(0, scannerY, windowWidth, verticalScannerHeight, colorV);

  r.EndDrawing()
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