let scannerDirection1;
let scannerDirection2;
let scannerDirection3;


function movingHorizontally1(xValue, max, min) {
  if (xValue >= max) {
    scannerDirection1 = -2
  }
  if (xValue <= min) {
    scannerDirection1 = 2
  }
  return xValue + scannerDirection1;
}

function movingHorizontally2(xValue, max, min) {
  if (xValue >= max) {
    scannerDirection2 = -3
  }
  if (xValue <= min) {
    scannerDirection2 = 3
  }
  return xValue + scannerDirection2;
}

function movingVertically(xValue, max, min) {
  if (xValue >= max) {
    scannerDirection3 = -3
  }
  if (xValue <= min) {
    scannerDirection3 = 3
  }
  return xValue + scannerDirection3;
}

function changeColor(sX, sW, pX, pW) {

  return sX + sW >= pX && sX <= pX + pW ? true : false;

}

module.exports = {
  movingHorizontally1,
  movingHorizontally2,
  movingVertically,
  changeColor,
};