function convertF(doF) {
  let doC = (doF - 32) / 1.8;
  document.getElementById("ketQua").innerHTML = "Celcius : " + doC;
}
