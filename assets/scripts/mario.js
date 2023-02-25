function Bird() {
  const bird = {
    //Posição da sprite no arquivo sprites.png:
    spriteX: 0,
    spriteY: 0,
    //Tamanho da sprite no Canvas (tela de jogo):
    largura: 33,
    altura: 100,
    //Posição da imagem no Canvas:
    x: 15,
    y: 50,
    //Variáveis de controle de gravidade:
    gravity: 0.15,
    speed: 0,

    jumpHeight: 3.7,

    update() {
      if (colideComCenario(bird, Cenario().chao)) {
        highscore.tries++;
        highscore.last = score.pontos;
        deathSound.play();
        trocaTela(Telas.fim);

        return;
      }

      //Velocidade/aceleração de queda do objeto "navinha":
      this.speed = this.speed + this.gravity;
      this.y = this.y + this.speed;

      //console.log(navinha.speed)
    },

    jump() {

      this.speed = -this.jumpHeight;
    },

    animationFrames: [
      { spriteX: 4,     spriteY: 0,    spriteWidth: 31,   spriteHeight: 10},       
      { spriteX: 45,    spriteY: 0,    spriteWidth: 33,   spriteHeight: 11 },    
      { spriteX: 86,    spriteY: 0,    spriteWidth: 38,   spriteHeight: 32 },     
      { spriteX: 127,   spriteY: 0,    spriteWidth: 33,   spriteHeight: 43 },   
      { spriteX: 168,   spriteY: 0,    spriteWidth: 27,   spriteHeight: 43 },   
      { spriteX: 209,   spriteY: 0,    spriteWidth: 31,   spriteHeight: 43 },
      { spriteX: 168,   spriteY: 0,    spriteWidth: 27,   spriteHeight: 45 },  
      { spriteX: 127,   spriteY: 0,    spriteWidth: 33,   spriteHeight: 31 },  
      { spriteX: 86,    spriteY: 0,    spriteWidth: 38,   spriteHeight: 33 }, 
      { spriteX: 45,    spriteY: 0,    spriteWidth: 33,   spriteHeight: 53 },      
      
   ],

    frameAtual: 0,
    //faz bater a asinha:
    updateFrame() {
      const frameInterval = 4;
      if ((frameLimit = frames % frameInterval === 0)) {
        const baseIncrement = 1;
        const increment = baseIncrement + this.frameAtual;
        const baseRepeat = this.animationFrames.length;
        this.frameAtual = increment % baseRepeat;
      }
      //      console.log(this.frameAtual)
    },
    desenha() {
      bird.updateFrame();
      
      const { spriteX, spriteY, } = this.animationFrames[this.frameAtual];

     //this.altura = this.animationFrames[this.frameAtual].spriteHeight;
     //this.largura = this.animationFrames[this.frameAtual].spriteWidth;
      
      


      context.drawImage(
        //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight >> Parâmetros da função DrawImage
        marioFly,
        //image: Arquivo contendo as sprites (sprites.png)

        spriteX,
        spriteY,
        //sX, sY: Coordenadas X,Y da posição da sprite no arquivo de origem

        this.largura,
        this.altura,
        //sWidth, sHeight: Largura, altura (X,Y) da sprite

        this.x,
        this.y,
        //dX, dY: Coordenadas X,Y da  posição da sprite no Canvas

        this.largura,
        this.altura,
        //dWidth, dHeight: Proporção X,Y da sprite no Canvas. Utiliza os mesmos valores de "sWidth, sHeight" em uma escala 1:1
      );
    },
  };

  return bird;
}