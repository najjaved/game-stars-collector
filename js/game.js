const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const finalScore = document.getElementById('final-score');
const livesDisplay = document.getElementById('lives');
const messageDisplay = document.getElementById('end-msg');
const gifDisplay = document.getElementById('gif');
const backgroundMusic = document.getElementById('backgound-music');
 


class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.endScreen = document.querySelector('#game-end');

    
    this.screenWidth = 800;
    this.screenHeight = 1200;
    this.starDiameter = 50;
    this.basketWidth = 200;
    this.basketHeight = 150;

    
    this.starX = 3;
    this.starY = 0;
    this.starSpeed = 1;

    this.basketX = 0;
    this.basketDirectionX = 0; // initial position, not moving
    this.basketSpeed = 4;

    
    this.score;
    this.lives;
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
    this.score =0;

    backgroundMusic.muted = false;
    backgroundMusic.play();
    backgroundMusic.volume = 0.5;


    
    const generateX = () =>{
      let xCoordinate = Math.floor(Math.random()*10 + 1); // offset by starWidth i.e. 50px
      return xCoordinate * 50;
    }

    const speedFactor = () => {
      if(this.score < 50) {
        return this.starSpeed;
      } else if(this.score >= 50) {
        let speedUp = 2.0;
        return this.starSpeed + this.score / 200 * speedUp;
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

    const renderBasket = () => {
      this.basketX += this.basketDirectionX * this.basketSpeed;
  
      // check for bounds
      if (this.basketX < 0) {
        this.basketX = 0;
      }
      if (this.basketX > this.screenWidth - this.basketWidth) {
        this.basketX = this.screenWidth - this.basketWidth;
      }
  
      basket.style.left = `${this.basketX}px`;
  
    }

    const renderScore = () => {
      scoreDisplay.innerText = this.score;
      }
  
    const renderLives = () => {
      livesDisplay.innerText = this.lives;
      }


   const checkBasket = () =>{
    for(let i =0; i<this.starsArray.length; i+=1) {
      let aStar = this.starsArray[i]; 
      let starY = parseInt(aStar.style.top);
      let starX = parseInt(aStar.style.left)
      if (
          starY > this.screenHeight - this.basketHeight &&
          starX > this.basketX &&
          starX < this.basketX + this.basketWidth
        ) {
          this.score += 10;
        }

      else if(starY > this.screenHeight -this.basketHeight) {
        this.lives -=1;

        }

    }
 }

  const checkWinLose = () => {
    if (this.score >= 150) {
      console.log('You won!');
      this.gameIsOver = true;
      messageDisplay.innerText = 'YOU WIN!!!'; 
      gifDisplay.src = "https://media2.giphy.com/media/fxsqOYnIMEefC/100.webp?cid=ecf05e472cx2ylhiouyj4cqclb405ihve3d01c2klw5isxmo&ep=v1_gifs_search&rid=100.webp&ct=g"
      
    }

    if (this.lives < 0) {
      this.gameIsOver = true;
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


    const gameOver = (intervalId) => {        
      clearInterval(intervalId);
      this.gameScreen.style.display = 'none'
      this.endScreen.style.display = 'block'
      finalScore.innerText = this.score;
      backgroundMusic.muted = true;
      // Cleanup DOM:
      this.starsArray.forEach((starObject) => {
        starObject.remove();

      })
    }

    
    const intervalId = setInterval(() => {
      this.currentFrame +=1;
      renderStars();
      renderBasket();
      renderLives();
      checkBasket();
      checkWinLose(); 
      renderScore();
      removeStars();
      
      if (this.gameIsOver) {
        console.log('gameover');
        gameOver(intervalId);
       }

    }, 1000 / 60);     // update frame 60 times per second

  }

} 

 
