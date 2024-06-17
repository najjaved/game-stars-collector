// Select DOM elements
const star = document.getElementById('star');
const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
 


class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.endScreen = document.querySelector('#game-end');

    
    this.screenWidth = 500;
    this.screenHeight = 800;
    this.starDiameter = 30;
    this.basketWidth = 100;
    this.basketHeight = 50;

    
    this.starX = 0;
    this.starY = 0;
    this.starDirectionY = 1; // move in downwards with double the speed
    this.starSpeed = 3;

    this.basketX = 0;
    this.basketDirectionX = 0; // initial position, not moving
    this.basketSpeed = 2;

    
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
  } 

  start() {
    this.gameScreen.style.width = `${this.screenWidth}px`;
    this.gameScreen.style.height = `${this.screenHeight}px`;

    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.endScreen.style.display = 'none';


    const renderStar = () => {
      this.starX = Math.random() * (this.screenWidth - this.starDiameter) + 1

      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
      if (
        this.starY > this.screenHeight - this.starDiameter - this.basketHeight &&
        this.starX > this.basketX &&
        this.starX < this.basketX + this.basketWidth
      ) {
        this.score += 10;
        if (this.score > 50) {
          this.starDirectionY *= 1.1; // increase stars speed with increaing score, or change size of stars
  
        }
        
        if (this.score >= 100) {
          this.gameOver = true;
          console.log('You won!');

        }
      }
  
      else if ( this.starY >= this.screenHeight - this.starDiameter) {
        this.lives -=1;
        livesDisplay.innerText = this.lives;
        if (lives<0) {
          this.gameOver = true;
        }
        
      }
  
      this.starY += this.starDirectionY;
      star.style.left = `${this.starX}px`; 
      star.style.top = `${this.starY}px`; /* modify css property(top) of star to give impression of falling */
    }
  

    const renderBasket = () => {
      this.basketX += this.basketDirectionX * this.basketSpeed; // control basket direction & speed
  
      // check for bounds
      if (this.basketX < 0) {
        this.basketX = 0;
      }
      if (this.basketX > this.screenWidth - this.basketWidth) {
        this.basketX = this.screenWidth - this.basketWidth;
      }
  
      basket.style.left = `${this.basketX}px`; // every frame change its position, add eventlistener for user inputs to move it
  
    }

    
    
    const renderScore = () => {
    scoreDisplay.innerText = this.score;
    }
  
    
    
    const intervalId = setInterval(() => {
      this.currentFrame +=1;
      renderStar();
      renderBasket();
      renderScore(); // also render score on every iteration
  
      if (this.gameOver) {
        console.log('gameover');
        clearInterval(intervalId);
        // hide game screen
        this.gameScreen.style.display = 'none'
        // show final screen with win/lose
        this.endScreen.style.display = 'block'

        // Cleanup DOM: TODO
        
      }
    }, 1000 / 60)  // update frame 60 times per second

  }
}
