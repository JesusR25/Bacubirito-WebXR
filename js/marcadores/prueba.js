import {saveTask} from '../firebase.js'
var botonini = document.getElementById("iniciar");

botonini.addEventListener("click", (e) => {
    var email = document.getElementById('emailis').value;
    var password = document.getElementById('passis').value;
    saveTask(email, password);
  });
