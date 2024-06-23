"use strict";
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives'); 
const messageDisplay = document.getElementById('end-msg');
const gifDisplay = document.getElementById('gif');
 

class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.endScreen = document.querySelector('#game-end');

    
    this.screenWidth = 800;
    this.screenHeight = 1200;
    this.starDiameter = 50;

    
    this.score = 0;
    this.lives = 3;

    this.basket = new Basket(this.screenWidth,  this.screenHeight, this.lives);
    this.stars = new Stars(this.gameScreen, this.screenWidth, this.screenHeight, this.score);
    
  } 

  startGameLoop() {
    this.gameScreen.style.width = `${this.screenWidth}px`;
    this.gameScreen.style.height = `${this.screenHeight}px`;

    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.endScreen.style.display = 'none';

   

    const checkWinLose = () => {
      if (this.score >= 200) {
        console.log('You won!');
        this.gameIsOver = true;
        messageDisplay.innerText = 'YOU WIN!!!'; 
        gifDisplay.src = "https://media2.giphy.com/media/fxsqOYnIMEefC/100.webp?cid=ecf05e472cx2ylhiouyj4cqclb405ihve3d01c2klw5isxmo&ep=v1_gifs_search&rid=100.webp&ct=g"
  
      }

      if (this.lives < 0) {
        this.gameIsOver = true;
      }

      else if (this.starY >= this.screenHeight - this.starDiameter) {
        this.lives -=1;
        //livesDisplay.innerText = this.lives;
        if (this.lives<0) {
          this.gameOver = true;
        }
        
      }

    }
    
    const checkBasket = () => {
      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
      for(let i =0; i<this.stars.starsArray.length; i+=1) {
        let aStar = this.stars.starsArray[i]; 
        let starY = parseInt(aStar.style.top);
        let starX = parseInt(aStar.style.left)
        if (
            starY >  this.screenHeight - this.basket.basketHeight &&
            starX > this.basket.basketX &&
            starX < this.basket.basketX + this.basket.basketWidth
          ) {
            this.score += 10;
          }
        }
      }

    
    const renderScore = () => {
    scoreDisplay.innerText = this.score;
      }


    const renderLives = () => {
      livesDisplay.innerText = this.lives;
      }

  
    const gameOver = (intervalId) => {        
      clearInterval(intervalId);
      // hide game screen
      this.gameScreen.style.display = 'none'
      // show final screen with win/lose
      this.endScreen.style.display = 'block'
      // hide lives on final screen: livesDisplay.style.display = 'none';
      this.lives= 3; // reset lives

      // Cleanup DOM:
      this.stars.starsArray.forEach((starObject) => {
        starObject.remove();

      })
    }

    
    const intervalId = setInterval(() => {
      this.currentFrame +=1;
      this.stars.renderStars();
      this.basket.renderBasket();
      renderLives();
      checkBasket();
      checkWinLose(); 
      renderScore();
      this.stars.removeStars();
      
      if (this.gameIsOver) {
        console.log('gameover');
        gameOver(intervalId);
        
      }
    }, 1000 / 60)      // update frame 60 times per second

  }

} 

 
