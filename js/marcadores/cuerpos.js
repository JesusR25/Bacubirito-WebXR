function onQRCodeScanned(scannedText)
{
    if(scannedText == 'Reproducir Video'){
        document.getElementById("btn5").innerHTML = 'Ocultar';
        document.querySelector("#cometa").setAttribute("visible", false);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        //Mostrar video
        document.querySelector("#hist").play();
        document.getElementById("historia").style.display = "block";
    }
    if(scannedText == 'Cometa'){
        document.getElementById("btn5").innerHTML = 'Ocultar Cometa';
        document.querySelector("#hist").pause();
        document.getElementById("historia").style.display = "none";
        document.querySelector("#cometa").setAttribute("visible", true);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        Swal.fire({
            title: 'Cometa',
            text: 'Da click en el boton ocultar para ocultar el Cometa',
            imageUrl: 'https://dam.ngenespanol.com/wp-content/uploads/2021/09/cometa-bernardinelli-bernstein.jpg',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
    if(scannedText == 'Meteorito'){
        document.getElementById("btn5").innerHTML = 'Ocultar Meteorito';
        document.querySelector("#hist").pause();
        document.getElementById("historia").style.display = "none";
        document.querySelector("#meteorito").setAttribute("visible", true);
        document.querySelector("#cometa").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        Swal.fire({
            title: 'Meteorito',
            text: 'Da click en el boton ocultar para ocultar el Meteorito.',
            imageUrl: 'https://thumbs.dreamstime.com/b/meteorito-asteroide-bola-de-fuego-apocalipsis-tierra-89615502.jpg',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
    if(scannedText == 'Asteroide'){
        document.getElementById("btn5").innerHTML = 'Ocultar Asteroide';
        document.querySelector("#hist").pause();
        document.getElementById("historia").style.display = "none";
        document.querySelector("#asteroide").setAttribute("visible", true);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
        Swal.fire({
            title: 'Asteroide',
            text: 'Da click en el boton ocultar para ocultar el Asteroide',
            imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/164A7/production/_101630319_f0055887-asteroid_artwork-spl.jpg',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
    if(scannedText == 'Agujero Negro'){
        document.getElementById("btn5").style.display = "block";
        document.querySelector("#hist").pause();
        document.getElementById("historia").style.display = "none";
        document.getElementById("btn6").style.display = "none";
            document.getElementById("btn5").innerHTML = 'Ocultar Agujero';
            document.querySelector("#black").setAttribute("visible", true);
            document.querySelector("#galaxy").setAttribute("visible", false);
            document.querySelector("#moon").setAttribute("visible", false);
            document.querySelector("#system").setAttribute("visible", false);
            document.querySelector("#sun").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
        
    }
    if(scannedText == 'Sistema Solar'){
        document.querySelector("#hist").pause();
        document.getElementById("btn5").style.display = "block";
        document.getElementById("historia").style.display = "none";
        document.getElementById("btn6").style.display = "none";
            document.getElementById("btn5").innerHTML = 'Ocultar Sistema';
            document.querySelector("#black").setAttribute("visible", false);
            document.querySelector("#galaxy").setAttribute("visible", false);
            document.querySelector("#moon").setAttribute("visible", false);
            document.querySelector("#system").setAttribute("visible", true);
            document.querySelector("#sun").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
    }
    if(scannedText == 'Galaxia'){
        document.querySelector("#hist").pause();
        document.getElementById("btn5").style.display = "block";
        document.getElementById("historia").style.display = "none";
        document.getElementById("btn6").style.display = "none";
            document.getElementById("btn5").innerHTML = 'Ocultar Galaxia';
            document.querySelector("#black").setAttribute("visible", false);
            document.querySelector("#galaxy").setAttribute("visible", true);
            document.querySelector("#moon").setAttribute("visible", false);
            document.querySelector("#system").setAttribute("visible", false);
            document.querySelector("#sun").setAttribute("visible", false);
        document.querySelector("#asteroide").setAttribute("visible", false);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
    }
    if(scannedText == 'Satelite'){
        document.querySelector("#hist").pause();
        document.getElementById("btn5").style.display = "block";
        document.getElementById("historia").style.display = "none";
        document.getElementById("btn6").style.display = "none";
            document.getElementById("btn5").innerHTML = 'Ocultar Satelite';
            document.querySelector("#black").setAttribute("visible", false);
            document.querySelector("#galaxy").setAttribute("visible", false);
            document.querySelector("#moon").setAttribute("visible", false);
            document.querySelector("#system").setAttribute("visible", false);
            document.querySelector("#sun").setAttribute("visible", true);
        document.querySelector("#asteroide").setAttribute("visible", false);
        document.querySelector("#meteorito").setAttribute("visible", false);
        document.querySelector("#cometa").setAttribute("visible", false);
        
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

