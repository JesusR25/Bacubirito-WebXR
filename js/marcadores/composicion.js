var activo = false;
var volteado = false;
alert("En js");

function onQRCodeScanned(scannedText) {
  alert(scannedText);
  if (scannedText == 'Composición Química') {
    mostrar();
  }
  if (scannedText == "Reproducir Video") {
    document.getElementById("caja").style.display = "none";
    document.getElementById("flechas").style.display = "none";
    document.getElementById("flechasant").style.display = "none";
    document.querySelector("#cob").setAttribute("visible", false);
    document.querySelector("#mod").setAttribute("visible", false);
    document.querySelector("#comp").play();
    document.getElementById("composicion").style.display = "block";
  }
}

//funtion returning a promise with a video stream
function provideVideoQQ() {
  return navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      var exCameras = [];
      devices.forEach(function (device) {
        if (device.kind === "videoinput") {
          exCameras.push(device.deviceId);
        }
      });

      return Promise.resolve(exCameras);
    })
    .then(function (ids) {
      if (ids.length === 0) {
        return Promise.reject("Could not find a webcam");
      }

      return navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
      });
    });
}

//this function will be called when JsQRScanner is ready to use
function JsQRScannerReady() {
  //create a new scanner passing to it a callback function that will be invoked when
  //the scanner succesfully scan a QR code
  var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideoQQ);
  //reduce the size of analyzed images to increase performance on mobile devices
  jbScanner.setSnapImageMaxSize(300);
  var scannerParentElement = document.getElementById("scanner");
  if (scannerParentElement) {
    //append the jbScanner to an existing DOM element
    jbScanner.appendTo(scannerParentElement);
  }
}

function mostrar() {
  activo = false;
  document.querySelector("#comp").pause();
  document.getElementById("composicion").style.display = "none";
  document.getElementById("caja").style.display = "block";
  document.getElementById("flechas").style.display = "block";
  document.getElementById("flechasant").style.display = "block";
  document.querySelector("#cob").setAttribute("visible", true);
  document.querySelector("#mod").setAttribute("visible", true);
}

function botonReproducir(){
  document.getElementById("caja").style.display = "none";
  document.getElementById("flechas").style.display = "none";
  document.getElementById("flechasant").style.display = "none";
  document.querySelector("#cob").setAttribute("visible", false);
  document.querySelector("#mod").setAttribute("visible", false);
  activo = true;
  /*
  if (volteado) {
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "block";
    pausa.addEventListener("click", (e) => {
      document.querySelector("#vid").pause();
    });
    play.addEventListener("click", (e) => {
      document.querySelector("#vid").play();
    });
  }*/
  document.querySelector("#comp").play();
  document.getElementById("composicion").style.display = "block";
}

function botonPausar(){

}

function botonOcultar(){
  document.getElementById("composicion").style.display = "none";
  document.querySelector("#comp").pause();
  activo = false;
}
