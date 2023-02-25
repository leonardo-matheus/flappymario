const newTelaGameOver = () => {
  const heart = {
    spriteX: 0,
    spriteY: 203,
    largura: 22,
    altura: 19,
    x: 22,
    y: 19,
  };

  const gameOver = {
    spriteX: 0,
    spriteY: 0,
    largura: 272,
    altura: 200,
    x: canvas.width / 2 - 136,
    y: 50,

    desenha() {
      context.drawImage(
        telas,
        gameOver.spriteX,
        gameOver.spriteY,
        gameOver.largura,
        gameOver.altura,
        gameOver.x,
        gameOver.y,
        gameOver.largura,
        gameOver.altura
      );

      context.font = '16px "Press Start 2P", cursive';
      context.fillStyle = "##FFF";
      context.textAlign = "right";
      context.fillText(
        highscore.last,
        canvas.width / 2 + 88,
        //  canvas.height - 340
        canvas.height - (baseHeight + 48)
      );
      context.fillText(
        highscore.best,
        canvas.width / 2 + 88,
        // canvas.height - 340
        canvas.height - (baseHeight + 8)
      );
      context.fillText(
        highscore.tries,
        canvas.width / 2 + 88,
        //canvas.height - 305
        canvas.height - (baseHeight - 28)
      );

      if (highscore.last >= highscore.best) {
        context.drawImage(
          telas,
          0,
          203,
          22,
          19,
          canvas.width / 2 - 112,
          canvas.height - (baseHeight+27),
          22,
          19
        );
      } else {
        context.drawImage(
          telas,
          0,
          203,
          22,
          19,
          canvas.width / 2 - 112,
          canvas.height - (baseHeight+67),
          22,
          19
        );
      }
    },
  };
  return gameOver;
};
