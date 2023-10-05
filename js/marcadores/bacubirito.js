

function onQRCodeScanned(scannedText)
{
    if(scannedText == 'Reproducir Video'){
        document.querySelector("#modelo").setAttribute("visible", false);
        document.getElementById("texto").style.display = "none";
        //Mostrar video
        document.querySelector("#hist").play();
        document.getElementById("historia").style.display = "block";
    }
    if(scannedText == 'Bacubirito'){
        document.querySelector("#modelo").setAttribute("visible", false);
        document.getElementById("texto").style.display = "none";
        //Mostrar video
        document.querySelector("#hist").play();
        document.getElementById("historia").style.display = "block";
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

