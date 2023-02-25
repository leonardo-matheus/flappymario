function Canos() {
  const canos = {
    largura: 80,
    altura: 400,
    low: {
      spriteX: 100,
      spriteY: 0,
    },

    high: {
      spriteX: 0,
      spriteY: 0,
    },

    pares: [],

    update() {
      if (frames % 100 === 0) {
        canos.pares.push({ x: canvas.width, y: -180 * (Math.random() + 1) });
      }

      this.pares.forEach((par) => {
        par.x = par.x - 2
        if (par.x<-60) canos.pares.shift();
        if (colideComCanos(par)) {
          deathSound.play();
          highscore.tries++;
          highscore.last = score.pontos;

          trocaTela(Telas.fim);

          console.log("Game Over!");
          return;
        }
      });
    },

    desenha() {
      canos.pares.forEach((par) => {
        const randomY = par.y;
        const canoGap = 110;

        const canoHighX = par.x;
        const canoHighY = randomY;

        const canoLowX = par.x;
        const canoLowY = canos.altura + canoGap + randomY;

        context.drawImage(
          pilares,
          canos.high.spriteX,
          canos.high.spriteY,
          canos.largura,
          canos.altura,
          canoHighX,
          canoHighY,
          canos.largura,
          canos.altura
        );

        context.drawImage(
          pilares,
          canos.low.spriteX,
          canos.low.spriteY,
          canos.largura,
          canos.altura,
          canoLowX,
          canoLowY,
          canos.largura,
          canos.altura
        );

        par.canoHigh = {
          x: canoHighX,
          y: canos.altura + canoHighY,
        };
        par.canoLow = {
          x: canoLowX,
          y: canoLowY,
        };
      });
    },
  };
  return canos;
}



const colideComCanos = (cano) => {
  const birdTop = bird.y+43;
  const birdBottom = (bird.y + bird.altura)-30;

  if ((bird.x+bird.largura) >= (cano.x)) {
    // if(navinhaTop<=cano.canoHigh.y || navinhaBottom >=cano.canoLow.y) return true;
   if (birdTop <= cano.canoHigh.y) {console.log(birdBottom, birdTop); return true};
  if (birdBottom >= cano.canoLow.y) {console.log(birdBottom, birdTop); return true};

  }
  return false;
};

const colideComCenario = (objetoPlayer, objetoCenario) => {
  
  const birdY = (objetoPlayer.y + objetoPlayer.altura)-30;
  const cenarioY = objetoCenario.y;

  if (birdY >= cenarioY) {
    return true;
  }

  return false;
};


