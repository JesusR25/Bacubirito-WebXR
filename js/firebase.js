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
let usuario = auth.currentUser
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

export const quiz = async (aciertos, desempeño, fecha, hora) => {
  let vari = auth.currentUser;
  if (vari == null) {
    const i = collection(db, "usuarios");
    const qe = query(i, where("invitadoID", "!=", null));
    const consultai = await getDocs(qe);
    let idv;
    consultai.forEach((doc) => {
      idv = doc.get("invitadoID");
    });
    idv = idv;
    const veces = collection(db, "quiz");
    const consulta = query(veces, where("invitadoID", "==", idv));
    const resul = await getDocs(consulta);
    let conteo = 0;
    resul.forEach((doc) => {
      conteo++;
    });
    setDoc(doc(db, "quiz", idv + " " + conteo), {
      aciertos: aciertos,
      invitadoID: idv,
      desempeño,
      fecha: fecha,
      hora: hora,
    });
  } else {
    const inv = collection(db, "quiz");
    const q = query(inv, where("email", "==", auth.currentUser.email));
    const consulta = await getDocs(q);
    let final = 0;
    consulta.forEach((doc) => {
      final++;
    });
    setDoc(doc(db, "quiz", auth.currentUser.email + " " + final), {
      aciertos: aciertos,
      email: auth.currentUser.email,
      desempeño,
      fecha: fecha,
      hora: hora,
    });
  }
};
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

export const juego = async ( nivel, tiempo) => {
  let vari = auth.currentUser;
  var date = new Date();
  var fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  var hora =  date.toLocaleTimeString();
  if (vari == null) {
    const i = collection(db, "usuarios");
    const qe = query(i, where("invitadoID", "!=", null));
    const consultai = await getDocs(qe);
    let idv;
    consultai.forEach((doc) => {
      idv = doc.get("invitadoID");
    });
    idv = idv;
    const veces = collection(db, "score");
    const consulta = query(veces, where("invitadoID", "==", idv));
    const resul = await getDocs(consulta);
    let conteo = 0;
    resul.forEach((doc) => {
      conteo++;
    });
    setDoc(doc(db, "score", idv + " " + conteo), {
      invitadoID: idv,
      fecha: fecha,
      hora: hora,
      nivel: nivel,
      tiempo: tiempo
    });
  } else {
    const inv = collection(db, "score");
    const q = query(inv, where("email", "==", auth.currentUser.email));
    const consulta = await getDocs(q);
    let final = 0;
    consulta.forEach((doc) => {
      final++;
    });
    setDoc(doc(db, "score", auth.currentUser.email + " " + final), {
      email: auth.currentUser.email,
      fecha: fecha,
      hora: hora,
      nivel: nivel,
      tiempo: tiempo
    });
  }
};