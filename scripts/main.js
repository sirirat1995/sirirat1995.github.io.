let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/main-pizza.jpg') {
      myImage.setAttribute('src','images/main-pizza2.jpg');
    } else {
      myImage.setAttribute('src','images/main-pizza.jpg');
    } 
}
/*CLICK TO CHANGE PIC*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to PIZZATOLOGY, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to PIZZATOLOGY, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
/*WELCOME MSG & DISPLAY NAME*/