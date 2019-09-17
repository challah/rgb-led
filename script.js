/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

const eyeColour = document.querySelector('.eye');
console.log(eyeColour);

const red = 0;

function changeEyeColour (){
  eyeColour.setAttribute = ('background-color', `rgb(${red}, ${green}, ${blue}`)
}