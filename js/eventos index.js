function advertencia(){
    swal({
      title: "Advertencia",
      text: " Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \nEn caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \nSe recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \nEsta aplicación no requiere de ningún dispositivo adicional para su uso.",
      icon: "warning",
      button: "Entendido",
    });
  }

  function historia(){
    Swal.fire({
      title: 'Resumen',
      html: '•	En esta escena está disponible el marcador <b> Video. </b> <br><br> •	Conoce los principales acontecimientos del meteorito, escanea el marcador para reproducir el video. <br><br> •	Posiciónate sobre cada botón para visualizar una breve ayuda.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Bacubirito QR.html";
      }
    })
  }

  function meteorito(){
    Swal.fire({
      title: 'Resumen',
      html: '•	Marcador disponible: <b> Meteorito.</b> <br><br> •	Escanea el marcador Meteorito para visualizar una representación 3D. Podrás  rotarlo con los gestos que utilices en la pantalla.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/pagina/Modelo Bacubirito.html";
      }
    })
  }

  function composicion(){
    Swal.fire({
      title: 'Resumen',
      html: '•	En esta escena están disponibles los marcadores <b> Composición </b> y <b> Video </b>. <br><br>	•	Escanea el marcador <b>Video</b> para reproducir el video que relata la composición química del Meteorito de Bacubirito <br><br>.• Escanea el marcador de <b>Composición</b> para visualizar qué elementos químicos forman parte del meteorito. <br><br> •	Posiciónate sobre cada botón para visualizar una breve ayuda.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Composicion QR.html";
      }
    })
  }

  function grandes(){
    Swal.fire({
      title: 'Resumen',
      html: '•	En esta escena se usan todos los marcadores ubicados en el Pasillo A. <br><br>	•	Escanea el marcador que representa a cada meteorito para visualizar su información más relevante acerca de cada uno de los meteoritos encontrados en nuestro planeta. <br><br> •	Da click en la imagen para ocultarla.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Grandes QR.html";
      }
    })
  }

  function vista(){
    Swal.fire({
      title: 'Resumen',
      html: '•	En esta escena se puede apreciar nuestro planeta, con efecto de movimiento de rotación. A un costado, se puede ver un asteroide.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/pagina/Planeta Mio.html";
      }
    })
  }

  function juego(){
    Swal.fire({
      title: 'Resumen',
      html: '•	El objetivo es destruir la mayor cantidad de asteroides en el menor tiempo posible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/pagina/Juego Meteoro.html";
      }
    })
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