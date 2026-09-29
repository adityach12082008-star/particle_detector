const w = require("./window.js");

const width = 10;
const height = 20;
const particleHeight = w.windowHeight;
const particleStart = 300;
const particleWidth = 20;
const upperBound = w.windowWidth - width;
const lowerBound = w.windowWidth / 2;
let start = lowerBound;
let velocity = 3;

module.exports = {
  width,
  height,
  particleHeight,
  particleStart,
  particleWidth,
  upperBound,
  lowerBound,
  start,
  velocity,
};
