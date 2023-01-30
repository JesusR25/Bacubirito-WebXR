var activo = false;
var volteado = false;
const modelList = ["cobalto", "niquel", "Hierro", "azufre"];
const meteoros = ["metcob", "metniq", "methie", "metazu"];
let introduccion = "El meteorito de bacubirito esta compuesto por 4 elementos. Haga click en la esfera para ver cada uno de ellos.";
let textazu = "El meteorito de Bacubirito contiene un 0.005% de Azufre.";
let textcob = "El meteorito de Bacubirito tambien contiene un 0.21% de Cobalto.";
let texthie = "El meteorito de Bacubirito contiene un 88.94% de Hierro.";
let textniq = "El meteorito de Bacubirito contiene un 6.98% de Niquel.";
const listtext = [textcob, textniq, texthie, textazu];
var idx = -1;

function onQRCodeScanned(scannedText) {
  alert(scannedText);
  if (scannedText == 'Composicion') {
    
    document.getElementById("composicion").style.display = "none";
    mostrar();

  }
  if(scannedText == 'Reproducir Video'){
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

function asignarflechas() {
  //Primer boton flecha
  document.getElementById("btnAnt").addEventListener("click", (e) => {
    if (idx <= 0) {
      idx = 3;
      alert(idx);
      document.querySelector("#cob").removeAttribute("gltf-model");
      document.querySelector("#cob").removeAttribute("scale");
      document.querySelector("#cob").setAttribute("scale", "0.6 0.6 0.6");
      document.querySelector("#cob").setAttribute("gltf-model", `#${modelList[idx]}`);
      //Texto sobre informacion del material
      document.querySelector("#parrafo").innerHTML = `#${listtext[idx]}`;
      document.querySelector("#mod").removeAttribute("gltf-model");
      document.querySelector("#mod").removeAttribute("scale");
      document.querySelector("#mod").setAttribute("scale", "0.4 0.4 0.4");
      document
        .querySelector("#mod")
        .setAttribute("gltf-model", `#${meteoros[idx]}`);
    } else {
      idx = idx - 1;
      document.querySelector("#cob").removeAttribute("gltf-model");
      document.querySelector("#cob").removeAttribute("scale");
      document.querySelector("#cob").setAttribute("scale", "0.6 0.6 0.6");
      document
        .querySelector("#cob")
        .setAttribute("gltf-model", `#${modelList[idx]}`);
      //Texto sobre informacion del material
      document.querySelector("#parrafo").innerHTML = `#${listtext[idx]}`;
      document.querySelector("#mod").removeAttribute("gltf-model");
      document.querySelector("#mod").removeAttribute("scale");
      document.querySelector("#mod").setAttribute("scale", "0.4 0.4 0.4");
      document.querySelector("#mod").setAttribute("gltf-model", `#${meteoros[idx]}`);
    }
  });
  //Segundo boton flecha
  document.getElementById("btnSig").addEventListener("click", (e) => {
    idx = (idx + 1) % modelList.length;
    alert(idx);
    document.querySelector("#cob").removeAttribute("gltf-model");
    document.querySelector("#cob").removeAttribute("scale");
    document.querySelector("#cob").setAttribute("scale", "0.6 0.6 0.6");
    document.querySelector("#cob").setAttribute("gltf-model", `#${modelList[idx]}`);
    //Texto sobre informacion del material
    document.querySelector("#parrafo").innerHTML = `#${listtext[idx]}`;
    document.querySelector("#mod").removeAttribute("gltf-model");
    document.querySelector("#mod").removeAttribute("scale");
    document.querySelector("#mod").setAttribute("scale", "0.4 0.4 0.4");
    document.querySelector("#mod").setAttribute("gltf-model", `#${meteoros[idx]}`);
  });
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
  document.querySelector("#comp").pause();
}

function botonOcultar(){
  document.getElementById("composicion").style.display = "none";
  document.querySelector("#comp").pause();
  activo = false;
}
