const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_score")) ?? {
    last: 0,
    best: 0,
    tries: 0,
  };
const setLocalStorage = (item) =>
  localStorage.setItem("db_score", JSON.stringify(item));

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const canoVerde = new Image();
canoVerde.src = "./assets/sprites/fundo.png";

const telas = new Image();
telas.src = "./assets/sprites/telas.png";

const marioFly = new Image();
marioFly.src = "./assets/sprites/mario.png";

const pilares = new Image();
pilares.src = "./assets/sprites/pilares.png";

var background = new Image();
background.src = "./assets/sprites/background.png";

const deathSound = new Audio();
deathSound.src = "./assets/sounds/snd_kick.wav";

const bgMusic = new Audio();
bgMusic.src = "./assets/sounds/super_mario.mp3";


