import "bootstrap";
import "./style.css";

import "./assets/img/rock.png";
import "./assets/img/paper.png";
import "./assets/img/scissors.png";
import "./assets/img/lizard.png";
import "./assets/img/spock.png";
import "./assets/img/4geeks.ico";
import "./assets/img/vs-png-web.png";

const imgJugador = document.getElementById("img-jugador");
const imgOption = document.getElementById("img-option");
const imgCPU = document.getElementById("img-cpu");
const resultadoTexto = document.getElementById("indicador-estado");
const selectJugador = document.getElementById("player-selection");

const rock = { name: "rock", lose: ["paper", "spock"] };
const paper = { name: "paper", lose: ["scissors", "lizard"] };
const scissors = { name: "scissors", lose: ["rock", "spock"] };
const spock = { name: "spock", lose: ["paper", "lizard"] };
const lizard = { name: "lizard", lose: ["rock", "scissors"] };

const options = [rock, paper, scissors, lizard, spock];

const setPlayerOption = (option) => {
  return option;
}

const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
}

const SetCPUOption = () => {
  return options[randomNumber(options.length)];
}


selectJugador.addEventListener("change", (event) => {
  const playerChoice = event.target.value;

  if (playerChoice === "0") {
    return;
  }

  const playerOption = options.find(opt => opt.name === playerChoice);
  const cpuOption = SetCPUOption();

  imgJugador.src = `./assets/img/${playerOption.name}.png`;
  imgOption.src = `./assets/img/${playerOption.name}.png`;
  imgCPU.src = `./assets/img/${cpuOption.name}.png`;


  if (playerOption.name === cpuOption.name) {
    resultadoTexto.textContent = "Empate!";
    return;
  }
  if (playerOption.lose.includes(cpuOption.name)) {
    resultadoTexto.textContent = "Pierdes!";
    return;
  }

  resultadoTexto.textContent = "Ganas!";
});

