function deriveVelocity(velocity, start, upperBound, lowerBound) {
  return hasReachedBounds(start, upperBound, lowerBound) ? -velocity : velocity;
}

function moveDetector(start, velocity) {
  return start + velocity;
}

function hasReachedBounds(start, upperBound, lowerBound) {
  return start > upperBound || start < lowerBound;
}

function changeColor(sX, sW, pX, pW) {
  return sX + sW >= pX && sX <= pX + pW ? true : false;
}

module.exports = {
  moveDetector,
  hasReachedBounds,
  detectorVelocity: deriveVelocity,
  changeColor,
};
