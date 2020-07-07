//jshint esversion:6

// Detecting Button Pressed
var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);
    makeAnimation(btnInnerHTML);

  }); // ends eventListener "click"

} // ends forLoop

// Detecting Keyboard Pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(keyPressed){

  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
    console.log(keyPressed);

  } // ends switch case

} // ends makeSound(keyPressed) function

function makeAnimation(keyPressed){

  var activeButton = document.querySelector("." + keyPressed);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); // setTimeout takes in 2 parameters

} // ends makeAnimation(keyPressed) function
