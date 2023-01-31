function advertencia(){
    swal({
      title: "Advertencia",
      text: " Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \nEn caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \nSe recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \nEsta aplicación no requiere de ningún dispositivo adicional para su uso.",
      icon: "warning",
      button: "Entendido",
    });
  }

  function historia(){
    swal({
      title: "Resumen",
      text: "•	En esta escena está disponible el marcador Video. \n •	Conoce los principales acontecimientos del meteorito, escanea el marcador para reproducir el video. \n •	Posiciónate sobre cada botón para visualizar una breve ayuda.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "Bacubirito QR.html";
      } else {
      }
    });
  }

  function meteorito(){
    swal({
      title: "Resumen",
      text: "•	Marcador disponible: Meteorito. \n •	Escanea el marcador Meteorito para visualizar una representación 3D. Podrás  rotarlo con los gestos que utilices en la pantalla. \n",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "/pagina/Modelo Bacubirito.html";
      } else {
      }
    });
  }

  function composicion(){
    swal({
      title: "Resumen",
      text: "•	En esta escena están disponibles los marcadores Composición y Video. \n	•	Escanea el marcador Video para reproducir el video que relata la composición química del Meteorito de Bacubirito. Escanea el marcador de Composición para visualizar qué elementos químicos forman parte del meteorito. \n •	Posiciónate sobre cada botón para visualizar una breve ayuda.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "Composicion QR.html";
      } else {
      }
    });
  }

  function grandes(){
    swal({
      title: "Resumen",
      text: "•	En esta escena se usan todos los marcadores ubicados en el Pasillo A. \n	•	Escanea el marcador que representa a cada meteorito para visualizar su información más relevante acerca de cada uno de los meteoritos encontrados en nuestro planeta. \n •	Da click en la imagen para ocultarla.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "Grandes QR.html";
      } else {
      }
    });
  }

  function vista(){
    swal({
      title: "Resumen",
      text: "•	En esta escena se puede apreciar nuestro planeta, con efecto de movimiento de rotación. A un costado, se puede ver un asteroide. ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "/pagina/Planeta Mio.html";
      } else {
      }
    });
  }

  function juego(){
    swal({
      title: "Resumen",
      text: "•	El objetivo es destruir la mayor cantidad de asteroides en el menor tiempo posible.  ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "/pagina/Juego Meteoro.html";
      } else {
      }
    });
  }

  function cuerpos(){
    swal({
      title: "Resumen",
      text: "•	Reproduce el video escaneando el marcador “Video”. Puedes volter tu celular para una mejor visualizacion. \n •	Posteriormente, escanea cada marcador un asteroide y  un cinturón de asteroides  ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "/pagina/Modelos DInamicos.html";
      } else {
      }
    });
  }