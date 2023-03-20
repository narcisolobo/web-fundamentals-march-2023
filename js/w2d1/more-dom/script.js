// var joke1 = document.querySelector('#joke1');
// var joke2 = document.querySelector('#joke2');
// var joke3 = document.querySelector('#joke3');

// function chuckleJoke1() {
//   joke1.innerText++;
// }

// function groanJoke1() {
//   joke1.innerText--;
// }

// function chuckleJoke2() {
//   joke2.innerText++;
// }

// function groanJoke2() {
//   joke2.innerText--;
// }

function chuckle(jokeSpan) {
  jokeSpan.innerText++;
}

function jokeHover(jokeContainer) {
  jokeContainer.style.backgroundColor = 'lightgreen';
}

function jokeHoverOut(jokeContainer) {
  jokeContainer.style.backgroundColor = 'white';
}
