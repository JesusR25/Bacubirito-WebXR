import { loginWithEmail, login, obtener } from "../firebase.js";

var botonreg = document.getElementById("registrar");
var botonini = document.getElementById("iniciar");
var botoninv = document.getElementById("invitado");


botonreg.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("pass").value;
  var nombre = document.getElementById("user").value;
  var select = document.querySelector("#valores");
  var escolaridad = select.value;

  loginWithEmail(nombre, email, escolaridad, contraseña);
});

botonini.addEventListener("click", (e) => {
  var email = document.getElementById("emailis").value;
  var password = document.getElementById("passis").value;
  login(email, password);
});


botoninv.addEventListener("click", (e) => {
    Swal
    .fire({
      title: "Ingresa tu escolaridad",
      html:'<select class="select-css" id="mySelectElement"><option>Primaria</option><option>Secundaria</option><option>Bachillerato</option><option>Licenciatura/Ingenieria</option><option>Posgrado</option><option>Otros</option></select>',
      showCancelButton: true,
      confirmButtonText: "Ingresar",
      cancelButtonText: "Cancelar",
    })
    .then(resultado => {
      if (resultado.value) {
        var select = document.querySelector("#mySelectElement");
        var valor = select.value;
        console.log(valor);
        obtener(valor);
        let timerInterval;
        Swal.fire({
          icon: 'success',
          title: "Inicio de sesion correcto",
          html: "Cargando el perfil del usuario",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "Menu.html";
          }
        });
      }
    });
  });