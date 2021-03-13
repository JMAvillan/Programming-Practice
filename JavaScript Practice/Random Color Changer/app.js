const btn = document.querySelector('button');
const textField = document.querySelector('#color');

let backgroundColor;
function getRandomNumber() {
  return Math.floor(Math.random() * 255 + 1);
}
function changeColor() {
  backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;

  textField.textContent = backgroundColor;
  document.querySelector('body').style.backgroundColor = backgroundColor;
}

btn.addEventListener('click', changeColor);
