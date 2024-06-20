class Stars {
  constructor(gameScreen, screenWidth,screenHeight) {

    this.gameScreen = gameScreen;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    
    this.starX = 3;
    this.starY = 0;
    this.starSpeed = 1;


    this.framesCounter = 0;
    this.starsCounter = 0;
    this.starsArray =[];
    
    
  } 
    
  generateX() {
      let xCoordinate = Math.floor(Math.random()*10);
      return xCoordinate * 50;
    }

  speedFactor() {
      if(this.score < 50) {
        return this.starSpeed;
      } else if(this.score >= 50) {
        let speedUp = 2.0;
        return this.starSpeed + this.score / 200 * speedUp;
      }
    }

    createStar() {
      const newStar = document.createElement('div');
      newStar.setAttribute('id', 'newStar'+ this.starsCounter);
      newStar.setAttribute('class', 'star');
      this.gameScreen.appendChild(newStar); 
      newStar.style.left = `${this.generateX()}px`; 
      newStar.style.top = '0px'; 
      this.starsCounter+=1;

     return newStar;
    }
  
    renderStars() {
      for(let i =0; i<this.starsArray.length; i+=1) {
        let aStar = this.starsArray[i]; 
        const oldY = parseInt(aStar.style.top);
        const newY = oldY + 2 * this.speedFactor(); 
        aStar.style.top = `${newY}px`;
      }
      this.framesCounter +=1;
      // create star every second
      if (this.framesCounter % 180 ===0){
        this.starsArray.push(this.createStar());
      }
    }



  removeStars() {
      const starsToKeep = this.starsArray.filter((star) => parseInt(star.style.top) <= (this.screenHeight - this.basket));
      const starsToRemove = this.starsArray.filter((star) => parseInt(star.style.top) > (this.screenHeight - this.basket));
      this.starsArray = [...starsToKeep];
      for(let i = 0; i < starsToRemove.length; i++) {
        starsToRemove[i].remove();
      }

    }


}

 
