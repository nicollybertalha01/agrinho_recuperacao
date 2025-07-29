let imagem1;

function setup() {
  createCanvas(400, 400);
}
function preload () {
 imagem1 = loadImage ("fazenda.jpg")
 imagem2 = loadImage ("campo.jpg")
}  
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["👨‍🌾"];
let teclas = ["a", "s"];
let quantidade = jogador.length;

function draw () {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
  timer();
}

function instrucao(){
  textSize(10);
  text("Clique na tela para iniciar o jogo,e ajude o fazendeiro antes do fim do tempo:", 9, 10);
  text("Aperte A para o fazendeiro correr!", 70, 60);
}

function ativaJogo() {
  if (focused == true) {
    background(imagem2); 
  } else {
    background(imagem1)
    instrucao();
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}

function timer() { 
  textSize(30)
  setTimeout(() => {
  text("Seu tempo acabou!", 50, 40 );
}, 10000);
}