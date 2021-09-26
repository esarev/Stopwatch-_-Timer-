// Timer fields
const hourElements = document.querySelector('.hour'),
      minuteElements = document.querySelector('.minute'),
      secondElements = document.querySelector('.second'),
      millisecondElements = document.querySelector('.millisecond');

// Buttons
const startBtn = document.querySelector('.start'),
      pauseBtn = document.querySelector('.pause'),
      stopBtn = document.querySelector('.stop');

//Listeners
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

// Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval;

function startTimer() {
  millisecond++;

  //Ms
  if (millisecond < 9) {
    millisecondElements.innerText = '0' + millisecond;
  }
  if (millisecond > 9) {
    millisecondElements.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElements.innerText = '0' + second;
    millisecond = 0;
    millisecondElements.innerText = '0' + millisecond;
  }

  //S
  if (second < 9) {
    secondElements.innerText = '0' + second;
  }
  if (second > 9) {
    secondElements.innerText = second;
  }
  if (second > 99) {
    minute++;
    minuteElements.innerText = '0' + minute;
    second = 0;
    secondElements.innerText = '0' + second;
  }
}