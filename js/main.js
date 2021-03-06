// Timer fields
const hourElements = document.querySelector('.hour'),
      minuteElements = document.querySelector('.minute'),
      secondElements = document.querySelector('.second'),
      millisecondElements = document.querySelector('.millisecond');

// Buttons
const startBtn = document.querySelector('.start'),
      pauseBtn = document.querySelector('.pause'),
      stopBtn = document.querySelector('.stop'),
      newBtn = document.querySelector('.new');

//Listeners
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  clearFields();
  disableBtn();
});

newBtn.addEventListener('click', () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector('.results'),
        block = document.createElement('div');
  block.classList.add('results__info');
  block.innerText = `Result: ${counter}: ${hour}:${minute}:${second}:${millisecond}`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

// Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true;

function startTimer() {
  millisecond++;

  //Msec
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

  //Sec
  if (second < 9) {
    secondElements.innerText = '0' + second;
  }
  if (second > 9) {
    secondElements.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElements.innerText = '0' + minute;
    second = 0;
    secondElements.innerText = '0' + second;
  }

  //Min
  if (minute < 9) {
    minuteElements.innerText = '0' + minute;
  }
  if (minute > 9) {
    minuteElements.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElements.innerText = '0' + hour;
    minute = 0;
    minuteElements.innerText = '0' + minute;
  }

  //Hours
  if (hour < 9) {
    hourElements.innerText = '0' + hour;
  }
  if (hour > 9) {
    hourElements.innerText = hour;
  }

  newBtn.disabled = false;
  
}

function clearFields() {
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  hourElements.textContent = '00';
  minuteElements.textContent = '00';
  secondElements.textContent = '00';
  millisecondElements.textContent = '00';
}

function disableBtn() {
  if (disabled) {
    newBtn.disabled = true;
  }
}

disableBtn();