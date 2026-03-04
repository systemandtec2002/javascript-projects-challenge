
let timerDisplay = document.querySelector('.timerDisplay');
const startBtn  = document.getElementById('startBtn');
const stopBtn   = document.getElementById('stopBtn');
const resetBtn  = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

function startTimer(){
  msec++;
  if(msec == 100){
    msec = 0;
    secs++;
    if(secs == 60){
      secs = 0;
      mins++;
    }
  }

  let mseString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minString}:${secsString}:${mseString}`;
}

startBtn.addEventListener("click", () => {
  if(timerId !== null){
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  msec = secs = mins = 0;
  timerDisplay.innerHTML = "00:00:00";
});
