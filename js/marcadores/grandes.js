function ocultar(){
    document.getElementById('imagenes').style.display = "none";
}


function onQRCodeScanned(scannedText)
{
    if(scannedText == 'Agpalilik'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Agpalilik.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Agpalilik.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Ahnighito'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Ahnighito.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Ahnighito.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Bacubirito'){
        document.getElementById("imagenes").style.display = "block";
        document.getElementById("inf").src="../../assets/MetGrandes/Bacubirito.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Bacubirito.png";
    }
    if(scannedText == 'Chupaderos'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Chupaderos.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Chupaderos.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'El Chaco'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/ElChaco.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-ElChaco.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Hoba'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Hoba.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Hoba.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Mbozi'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Mbozi.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Mbozi.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Mundrabilla'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Mundrabilla.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Mundrabilla.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Willamette'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Willamette.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Willamette.png";
        document.getElementById("imagenes").style.display = "block";
    }
    if(scannedText == 'Armanty'){
        document.getElementById("imagenes").removeAttribute('src');
        document.getElementById("inf").src="../../assets/MetGrandes/Armanty.png";
        document.getElementById("ima").src="../../assets/MetImg/Met-Armanty.png";
        document.getElementById("imagenes").style.display = "block";
    }
}

//funtion returning a promise with a video stream
function provideVideoQQ()
{
    return navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        var exCameras = [];
        devices.forEach(function(device) {
        if (device.kind === 'videoinput') {
          exCameras.push(device.deviceId)
        }
     });
        
        return Promise.resolve(exCameras);
    }).then(function(ids){
        if(ids.length === 0)
        {
          return Promise.reject('Could not find a webcam');
        }
        
        return navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment'
            }
        });        
    });                
}  

//this function will be called when JsQRScanner is ready to use
function JsQRScannerReady()
{
    //create a new scanner passing to it a callback function that will be invoked when
    //the scanner succesfully scan a QR code
    var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideoQQ);
    //reduce the size of analyzed images to increase performance on mobile devices
    jbScanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById("scanner");
    if(scannerParentElement)
    {
        //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
    }        
}

