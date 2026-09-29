windowWidth = 400;
windowHeight = 200;

const width = 10;
const height = 20;
const particleHeight = windowHeight;
const particleStart = 300;
const particleWidth = 20;
const upperBound = windowWidth - width;
const lowerBound = windowWidth / 2;
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
