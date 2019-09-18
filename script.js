/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

const eye = document.querySelectorAll('.eye');
  let red = 0;
  let green = 0;
  let blue = 0;

function changeEyeColour (){
  red += 5;
  eye[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(eye[0]);
}

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

const menu = document.