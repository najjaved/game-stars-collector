//const basket = document.getElementById('basket');

class Basket {
  constructor() {

    this.basketWidth = 100;
    this.basketHeight = 50;


    this.basketX = 0;
    this.basketDirectionX = 0; // initial position, not moving
    this.basketSpeed = 4;
    
  } 


  renderBasket(){
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

    checkBasket() {
      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
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
          livesDisplay.innerText = this.lives;

          }
        }
      }




}

 
