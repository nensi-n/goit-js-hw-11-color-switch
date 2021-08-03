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
 
    changeColor = setInterval(() => {
        // while (true) {
        //     let randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        //     if (refs.bodyColor.style.backgroundColor != randomColor) {
        //         refs.bodyColor.style.backgroundColor = randomColor;
        //         break;
        //     }
        // }
        refs.bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        refs.startBtn.setAttribute('disabled', true);
      
  }, 1000);
};

function stopChangeColor() {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(changeColor);
};

