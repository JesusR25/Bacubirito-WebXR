// QUESTIONS
import {quiz} from '../firebase.js'

const questions = [
    {
      "question": "¿Cómo se llama el Meteorito encontrado en Sinaloa?",
      "answer1": "Hoba",
      "answer2": "Bacubirito",
      "answer3": "Cape York",
      "answer4": "El Chaco",
      "Correcta": "Bacubirito"
    },
    {
      "question": "¿El Meteorito de Cape York es el más grande del mundo?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Falso"
    },
    {
      "question":
        "¿El cinturón de asteroides se ubica entre Urano y Neptuno?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Falso"
    },
    {
      "question": "¿Un Cometa está mayormente compuesto por polvo, hielo y gas?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Verdadero"
    },
    {
      "question": "¿El Meteorito de Bacubirito está mayormente integrado por Hierro?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Verdadero"
    },
    {
      "question":
        "¿Un Meteorito se desintegra totalmente al entrar a la atmósfera terrestre?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Falso"
    },
    {
      "question": "¿El Meteorito de Hoba no es el más grande del mundo?",
      "answer1": "Falso",
      "answer2": "Verdadero",
      "Correcta": "Falso"
    },
    {
        "question": "¿Cuerpo celeste que no se desintegra totalmente al entrar a la atmósfera?",
        "answer1": "Meteorito",
        "answer2": "Cometa",
        "answer3": "Asteroide",
        "answer4": "Estrella",
        "Correcta": "Meteorito"
    },
    {
        "question": "¿El Meteorito de Bacubirito pesa alrededor de 19.5 toneladas?",
        "answer1": "Falso",
        "answer2": "Verdadero",
        "Correcta": "Verdadero"
    },
    {
        "question": "¿El Meteorito de Bacubirito está compuesto mayormente por Hierro y Níquel?",
        "answer1": "Verdadero",
        "answer2": "Falso",
        "Correcta": "Verdadero"
    }
  ]
  
  
  let currentQuestion = 0;
  let selectedAnswersData = [];
  let Respuestas = [];
  let desempeño = "";
  let RespCorrectas = ["Bacubirito", "Falso", "Falso", "Verdadero", "Verdadero", "Falso", "Falso", "Meteorito", "Verdadero", "Verdadero"];
  const totalQuestions =questions.length;
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  const valor1 = document.getElementById("opcion1");
  const valor2 = document.getElementById("opcion2");
  const valor3 = document.getElementById("opcion3");
  const valor4 = document.getElementById("opcion4");
  let correctas = 0;
  //Function to generate question 
  function generateQuestions (index) {
    if (index == 0 || index == 7) {
        document.getElementById("cuarta").style.display = "block";
        document.getElementById("tercera").style.display = "block";
        //Seleccion pregunta
        const question = questions[index];
        //Agregar respuestas a botones
        questionEl.innerHTML = `${index + 1}. ${question.question}`;
        option1.innerHTML = `${question.answer1}`;
        option2.innerHTML = `${question.answer2}`;
        option3.innerHTML = `${question.answer3}`;
        option4.innerHTML = `${question.answer4}`;
        valor1.setAttribute("value", question.answer1);
        valor2.setAttribute("value", question.answer2);
        valor3.setAttribute("value", question.answer3);
        valor4.setAttribute("value", question.answer4);
    }else{
        document.getElementById("cuarta").style.display = "none";
        document.getElementById("tercera").style.display = "none";
        //Seleccion pregunta
        const question = questions[index];
        //Agregar respuestas a botones
        questionEl.innerHTML = `${index + 1}. ${question.question}`
        option1.innerHTML = `${question.answer1}`
        option2.innerHTML = `${question.answer2}`
        valor1.setAttribute("value", question.answer1);
        valor2.setAttribute("value", question.answer2);
    }
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('¡Por favor seleccione su respuesta!');
          return;
      }
      //Validacion de respuesta
      const valor = document.querySelector('input[type="radio"]:checked').value;
      Respuestas.push(valor);
      const question = questions[currentQuestion];
      if(question.Correcta == valor){
        desempeño = desempeño + "C "
        correctas++;
        console.log(correctas);
      }else{
        desempeño = desempeño + "I "
      }
      selectedAnswersData.push()
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
        var date = new Date();
        var fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        var hora =  date.toLocaleTimeString();
        quiz(correctas, desempeño, fecha, hora );
        console.log(Respuestas);
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">Calificación obtenida: ${correctas} de 10 </h1>
           <div class="summary" style='display: flex;'>
              <h1>Respuestas Correcta</h1>
              <p>Possible - Personality Traits, see below for a summary based on your results:</p>
              <p>15 - 21- You Need Help</p>
              <p>10 - 15 - Good Soul</p>
              <p>5 - 10 - Meh </p>
              <p>5 - Are You Even Real</p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);
  