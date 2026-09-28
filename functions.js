function moving(value, max, min, speed) {
  if (value >= max && speed > 0) {
    speed = -speed;
  }

  if (value <= min && speed < 0) {
    speed = -speed;
  }

  return speed;
}

function changeColor(sX, sW, pX, pW) {

  return sX + sW >= pX && sX <= pX + pW ? true : false;

}

module.exports = {
  moving,
  changeColor,
};