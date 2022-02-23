/* Stopwatch */

const stopWatchTag = document.querySelector(".stopWatch", [0]);
const startButtonTag = document.querySelector(".startButton", [0]);
const lapButtonTag = document.querySelector(".lapButton", [0]);
const pauseButtonTag = document.querySelector(".pauseButton", [0]);
const continueButtonTag = document.querySelector(".continueButton", [0]);
const restartButtonTag = document.querySelector(".restartButton", [0]);

let mili = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  mili += 1;
  if (mili === 100) {
    mili = 0;
    seconds += 1;

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
    }
  }

  const miliText = mili < 10 ? "0" + mili.toString() : mili;
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText + ":" + miliText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 10);
  console.log(intervalId);
  startButtonTag.remove();
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 10);
  console.log(intervalId);
});

restartButtonTag.addEventListener("click", () => {
  // clearInterval(intervalId);
  // (seconds = 0), (minutes = 0), (hours = 0);
  // intervalId = setInterval(startTime, 1000);
  location.reload();
});
