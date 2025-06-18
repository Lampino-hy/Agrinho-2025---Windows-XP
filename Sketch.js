let wallpaper;
let butão;
let janela = false;
let jingle_op = true;
let redação_grigrinho = "A agropecuária Brasileira vem crescendo significantemente com o passar dos anos, de 2006 a 2017 a taxa de crescimento aproxima-se de 4,3%, superando países como China, Chile, Argentina e até mesmo os Estados Unidos. De 1997 a 2017 o valor bruto da produção teve um aumento, com a tecnologia sendo sua maior causa. A agricultura moderna é um caminho pelo qual a evolução da agricultura para uma forma mais eficiente, barata e produtiva. Desde os avanços da tecnologia, a agricultura vem se beneficiando desse avanço, seja com sementes modificadas para um plantio mais rápido, ou talvez, para se livrar de pragas como insetos e até mesmo para frutos com qualidade superior. Além disso, qualquer trabalhador rural pode se beneficiar da tecnologia por ser algo barato e eficaz em vários quesitos, como um simples aplicativo para celulares podem auxiliar a identificar com precisão o dia em que a colheita estaria pronta para colher. Mesmo com tantas vantagens, a agropecuária e agricultura moderna possuem um longo caminho a percorrer com vários desafios antes que possa ser utilizada em seu auge."

function preload(){
  wallpaper = loadImage("Windowswallpaper.png");
  butão = loadImage("Texto.jpg");
  notepad = loadImage("notepadwin.png")
  bells = loadSound("Jinglebell.mp3")
  
}

function setup() {
  createCanvas(700, 500);
  
}

function draw(){

  
  image(wallpaper, 0, 0, width, height);
  image(butão, 18, 14, 100, 80);
  fill("white");
  textSize(12);
  text('Redação.txt', 38, 88);
  push();

  fill("white");
  textSize(19);
  let hora = nf(hour(), 2) + ":" + nf(minute(), 2);
  text(hora, 630,487);

pop()

  if (janela) {
    
    image(notepad,50, 100, 420, 300);
    fill("black")
    textWrap(WORD);
    text(redação_grigrinho,56,145,400);
    push();
    
    fill("white"); //decoração porque quero algo bem acabado
    text("Redação.txt",56,118)
  }
  else {}
}

function doubleClicked() {
  if (mouseX > 30 && mouseX < 80 && mouseY > 30 && mouseY < 75) {
    console.log("Entrando em Redação.txt...");
    janela = true;
  } else {
    
    let X = mouseX;
    let Y = mouseY;
    console.log("coordenadas atuais:",X, Y,"...");
    
  if (mouseX > 445 && mouseX < 466 && mouseY > 100 && mouseY < 120){
    janela = false
    console.log("Saindo de Redação.txt...")
  }
  }
}

function mousePressed(){
  if (jingle_op){
    bells.play();
    jingle_op = false
  }
  
}