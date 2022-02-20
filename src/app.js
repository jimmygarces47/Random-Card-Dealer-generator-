/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadordePalos() {
  let palos = ["♦", "♥", "♠", "♣"];
  let palosAleatorio = Math.floor(Math.random() * palos.length);
  return palos[palosAleatorio];
}
console.log(generadordePalos());

function generadordeNumeros() {
  let numeros = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  let numerosAleatorio = Math.floor(Math.random() * numeros.length);
  return numeros[numerosAleatorio];
}
console.log(generadordeNumeros());

function ponerNumero() {
  document.getElementById("numero").innerHTML = generadordeNumeros();
}

function ponerPalos() {
  let paloElegido = generadordePalos();
  document.getElementById("palo_arriba").innerHTML = paloElegido;
  document.getElementById("palo_abajo").innerHTML = paloElegido;

  let paloArriba = document.getElementById("palo_arriba");
  let paloAbajo = document.getElementById("palo_abajo");
  let numero = document.getElementById("numero");
  let colornumero = Math.floor(Math.random() * 13);
  let colores = Math.floor(Math.random() * 2);
  if (
    paloElegido === "♦" ||
    paloElegido === "♥" ||
    numero === "♦" ||
    numero === "♥"
  ) {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
    numero.style.color = "red";
  }
}

window.onload = function() {
  generadordePalos();
  generadordeNumeros();
  ponerNumero();
  ponerPalos();
};
