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