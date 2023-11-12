let arr1 = [3, 5, 1, 8, -3, 7, 8];

let arr2 = [7, 12, 6, 9, 20, 56, 89];

let arr3 = [];

let aar4 = [0, 0, 0, 0, 0, 0];
function minF(x) {
  if (x.length == 0) {
    return -1;
  }
  let min = x[0];
  for (i = 0; i < x.length; i++) {
    if (min > x[i + 1]) {
      min = x[i + 1];
    }
  }

  return min;
}
minArr1 = minF(arr2);
document.write(minArr1);
