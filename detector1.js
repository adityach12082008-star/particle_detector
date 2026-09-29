const w = require("./window.js");

//for Detector1
const width = 20;
const particleWidth = 30;
const particleStart = 100;
const upperBound = w.windowWidth / 2 - width;
const particleHeight = w.windowHeight;
let start = 0;
let velocity = 5;

module.exports = {
  width,
  particleWidth,
  particleStart,
  upperBound,
  particleHeight,
  start,
  velocity,
};
