const r = require("raylib");



function movingHorizontally(xValue, max, min) {
  if (xValue === max) {
    scannerDirection = -2
  }
  if (xValue === min) {
    scannerDirection = 2
  }
  return xValue + scannerDirection;
}

function changeColor(sX, sW, pX, pW) {

  return sX + sW >= pX && sX <= pX + pW ? r.RED : r.WHITE;

}

module.exports = {
  movingHorizontally,
  changeColor,
};
