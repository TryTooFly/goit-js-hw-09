function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);

function startChanging() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.disabled = true;
}

function stopChanging() {
  body.style.backgroundColor = clearInterval(timerId);

  startBtn.disabled = false;
}
