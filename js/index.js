  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAoCQK1rZdXPeQhcc9RBxcdpeyHTZbIUno",
    authDomain: "ccar-2a74c.firebaseapp.com",
    projectId: "ccar-2a74c",
    storageBucket: "ccar-2a74c.appspot.com",
    messagingSenderId: "532265497230",
    appId: "1:532265497230:web:9cd7e947b3c72a84498fdf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  var botonreg = document.getElementById("registrar");
  var botonini = document.getElementById("iniciar");
  var botoninv = document.getElementById("invitado");

  botoninv.addEventListener("click", (e) => {
    invitado();
  });

  botonreg.addEventListener("click", (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var username = document.getElementById('user').value;
    var escolaridad = document.getElementById('esc').value;
    var select = document.querySelector("#valores");
    var valor = select.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid),{
          username: username,
          email: email,
          escolaridad: valor,
        })
        Swal.fire({
          icon: 'success',
          html: '¡Registro guardado exitosamente!',
          showConfirmButton: false,
          confirmButtonText: 'Aceptar',
          timer: 1500
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        console.log(errorMessage);
        alert(errorMessage);
        // ..
      });
  });

botonini.addEventListener("click", (e) => {
  var email = document.getElementById('emailis').value;
  var password = document.getElementById('passis').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, 'users/' + user.uid),{
        last_login: dt,
      })
      // ...
      redirigir();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'La contraseña y correo no coinciden',
      });
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function redirigir(){
  Swal.fire({
    icon: 'warning',
    title: 'Advertencia',
    html: 'Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \n En caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \n Se recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \n Esta aplicación no requiere de ningún dispositivo adicional para su uso.',
    confirmButtonText: 'Entendido',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
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
  })
}

function invitado() {
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
        let nombre = resultado.value;
        var hoy = new Date();
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        var fechaYHora = fecha + ' ' + hora;
        alert(fechaYHora);

        const nodo = ref(database, 'mi-dato/' + fechaYHora)
        set(nodo, {
          Escolaridad: valor
        })
      }
    });
}