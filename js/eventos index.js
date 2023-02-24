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
    title: 'Historia del Meteorito de Bacubirito',
    html: '•	En esta escena está disponible el marcador <b> Video. </b> <br><br> •	Conoce los principales acontecimientos del Meteorito, escanea el marcador o presiona el botón <b>Video</b> para reproducir el video. <br><br> •	Se sugiere coloque su dispositivo móvil en <b>posición vertical</b> con el fin de tener una mejor visualización.',
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
    title: 'Meteorito de Bacubirito',
    html: '•	En esta pantalla visualizaras una representación en 3D del Meteorito de Bacubirito, podrás rotarlo, acercarlo o alejarlo con los gestos que utilices en la pantalla. <br><br> •	Se sugiere coloque su dispositivo móvil en <b>posición vertical</b> con el fin de tener una mejor visualización.' ,
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
    title: 'Composición Química del Meteorito',
    html: '•	En esta escena están disponibles los marcadores <b> Composición </b> y <b> Video</b>. <br><br>	•	Escanea el marcador <b>Video</b> o presiona el botón <b>Video</b> para reproducir el video que relata la composición química del Meteorito de Bacubirito.<br><br>• Escanea el marcador de <b>Composición</b> o presiona el botón <b>Composición</b> para visualizar qué elementos químicos forman parte del meteorito.',
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
    title: 'Meteoritos más grandes',
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
    title: 'Vista espacial',
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
    title: 'Minijuego',
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
  Swal.fire({
    title: 'Cuerpos Celestes',
    html: '•	Escanea el marcador <b>Video</b> para reproducir un video donde se explica cómo está formado cada uno de los cuerpos celestes. <br><br>  •  Presiona el botón <b>Meteorito, Cometa</b> y <b>Asteroide</b> respectivamente para visualizar su representación tridimensional en la pantalla.<br><br>•	Se sugiere coloque su dispositivo móvil en <b>posición horizontal</b> con el fin de optimizar la visualización del video.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "Cuerpos QR.html";
    }
  })
}

function cinturon(){
  Swal.fire({
    title: 'Cinturón de Asteroides',
    html: '•	En esta escena puedes visualizar cómo orbitan los asteroides en el <b>Cinturón de Asteroides</b>. <br><br> •	Puede interactuar con la pantalla para rotar la vista.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/pagina/cinturon.html";
    }
  })
}

function quiz(){
  Swal.fire({
    title: 'Quiz',
    html: '•	En esta escena, deberás responder un examen que contempla los conocimientos adquiridos con el sitio web.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/pagina/Quiz.html";
    }
  })
}