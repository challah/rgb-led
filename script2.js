const eye = document.querySelectorAll('.eye');
  let red = 0;
  let green = 0;
  let blue = 0;

 const colours = ['red', 'green', 'blue']
// function createButtons() {
//     for (let i = 0; i < colours.length; i++) {
//         const div = document.createElement('div');
//         div.setAttribute('id', colours[i]);
//         document.querySelector('#menu').appendChild(div);
//         div.innerHTML = `${colours[i]}: <button class="${colours[i]} up">↑</button><button class="${colours[i]} down">↓</button><input type="range" min="0" max="255" value="0" class="slider" id="${colours[i]}-slider">`
//     }
// }
// createButtons();

function createButtons() {
  let tableRow = []
  const table = document.createElement('table');
    for (let i = 0; i < colours.length; i++) {
        tableRow += `<tr><td>${colours[i].charAt(0).toUpperCase()} </td><td><button class="${colours[i]} up">↑</button></td><td><button class="${colours[i]} down">↓</button></td><td><input type="range" min="0" max="255" value="0" class="slider" id="${colours[i]}-slider"></td></tr>`
    }
  table.innerHTML = tableRow;
  document.querySelector('#menu').appendChild(table);
}
createButtons();


//SLIDERS!
let redslider = document.querySelector('#red-slider')
// redslider.oninput = function() {
//   red = Number(redslider.value);
//   changeEyeColour();
//   updateColour();
// }
let greenslider = document.querySelector('#green-slider')
// greenslider.oninput = function() {
//   green = Number(greenslider.value);
//   changeEyeColour();
//   updateColour();
// }
let blueslider = document.querySelector('#blue-slider')
// blueslider.oninput = function() {
//   blue = Number(blueslider.value);
//   changeEyeColour();
//   updateColour();
// }

let colourDirection = '';
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(e) {
  if (e.target.className.includes('up')) {
    colourDirection = 'up'
    if (e.target.className.includes('red') && red <= 250) {
      red += 5;
    }
    if (e.target.className.includes('green') && green <= 250) {
      green += 5;
    }
    if (e.target.className.includes('blue') && blue <= 250) {
      blue += 5;
    }
  }
  if (e.target.className.includes('down')) {
    colourDirection = 'down'
    if (e.target.className.includes('red') && red >= 5) {
      red -= 5;
     }
     if (e.target.className.includes('green') && green >= 5) {
     green -= 5;
     }
     if (e.target.className.includes('blue') && blue >= 5) {
       blue -= 5;
     }
  }
  changeEyeColour();
  updateColour();
});

menu.addEventListener('input', function(e) {
  if (e.target.tagName === 'INPUT') {
    if (e.target.id === 'red-slider') {
       red = Number(redslider.value);
       changeEyeColour();
       updateColour();
    }
    if (e.target.id === 'green-slider') {
       green = Number(greenslider.value);
       changeEyeColour();
       updateColour();
    }
    if (e.target.id === 'blue-slider') {
       blue = Number(blueslider.value);
       changeEyeColour();
       updateColour();
    }
  }
});

function changeEyeColour (){
  eye[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  eye[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.querySelector('h1').style.color = `rgb(${red}, ${green}, ${blue})`;
  console.log(eye[0])
}

function updateColour (){
  document.querySelector('#colourvalues').innerHTML = `RGB (${red}, ${green}, ${blue})`;
  redslider.value = red;
  greenslider.value = green;
  blueslider.value = blue;
}