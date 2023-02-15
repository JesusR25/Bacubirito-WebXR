const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;
let nivel = 1;
let segundos = 0;
let minutos = 0;
let total_seconds;
let total_minutes;
let display_seconds;
let display_minutes;


const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

function obtener(){
    if(nivel == 1){
        nivel++;
        segundos = runningTime;
        return stopwatch.textContent;
    }else{
        minutos = Math.floor(runningTime - segundos);
        let ts = Math.floor(minutos / 1000);
        let tm = Math.floor(ts / 60);
        ts = (ts % 60).toString().padStart(2, "0");
        tm = tm.toString().padStart(2, "0");
        let tiempo = tm +":" + ts;
        nivel++;
        segundos = runningTime;
        return tiempo;
    }
}

function mejores (){
    
}

const calculateTime = runningTime => {
    total_seconds = Math.floor(runningTime / 1000);
    total_minutes = Math.floor(total_seconds / 60);

    display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}