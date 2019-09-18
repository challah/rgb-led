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
        div.innerHTML = `${colours[i]}: <button class="${colours[i]} up">↑</button><button class="${colours[i]} down">↓</button><input type="range" min="0" max="255" value="0" class="slider" id="${colours[i]}-slider">`
    }
}
createButtons();

let redslider = document.querySelector('#red-slider')
redslider.oninput = function() {
  red = redslider.value;
  changeEyeColour();
  updateColour();
}
let greenslider = document.querySelector('#green-slider')
greenslider.oninput = function() {
  green = greenslider.value;
  changeEyeColour();
  updateColour();
}
let blueslider = document.querySelector('#red-slider')
redslider.oninput = function() {
  red = redslider.value;
  changeEyeColour();
  updateColour();
}

const menu = document.querySelector('#menu');
menu.addEventListener('click', function(e) {
  if (e.target.className.includes('up')) {
    colourDirection = 'up'
    if (e.target.className.includes('red') && red < 255) {
      red += 5;
    }
    if (e.target.className.includes('green') && green < 255) {
      green += 5;
    }
    if (e.target.className.includes('blue') && blue < 255) {
      blue += 5;
    }
  }
  if (e.target.className.includes('down')) {
    colourDirection = 'down'
    if (e.target.className.includes('red') && red > 0) {
      red -= 5;
     }
     if (e.target.className.includes('green') && green > 0) {
     green -= 5;
     }
     if (e.target.className.includes('blue') && blue > 0) {
       blue -= 5;
     }
  }
  changeEyeColour();
  updateColour();
});

function changeEyeColour (){
  eye[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  eye[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(eye[0])
}

function updateColour (){
  document.querySelector('#colourvalues').innerHTML = `RGB (${red}, ${green}, ${blue})`;
  redslider.value = red;
}