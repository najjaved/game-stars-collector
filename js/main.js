window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  const infoButton = document.getElementById('know-more');
  

  let game;

  function startGame() {
    console.log('start game');
    game = new Game();
    game.startGameLoop();

  }

  // eventListener to start game button
  startButton.addEventListener('click', function () {
    startGame();
  })

  restartButton.addEventListener('click', function () {
    startGame();
  })

  infoButton.addEventListener('click', function () {
    if(infoButton.innerText === "Know more?"){
      infoButton.innerText = "hide info";
      document.getElementById('intro-text').style.display = "block";
    }
    else if (infoButton.innerText === "hide info"){
      infoButton.innerText = "Know more?";
      document.getElementById('intro-text').style.display = "none";

    }

  })

  document.addEventListener('keydown', event => {
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      //event.preventDefault();
      // Move to the left
      game.basketDirectionX = -1
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      // Move basket to the right
      game.basketDirectionX = 1
    }
  })

  document.addEventListener('keyup', event => {
    if (
      event.code === 'KeyA' ||
      event.code === 'ArrowLeft' ||
      event.code === 'KeyD' ||
      event.code === 'ArrowRight'
    ) {
      // Stop the basket from moving
      game.basketDirectionX = 0
    }
  })

})
