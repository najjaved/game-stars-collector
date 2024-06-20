const basketElement = document.getElementById('basket');


class Basket {
  constructor(gameScreenWidth, gameScreenWHeight, lives) {
    
    this.gameScreenWidth = gameScreenWidth;
    this.gameScreenHeight = gameScreenWHeight;
    this.remainingLives = lives;

    this.basketWidth = 200;
    this.basketHeight = 150;


    this.basketX = 0;
    this.basketDirectionX = 0;
    this.basketSpeed = 4;
    
  } 


  renderBasket(){
      this.basketX += this.basketDirectionX * this.basketSpeed; // control basket direction & speed
  
      // check for bounds
      if (this.basketX < 0) {
        this.basketX = 0;
      }

      if (this.basketX > this.gameScreenWidth - this.basketWidth) {
        this.basketX = this.gameScreenWidth - this.basketWidth;
      }
  
      basketElement.style.left = `${this.basketX}px`;
  }




}

 
