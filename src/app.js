import "bootstrap";
import "./style.css";

import "./assets/img/rock.png";
import "./assets/img/paper.png";
import "./assets/img/scissors.png";
import "./assets/img/lizard.png";
import "./assets/img/spock.png";
import "./assets/img/4geeks.ico";
import "./assets/img/vs-png-web.png";



const rock = { name: "rock", lose: ["paper", "spock"] };
const paper = { name: "paper", lose: ["scissors", "lizard"] };
const scissors = { name: "scissors", lose: ["rock", "spock"] };
const spock = { name: "spock", lose: ["paper", "lizard"] };
const lizard = { name: "lizard", lose: ["rock", "scissors"] };

const options = [rock, paper, scissors, lizard, spock];

const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
}

const _getCPUOption = () => {
  return options[randomNumber(options.length)];
}

const _getPlayerOption = (playerChoice) => {
  return options.find(opt => opt.name === playerChoice);
}

const _getResult = (playerOption, cpuOption) => {
  if (playerOption.name === cpuOption.name) {
    return "Empate!";
  }
  if (playerOption.lose.includes(cpuOption.name)) {
    return "Pierdes!";
  }
  return "Ganas!";
}

const _renderResult = (result, playerOption, cpuOption) => {
  const imgJugador = document.getElementById("img-jugador");
  const imgOption = document.getElementById("img-option");
  const imgCPU = document.getElementById("img-cpu");
  const resultadoTexto = document.getElementById("indicador-estado");
  imgJugador.src = `./assets/img/${playerOption.name}.png`;
  imgOption.src = `./assets/img/${playerOption.name}.png`;
  imgCPU.src = `./assets/img/${cpuOption.name}.png`;
  resultadoTexto.textContent = result;
}

const _getPlayerChoice = () => {
  return document.querySelector("#player-selection").value;
}

const playGame = () => {
  const playerChoice = _getPlayerChoice();
  if (playerChoice === "0") {
    return;
  }
  const playerOption = _getPlayerOption(playerChoice);
  const cpuOption = _getCPUOption();
  const result = _getResult(playerOption, cpuOption);
  _renderResult(result, playerOption, cpuOption);
}

window.playGame = playGame;