/*const newTelaGetReady = () => {
  const getReady = {
    spriteX: 134,
    spriteY: 0,
    largura: 174,
    altura: 152,
    x: canvas.width / 2 - 174 / 2,
    y: 50,

    desenha() {
      context.drawImage(
        sprites,
        getReady.spriteX,
        getReady.spriteY,
        getReady.largura,
        getReady.altura,
        getReady.x,
        getReady.y,
        getReady.largura,
        getReady.altura
      );
    },
  };
  return getReady;
};*/


const newTelaGetReady = () => {
  const getReady = {
    spriteX: 284,
    spriteY: 0,
    largura: 300,
    altura: 170,
    x: canvas.width / 2 - 150,
    y: canvas.height/2-160,

    desenha() {
      context.drawImage(
        telas,
        getReady.spriteX,
        getReady.spriteY,
        getReady.largura,
        getReady.altura,
        getReady.x,
        getReady.y,
        getReady.largura,
        getReady.altura
      );
    },
  };
  return getReady;
};



