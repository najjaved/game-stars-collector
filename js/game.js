const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives'); 
const messageDisplay = document.getElementById('end-msg');
 


class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.endScreen = document.querySelector('#game-end');

    
    this.screenWidth = 500;
    this.screenHeight = 800;
    this.starDiameter = 50;
    this.basketWidth = 100;
    this.basketHeight = 50;

    
    this.starX = 3;
    this.starY = 0;
    this.starDirectionY = 1; // move in downwards with double the speed
    this.starSpeed = 1;

    this.basketX = 0;
    this.basketDirectionX = 0; // initial position, not moving
    this.basketSpeed = 4;

    
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.framesCounter = 0;
    this.starsCounter = 0;
    this.starsArray =[];
    
  } 

  startGameLoop() {
    this.gameScreen.style.width = `${this.screenWidth}px`;
    this.gameScreen.style.height = `${this.screenHeight}px`;

    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.endScreen.style.display = 'none';

    this.lives= 3; // reset lives
    
    const generateX = () =>{
      let xCoordinate = Math.floor(Math.random()*10) +1; // Math.floor(Math.random() * (max - min + 1)) + min  -> inclusive of both ends
      return xCoordinate * 50; // starWidth = 50px
    }

    const speedFactor = () => {
      if(this.score < 50) {
        return this.starSpeed;
      } else if(this.score >= 50) {
        let speedUp = 2.0;
        return this.starSpeed + this.score / 200 * speedUp;
      }
    }

    const renderStars = () => {
      for(let i =0; i<this.starsArray.length; i+=1) {
        let aStar = this.starsArray[i]; 
        const oldY = parseInt(aStar.style.top);
        const newY = oldY + 2 * speedFactor(); 
        aStar.style.top = `${newY}px`;
      }
      this.framesCounter +=1;
      // create star every second
      if (this.framesCounter % 180 ===0){
        this.starsArray.push(createStar());
      }
    }


    const createStar = () => {
      const newStar = document.createElement('div');
      newStar.setAttribute('id', 'newStar'+ this.starsCounter);
      newStar.setAttribute('class', 'star');
      this.gameScreen.appendChild(newStar); 
      newStar.style.left = `${generateX()}px`; 
      newStar.style.top = '0px'; 
      this.starsCounter+=1;

     return newStar;
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

    const checkBasket = () =>{
      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
      for(let i =0; i<this.starsArray.length; i+=1) {
        let aStar = this.starsArray[i]; 
        let starY = parseInt(aStar.style.top);
        let starX = parseInt(aStar.style.left)
        if (starY > this.screenHeight - this.basketHeight &&
            starX > this.basketX &&
            starX < this.basketX + this.basketWidth) {
            this.score += 10;
        }

        else if(starY > this.screenHeight -this.basketHeight) {
          this.lives -=1;
          if (this.lives < 0) {
            this.gameIsOver = true;
          }
        }
      }

    }


    const removeStars = () =>{
      const starsToKeep = this.starsArray.filter((star) => parseInt(star.style.top) <= (this.screenHeight - this.basketHeight));
      const starsToRemove = this.starsArray.filter((star) => parseInt(star.style.top) > (this.screenHeight - this.basketHeight));
      this.starsArray = [...starsToKeep];
      for(let i = 0; i < starsToRemove.length; i++) {
        starsToRemove[i].remove();
      }

    }
    
   

    const checkWinLose = () => {
      if (this.score >= 200) {
        this.gameIsOver = true;
        messageDisplay.innerText = 'You won!'
        console.log('You won!');
  
      }

      if (this.lives < 0) {
        this.gameIsOver = true;
      }

    }
    
    
    const renderScore = () => {
    scoreDisplay.innerText = this.score;
    }

    const renderLives = () => {
      livesDisplay.innerText = this.lives;
      }
  
    
    
    const intervalId = setInterval(() => {
      this.currentFrame +=1;
      renderStars();
      renderBasket();
      renderLives();
      checkBasket();
      checkWinLose(); 
      renderScore(); // also render score on every iteration
      removeStars();
      

      if (this.gameIsOver) {
        console.log('gameover');
        clearInterval(intervalId);
        // hide game screen
        this.gameScreen.style.display = 'none'
        // show final screen with win/lose
        this.endScreen.style.display = 'block'
        // hide lives on final screen: livesDisplay.style.display = 'none';

        // Cleanup DOM:
        this.starsArray.forEach((starObject) => {
          starObject.remove();

        })
        
      }
    }, 1000 / 60)      // update frame 60 times per second

}



/*
    const renderStar = () => {
      //this.starX +=2; //Math.random() * (this.screenWidth - this.starDiameter);
      this.starY +=2;

      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
      if (
        this.starY > this.screenHeight - this.starDiameter - this.basketHeight &&
        this.starX > this.basketX &&
        this.starX < this.basketX + this.basketWidth
      ) {
        this.score += 10;
        if (this.score > 50) {
          this.starDirectionY *= 1.1; // increase stars speed with increasing score, or change size of stars
  
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
  
      //this.starY += this.starDirectionY;
      star.style.left = `${this.starX}px`; 
      star.style.top = `${this.starY}px`; /* modify css property(top) of star to give impression of falling */

} 

 
