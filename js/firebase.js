  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
  import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
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

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();
 

  export const saveTask = (title, description) =>
    addDoc(collection(db, 'usuarios'), {title, description})

  export const quiz = (aciertos, email, nombre, desempeño, fecha, hora) =>
  setDoc(doc(db, "quiz", nombre), {
    aciertos: aciertos,
    email: email,
    nombre, nombre,
    desempeño, desempeño,
    fecha: fecha,
    hora: hora
  });

  export const getLoggedUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
  }
  