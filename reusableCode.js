function moving(start, upperBound, lowerBound, velocity) {
  if (
    (start >= upperBound && velocity > 0) ||
    (start <= lowerBound && velocity < 0)
  ) {
    velocity = -velocity;
  }
  return velocity;
}

function changeColor(sX, sW, pX, pW) {
  return sX + sW >= pX && sX <= pX + pW ? true : false;
}

module.exports = {
  moving,
  changeColor,
};
