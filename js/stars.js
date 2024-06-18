class Stars {
  constructor() {

    this.starDiameter = 30;

    
    this.starX = 3;
    this.starY = 0;
    this.starDirectionY = 1; // move in downwards with double the speed
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

  renderStars () {
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


  createStar() {
      const newStar = document.createElement('div');
      newStar.setAttribute('id', 'newStar'+ this.starsCounter);
      newStar.setAttribute('class', 'star');
      this.gameScreen.appendChild(newStar); 
      newStar.style.left = `${generateX()}px`; 
      newStar.style.top = '0px'; 
      this.starsCounter+=1;

     return newStar;
    }


  removeStars() {
      const starsToKeep = this.starsArray.filter((star) => parseInt(star.style.top) <= (this.screenHeight - this.basketHeight));
      const starsToRemove = this.starsArray.filter((star) => parseInt(star.style.top) > (this.screenHeight - this.basketHeight));
      this.starsArray = [...starsToKeep];
      for(let i = 0; i < starsToRemove.length; i++) {
        starsToRemove[i].remove();
      }

    }


}

 
