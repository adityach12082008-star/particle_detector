windowWidth = 400;
windowHeight = 200;

const detectorWidth = 10;
const detectorHeight = 20;
const particleHeight = windowHeight;
const particleStart = 300;
const particleWidth = 20;
const upperBound = windowWidth - detectorWidth;
const lowerBound = windowWidth / 2;
const detectorStart = lowerBound;
const detectorVelocity = 3;

module.exports = {
  detectorHeight,
  detectorWidth,
  particleHeight,
  particleStart,
  particleWidth,
  upperBound,
  lowerBound,
  detectorStart,
  detectorVelocity,
};
