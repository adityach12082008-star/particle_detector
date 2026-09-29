const d2 = require("./detector2");

const upperBound = windowHeight - d2.detector2Height;
const verticalParticleY = 100;
const verticalParticleHeight = 10;
const detectorStart = 0;
const detectorVelocity = 3;

module.exports = {
  upperBound3: upperBound,
  verticalParticleY,
  verticalParticleHeight,
  detector3Start: detectorStart,
  detectorVelocity2: detectorVelocity,
};
