const allButtons = document.querySelectorAll('.heart-icon');
const countDisplay = document.getElementById('counter');

let count = 0;

function incrementCounter() {
  count++;
  countDisplay.innerText = count;
}

for (const button of allButtons) {
  button.addEventListener('click', incrementCounter);
}