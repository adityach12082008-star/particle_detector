function detectorVelocity(velocity, start, upperBound, lowerBound) {
  return hasReachedBounds(start, upperBound, lowerBound) ? -velocity : velocity;
}

function moveDetector(start, velocity) {
  return start + velocity;
}

function hasReachedBounds(start, upperBound, lowerBound) {
  return start > upperBound || start < lowerBound;
}

function detectorDetectsParticle(dS, dW, pS, pW) {
  return dS + dW >= pS && dS <= pS + pW ? true : false;
}

module.exports = {
  moveDetector,
  hasReachedBounds,
  detectorVelocity,
  detectorDetectsParticle,
};
