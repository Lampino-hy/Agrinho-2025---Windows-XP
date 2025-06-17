let wallpaper;
let butão;
let janela = false;
let jingle_op = true;

function preload(){
  wallpaper = loadImage("Windowswallpaper.png");
  butão = loadImage("Texto.jpg");
  notepad = loadImage("notepadwin.png")
  jingle_jingle_bells = loadSound("Jinglebell.mp3")
  
}

function setup() {
  createCanvas(500, 400);
  jingle_jingle_bells.play();
}

function draw(){

  
  image(wallpaper, 0, 0, width, height);
  image(butão, 18, 14, 100, 80);
  fill("white");
  textSize(12);
  text('Redação.txt', 38, 88);
  push();

  fill("white");
  textSize(16);
  let hora = nf(hour(), 2) + ":" + nf(minute(), 2);
  text(hora, 448, 390);

pop()

  if (janela) {
    
    image(notepad,60, 100, 300, 250);
    text()
    
  }
  else {}
}

function doubleClicked() {
  if (mouseX > 30 && mouseX < 80 && mouseY > 30 && mouseY < 75) {
    console.log("Hitbox");
    janela = true;
  } else {
    let X = mouseX;
    let Y = mouseY;
    console.log(X, Y);
  if (mouseX > 343 && mouseX < 356 && mouseY > 101 && mouseY < 115){
    janela = false
  }
  }
}