"use strict";

class Stars {
  constructor(gameScreen, screenWidth,screenHeight, score) {

    this.gameScreen = gameScreen;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    
    this.starX = 2;
    this.starY = 0;
    this.starSpeed = 2;


    this.framesCounter = 0;
    this.starsCounter = 0;
    this.starsArray =[];

    //this.id = Math.round(Math.random()*1000);

    this.score =score;

    this.golden = false;

    
    
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
    if((Math.round(Math.random()*10) +1) >5){
      newStar.setAttribute('class', 'goldenStar');
      //this.golden = true;
    }
    else {
      newStar.setAttribute('class', 'star');
      //this.golden = false;
    }
    this.gameScreen.appendChild(newStar); 
    newStar.style.left = `${this.generateX()}px`; 
    newStar.style.top = `${this.starY}px`; 
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
    // create star every half second
    if (this.framesCounter % 90 ===0){
      this.starsArray.push(this.createStar());
    }
  }



  removeStars() {
      const starsToKeep = this.starsArray.filter((star) => parseInt(star.style.top) <= (this.screenHeight - Basket.height()));
      const starsToRemove = this.starsArray.filter((star) => parseInt(star.style.top) > (this.screenHeight - Basket.height()));
      this.starsArray = [...starsToKeep];
      for(let i = 0; i < starsToRemove.length; i++) {
        starsToRemove[i].remove();
      }

    }


}

 
