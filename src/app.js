import "bootstrap";
import "./style.css";

// let button = document.querySelector("#button");
// button.addEventListener(
//   "click",(
window.onload = setInterval(function randomCard() {
  const palos = ["♦", "♥", "♠", "♣"];

  let indexPalo = Math.floor(Math.random() * palos.length);

  let top = document.querySelector(".top");
  top.innerHTML = palos[indexPalo];
  // top.style.color = palos[indexPalo];

  let bot = document.querySelector(".bot");
  bot.innerHTML = palos[indexPalo];

  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }
  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    bot.style.color = "red";
  } else {
    bot.style.color = "black";
  }

  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];

  let indexNumeros = Math.floor(Math.random() * numeros.length);

  let numbers = document.querySelector(".numero");
  numbers.innerHTML = numeros[indexNumeros];
}, 10000);

// window.widthAndHeigth = function() {
//   document.querySelector(".card").style.width = document.querySelector(
//     "#width"
//   );
//   // document.querySelector(".card").style.heigth = document.querySelector(
//   //   "#heigth"
//   // );
//   if (document.querySelector("#width") < 10) {
//     document.querySelector(".card").style.width = "10px";
//     document.querySelector(".card").style.heigth = "20px";
//   } else if (document.querySelector("#width") < 50) {
//     document.querySelector(".card").style.width = "50px";
//     document.querySelector(".card").style.heigth = "100px";
//   }
// };
