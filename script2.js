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

const menu = document.querySelector('#menu');
menu.addEventListener('click', function(e) {
  if (e.target.className.includes('up')) {
    colourDirection = 'up'
    if (e.target.className.includes('red')) {
      red += 5;
    }
    if (e.target.className.includes('green')) {
      green += 5;
    }
    if (e.target.className.includes('blue')) {
      blue += 5;
    }
  }
  if (e.target.className.includes('down')) {
    colourDirection = 'down'
    if (e.target.className.includes('red')) {
      red -= 5;
     }
     if (e.target.className.includes('green')) {
     green -= 5;
     }
     if (e.target.className.includes('blue')) {
       blue -= 5;
     }
  }
  changeEyeColour();
});

function changeEyeColour (){
  eye[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  eye[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(eye[0])
}