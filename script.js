/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

const eye = document.querySelectorAll('.eye');
console.log(eye[0], eye[1]);
  let red = 0;
  let green = 0;
  let blue = 0;

function changeEyeColour (){
  red += 5;
  
  eye[0].setAttribute = ('background-color', `rgb(${red}, ${green}, ${blue})`);
  console.log(eye[0].setAttribute = ('background-color', `rgb(${red}, ${green}, ${blue})`))
}