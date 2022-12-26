var video = document.querySelector("video");

if (video && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
      
      setTimeout( e => {
      let embeddedDiv = document.querySelector("#myEmbeddedScene")
      
      video.style.height = video.videoHeight + "px"
      video.style.width = video.videoWidth + "px"

      embeddedDiv.style.height = video.videoHeight + "px"
      embeddedDiv.style.width = video.videoWidth + "px"
      }, 100)

    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}