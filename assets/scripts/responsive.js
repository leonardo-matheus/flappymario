//recarrega página index.html ao redimencionar
window.onresize = () => (window.location.href = "index.html");

//let width = window.innerWidth
//let height = window.innerHeight
let width = 320;
let height = 480;
let baseHeight = 300;

/*if (window.innerWidth >= 840) {
  width = 800;
  height = 600;
  baseHeight = 416;
} else*/ if (window.innerWidth >= 660) {
  width = 640;
  height = 480;
  baseHeight = 295;
} else {
  width = 320;
  height = 480;
  baseHeight = 300;
}

canvas.width = width;
canvas.height = height;
