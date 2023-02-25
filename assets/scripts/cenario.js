function Cenario() {
  const cenario = {
    paisagem: {
      spriteX: 0,
      spriteY: 201,
      largura: 975,
      altura: 249,
      x: 0,
      y: canvas.height - 250,

      update() {
        this.x = parallax(this, 0.5);
      },
      desenha() {
        //Preenche a cor do plano de fundo:
        context.drawImage(background,0,0);
        

        context.drawImage(
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x,
          this.y,
          this.largura,
          this.altura
        );
        //Completa a sprite do plano de fundo até o fim da tela do Canvas:
        context.drawImage(
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x + this.largura,
          this.y,
          this.largura,
          this.altura
        );
      },
    },


    torres: {
      spriteX: 0,
      spriteY: 508,
      largura: 1280,
      altura: 292,
      x: 0,
      y: canvas.height - 292 ,

      update() {
        this.x = parallax(this, 1);
      },
      desenha() {


        context.drawImage(
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x,
          this.y,
          this.largura,
          this.altura
        );
        //Completa a sprite do plano de fundo até o fim da tela do Canvas:
        context.drawImage(
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x + this.largura,
          this.y,
          this.largura,
          this.altura
        );
      },
    },

    chao: {
      spriteX: 0,
      spriteY: 40,
      largura: 1216,
      altura: 112,
      abc: 1,
      x: 0,
      y: canvas.height - 112,

      update() {
        cenario.chao.x = parallax(this, 2);
      },

      desenha() {
        context.drawImage(
          //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight >> Parâmetros da função DrawImage
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x,
          this.y,
          this.largura,
          this.altura
        );

        context.drawImage(
          //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight >> Parâmetros da função DrawImage
          canoVerde,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x + this.largura,
          this.y,
          this.largura,
          this.altura
        );
      },
    },
  };

  return cenario;
}

const parallax = (object, speed) => {
  const objetoMove = speed;
  const objetoRepete = object.largura;
  const movimentacao = object.x - objetoMove;
  const parallax = movimentacao % objetoRepete;

  return parallax;
};

