const eye = document.querySelectorAll('.eye');
let red = 0;
let green = 0;
let blue = 0;

const colours = ['red', 'green', 'blue']
function createButtons() {
    for (let i = 0; i < colours.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', colours[i]);
        document.querySelector('#menu').appendChild(div);
        div.innerHTML = `${colours[i]}: <button class="${colours[i]} up">↑</button><button class="${colours[i]} down">↓</button>`
    }
}
createButtons();
let activeColour
let colourDirection



//<div class="slidecontainer">
//   <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
// </div>

const eyes = {
  red: 0,
  green: 0,
  blue: 0
}

const menu = document.querySelector('#menu');
menu.addEventListener('click', function(e) {
  if (e.target.className.includes('up')) {
    colourDirection = 'up'
  }
  if (e.target.className.includes('down')) {
    colourDirection = 'down'
  }
  if (e.target.className.includes('red')) {
    activeColour = 'red';
  }
  if (e.target.className.includes('green')) {
    activeColour = 'green';
  }
  if (e.target.className.includes('blue')) {
    activeColour = 'blue';
  }
  console.log(eyes);
  changeEyeColour(eyes, activeColour, colourDirection);
  eye[0].style.backgroundColor = `rgb(${eyes.red}, ${eyes.green}, ${eyes.blue})`;
  eye[1].style.backgroundColor = `rgb(${eyes.red}, ${eyes.green}, ${eyes.blue})`;
});

function changeEyeColour(eyes, colour, direction) {
  if (direction === 'up' && eyes[colour] <= 255) {
    eyes[colour] += 5;
  } else if (direction === 'down' && eyes[colour] >= 0) {
    eyes[colour] -= 5;
  }
}