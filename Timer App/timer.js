let timerDisplay = document.querySelector(".timer-display");
let stopBtn = document.querySelector(".stop");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = secs = mins;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
