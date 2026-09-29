const d2 = require("./detector2");
const w = require("./window.js");

const upperBound = w.windowHeight - d2.height;
const verticalParticleY = 100;
const verticalParticleHeight = 10;
let start = 0;
let velocity = 3;

module.exports = {
  upperBound,
  verticalParticleY,
  verticalParticleHeight,
  start,
  velocity,
};
