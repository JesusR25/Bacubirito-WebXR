// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
  query,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  where,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCQK1rZdXPeQhcc9RBxcdpeyHTZbIUno",
  authDomain: "ccar-2a74c.firebaseapp.com",
  projectId: "ccar-2a74c",
  storageBucket: "ccar-2a74c.appspot.com",
  messagingSenderId: "532265497230",
  appId: "1:532265497230:web:9cd7e947b3c72a84498fdf",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore();
const auth = getAuth(app);

//Ingresas como invitado
export const obtener = async (escolaridad) => {
  const inv = collection(db, "usuarios");
  const q = query(inv, where("invitadoID", "!=", null));
  const consulta = await getDocs(q);
  let final;
  consulta.forEach((doc) => {
    final = doc.get("invitadoID");
  });
  final = final + 1;
  var str = final.toString();
  console.log(final);
  setDoc(doc(db, "usuarios", str), {
    invitadoID: final,
    escolaridad: escolaridad,
  });
};

export const saveTask = (title, description) =>
  addDoc(collection(db, "usuarios"), { title, description });

export const quiz = (aciertos, email, nombre, desempeño, fecha, hora) =>
  setDoc(doc(db, "quiz", nombre), {
    aciertos: aciertos,
    email: email,
    nombre,
    desempeño,
    fecha: fecha,
    hora: hora,
  });
//Iniciar sesion
export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });
      // ...
      redirigir();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Incorrecto",
        text: "La contraseña y correo no coinciden",
      });
    });
};

//Registrarse
export const loginWithEmail = (nombre, email, escolaridad, contra) => {
  createUserWithEmailAndPassword(auth, email, contra)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //GUARDAR DOCUMENTO TAMBIEN
      setDoc(doc(db, "usuarios", email), {
        nombre: nombre,
        email: email,
        escolaridad: escolaridad,
        contraseña: contra,
      });
      Swal.fire({
        icon: "success",
        html: "¡Registro guardado exitosamente!",
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = "Menu.html";
        }
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
};

//Obtener informacion del usuario activo
export const getLoggedUser = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    } else {
      console.log("entrar como invitado");

    }
  });
};

function redirigir() {
  Swal.fire({
    icon: "warning",
    title: "Advertencia",
    html: "Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \n En caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \n Se recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \n Esta aplicación no requiere de ningún dispositivo adicional para su uso.",
    confirmButtonText: "Entendido",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      let timerInterval;
      Swal.fire({
        icon: "success",
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
}
