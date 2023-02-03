function onQRCodeScanned(scannedText)
{
    if(scannedText == 'Cometa'){
        document.querySelector("#cometa").setAttribute("visible", true);
        document.querySelector("#asteroide").setAttribute("visible", false);
        Swal.fire({
            title: 'Cometa',
            text: 'Un cometa pasara a traves de tu pantalla.',
            imageUrl: 'https://dam.ngenespanol.com/wp-content/uploads/2021/09/cometa-bernardinelli-bernstein.jpg',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
    if(scannedText == 'Asteroide'){
        document.querySelector("#asteroide").setAttribute("visible", true);
        document.querySelector("#cometa").setAttribute("visible", false);
        Swal.fire({
            title: 'Asteroide',
            text: 'Un asteroide pasara a traves de tu pantalla.',
            imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/164A7/production/_101630319_f0055887-asteroid_artwork-spl.jpg',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
    if(scannedText == 'Cinturón De Asteroides'){
        document.querySelector("#asteroide").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
        Swal.fire({
            title: 'Cinturón de asteroides',
            text: 'Para ver el cinturon de asteroides es necesario pasar a otra pagina.',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = "/pagina/cinturon.html"
            } else if (result.isDenied) {
              
            }
          });
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

