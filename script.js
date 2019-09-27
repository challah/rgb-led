let red = 0;
let green = 0;
let blue = 0;
const eye = document.querySelectorAll('.st13');

const colours = ['red', 'green', 'blue'];
function createMenu() {
let tableRow = []
const table = document.createElement('table');
//Loop through the colours list to create a tr for each colour, each containing +/- buttons and a slider
    for (let i = 0; i < colours.length; i++) {
        tableRow += `<tr><td><span id="${colours[i]}name" class="menulabel">${colours[i].charAt(0).toUpperCase()}</span> </td><td><button class="${colours[i]} down">-</button></td><td><button class="${colours[i]} up">+</button></td><td><input type="range" min="0" max="255" value="0" class="slider" id="${colours[i]}-slider"></td></tr>`
    }
  table.innerHTML = tableRow;
  document.querySelector('#menu').appendChild(table);
}
createMenu();

//Accomplishments
let makeRed = false;
let makeGreen = false;
let makeBlue = false;
let makeCyan = false;
let makeMagenta = false;
let makeYellow = false;
let makeWhite = false;
const achievements = [makeRed, makeGreen, makeBlue, makeCyan, makeMagenta, makeYellow, makeWhite];
const stringyAchievements = ["makeRed", "makeGreen", "makeBlue", "makeCyan", "makeMagenta", "makeYellow", "makeWhite"];

// console.log(stringyAchievements.toString());

for (let i = 0; i < stringyAchievements.length; i ++) {
  console.log((stringyAchievements[i].slice(4, stringyAchievements[i].length)).toLowerCase());
}

function makeAchievements() {
  for (let i = 0; i < achievements.length; i++) {
  let node = document.createElement("LI");                
  let textnode = document.createTextNode("??????");
  node.appendChild(textnode);
  node.setAttribute('id', stringyAchievements[i].toLowerCase());
  document.querySelector("#achievements").appendChild(node);
  }
}
makeAchievements();

// function replace() {
// // Create a new text node called "Water"
// var textnode = document.createTextNode("YOU MADE RED!");

// // Get the first child node of an <ul> element
// var item = document.getElementById("achievements").childNodes[0];

// // Replace the first child node of <ul> with the newly created text node
// item.replaceChild(textnode, item.childNodes[0]);
// };

function replace () {
var elmnt = document.createElement("li");
var textnode = document.createTextNode("You made RED!");
elmnt.appendChild(textnode);
var item = document.getElementById("achievements");

// Replace the first child node (<li> with index 0) in <ul> with the newly created <li> element
item.replaceChild(elmnt, item.childNodes[0]);
}

replace();


//Button inputs
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

//Slider input
const redslider = document.querySelector('#red-slider');
const greenslider = document.querySelector('#green-slider');
const blueslider = document.querySelector('#blue-slider');
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



//Update the RGB number reading, style the h1, style the RGB menu text, update the slider values
function updateColour (){
  document.querySelector('#colourvalues').innerHTML = `RGB (${red}, ${green}, ${blue})`;
  document.querySelector('h1').style.color = `rgb(${red}, ${green}, ${blue})`;
  document.querySelector('#redname').style.color = `rgb(${red}, 0, 0)`;
  document.querySelector('#greenname').style.color = `rgb(0, ${green}, 0)`;
  document.querySelector('#bluename').style.color = `rgb(0, 0, ${blue})`;
  redslider.value = red;
  greenslider.value = green;
  blueslider.value = blue;
  if (red === 255 && green === 0 && blue === 0) {
  makeRed = true;}
  if (red === 0 && green === 255 && blue === 0) {
  makeGreen = true;}
  if (red === 0 && green === 0 && blue === 255) {
  makeBlue = true;}
  if (red === 0 && green === 255 && blue === 255) {
  makeCyan = true;}
  if (red === 255 && green === 0 && blue === 255) {
  makeMagenta = true;}
  if (red === 255 && green === 255 && blue === 0) {
  makeYellow = true;}
  if (red === 255 && green === 255 && blue === 255) {
  makeWhite = true;}
  if (makeRed = true) {
  // console.log(`You made red!`)
}
// accomplishmentsCheck();
}
const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', random);

function random (){
 red = Math.floor(Math.random() * 256);
 green = Math.floor(Math.random() * 256);
 blue = Math.floor(Math.random() * 256);
 changeEyeColour();
 updateColour();
}
const partyButton = document.querySelector('#party');
partyButton.addEventListener('click', party);
let partyMode = false;
let partyInterval;

function party (){
  if (partyMode === false) {
    partyMode = true;
    partyInterval = setInterval(random, 100);
    console.log(partyMode);
    partyButton.innerHTML = 'STOP';
  }
  else {
    clearInterval(partyInterval);
    partyMode = false; 
    console.log(partyMode);
    partyButton.innerHTML = 'PARTY!';
  }
}


// function accomplishmentsCheck (accomplishment) {
//   return accomplishment === true;
// }
// console.log(accomplishments.every(accomplishmentsCheck));




//Change the eye colours!
function changeEyeColour (){
  eye[0].setAttribute('fill', `rgb(${red}, ${green}, ${blue})`);
  eye[1].setAttribute('fill', `rgb(${red}, ${green}, ${blue})`);

}