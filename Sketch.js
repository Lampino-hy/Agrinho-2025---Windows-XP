alert("Dica: Clique na Tela para iniciar o projeto, para sair de cada arquivo clique duas vezes no botão X")
let wallpaper;
let butão;
let Foto;
let Poster;
let janela = false;
let janela2 = false;
let poster = false;
let jingle_op = true;
let redação_grigrinho = "A agropecuária Brasileira vem crescendo significantemente com o passar dos anos, de 2006 a 2017 a taxa de crescimento aproxima-se de 4,3%, superando países como China, Chile, Argentina e até mesmo os Estados Unidos. De 1997 a 2017 o valor bruto da produção teve um aumento, com a tecnologia sendo sua maior causa. A agricultura moderna é um caminho pelo qual a evolução da agricultura para uma forma mais eficiente, barata e produtiva. Desde os avanços da tecnologia, a agricultura vem se beneficiando desse avanço, seja com sementes modificadas para um plantio mais rápido, ou talvez, para se livrar de pragas como insetos e até mesmo para frutos com qualidade superior. Além disso, qualquer trabalhador rural pode se beneficiar da tecnologia por ser algo barato e eficaz em vários quesitos, como um simples aplicativo para celulares podem auxiliar a identificar com precisão o dia em que a colheita estaria pronta para colher. Mesmo com tantas vantagens, a agropecuária e agricultura moderna possuem um longo caminho a percorrer com vários desafios antes que possa ser utilizada em seu auge."
//variáveis, ignorem a redação ali encima, ficou um pouco... grande...

function preload(){
  wallpaper = loadImage("Windowswallpaper.png");
  butão = loadImage("Texto.jpg");
  notepad = loadImage("notepadwin.png")
  bells = loadSound("Jinglebell.mp3")
  Foto = loadImage("Foto.png");
  Poster = loadImage("PosterGrigrinho.jpg");
  //deixei todas as fotos e sons aqui pra ficar organizado
}

function setup() {
  createCanvas(700, 500);
  // não imaginei oque poderia ter colocado a mais aqui, era pra ter uma função que faria o bells.play() iniciar junto dessa parte do código, mas, os navegadores tem um bloqueio contra sons ao entrar em um site então... Fazer oque.
}

function draw(){
  //Fiz a maior parte do código aqui, aprendi muita coisa enquanto fazia
  image(wallpaper, 0, 0, width, height);
  image(Foto,18,200, 95,80);
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
    
    image(notepad,210, 100, 420, 300);
    fill("black")
    textWrap(WORD);
    text(redação_grigrinho,220,145,400);
    push();
    
    fill("white"); //decoração porque quero algo bem acabado
    text("Redação.txt",220,118)
  }
  if (janela2) {
    
    if (janela){janela = false}
    image(notepad,210, 100, 420, 300);
    fill("black");
    textWrap(WORD);
    text("Oi, tudo bom? Espero que esteja tudo bem. Meu nome é Gabriel, o Dev deste projeto 🙂. Espero que gostem do projeto, fiquei várias horas trabalhando, estudando e aperfeiçoando ele, era pra ter mais coisas, mas não vou ter tempo de colocar tudo, bom, espero que gostem 😁 ",220,145,400); //Emojis 👍
    
    push();
    
    fill("white");
    text("Leia-me.txt",220,118)
  }
  if (poster){
    image(Poster,210,100,400,300);
    fill("white");
    textSize(12);
    text("Agrinho.jpg",212,113)
  }
  image(butão,18,110,100,80);
  fill("white")
  textSize(12);
  text("Leia-me.txt",38,184);
  push();
  fill("white");
  textSize(12);
  text("Agrinho.jpg",38,274)
  // São 02:42 que estou fazendo este código
}

function doubleClicked() {
  if (mouseX > 30 && mouseX < 80 && mouseY > 30 && mouseY < 75) {
    console.log("Entrando em Redação.txt...");
  if (janela2||poster){janela2 = false; poster = false}
    janela = true;
  }
  if (mouseX > 40 && mouseX < 95 && mouseY > 125 && mouseY < 175 ){
    
  if (janela||poster){janela = false; poster = false;}
    janela2 = true
  }
  if (poster && mouseX>580 && mouseX<605&& mouseY>100 &&mouseY <115){
    poster = false  
  }
  
  if (mouseX > 40 && mouseX < 95 && mouseY > 220 && mouseY < 260 ){
    janela = false
    janela2 = false
    poster = true;
    
  }
  
  else {
    let X = mouseX;
    let Y = mouseY;
    console.log("coordenadas atuais:",X, Y,"...");
    if (mouseX > 605 && mouseX < 630 && mouseY > 60 && mouseY < 120 && !poster){
    janela = false
    janela2 = false
  }
 }
}
function mousePressed(){
  
  if (jingle_op){
    bells.play();
    jingle_op = false
 }
}