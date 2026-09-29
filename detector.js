windowWidth = 400;
windowHeight = 200;

//for Detector1
const detector1Width = 20;
const particle1Width = 30;
const particle1Start = 100;
const upperBound1 = windowWidth / 2 - detector1Width;
const particle1Height = windowWidth;
const detector1Start = 0;
const detectorVelocity1 = 5;

//for Detector2
const detector2Width = 10;
const detector2Height = 20;
const particle2Height = windowHeight;
const particle2Start = 300;
const particle2Width = 20;
const upperBound2 = windowWidth - detector2Width;
const lowerBound2 = windowWidth / 2;
const detector2Start = lowerBound2;
const detectorVelocity3 = 3;

const upperBound3 = windowHeight - detector2Height;
const verticalParticleY = 100;
const verticalParticleHeight = 10;
const detector3Start = 0;
const detectorVelocity2 = 3;

module.exports = {
  detector1Width,
  particle1Width,
  particle1Start,
  upperBound1,
  particle1Height,
  detector1Start,
  detectorVelocity1,

  detector2Height,
  detector2Width,
  particle2Height,
  particle2Start,
  particle2Width,
  upperBound2,
  lowerBound2,
  detector2Start,
  detectorVelocity3,

  upperBound3,
  verticalParticleY,
  verticalParticleHeight,
  detector3Start,
  detectorVelocity2,
};
