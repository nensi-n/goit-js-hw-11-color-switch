const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyColor: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

let changeColor = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangeColor() {
    refs.startBtn.setAttribute('disabled', true);
    changeColor = setInterval(() => {
        refs.bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
};

function stopChangeColor() {
    clearInterval(changeColor);
    refs.startBtn.removeAttribute('disabled');
};

