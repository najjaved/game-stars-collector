const star = document.getElementById('star')
const basket = document.getElementById('basket')
const scoreDisplay = document.getElementById('score')

  const screenWidth = 500
  const screenHeight = 800
  const starDiameter = 30
  const basketWidth = 100
  const basketHeight = 50  

  let score = 0
  let gameOver = false

  let starX = 0
  let starY = 0
  let starDirectionY = 2 // move in downwards with double the speed

  let basketX = 0
  let basketDirectionX = 0 // initial position, not moving




class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro')
    this.gameScreen = document.querySelector('#game-screen')
    this.endScreen = document.querySelector('#game-end')
    this.width = 500
    this.height = 800

    this.player

    this.currentFrame = 0
    this.lives = 3
    this.gameOver = false
  } 

  start() {
    this.gameScreen.style.width = `${this.width}px`
    this.gameScreen.style.height = `${this.height}px`

    this.startScreen.style.display = 'none'
    this.gameScreen.style.display = 'block'
    this.endScreen.style.display = 'none'


    const renderStar = () => {

      // star to catch taking into accout basket height, get score..other part where its a loss, full screen height - star height and game over. For catch the stars, inverse logic
      if (
        starY > screenHeight - starDiameter - basketHeight &&
        starX > basketX &&
        starX < basketX + basketWidth
      ) {
        score += 10
        if (score > 50) {
          starDirectionY *= 1.1 // increase stars speed with increaing score, or change size of stars
  
        }
        
        if (score >= 100) {
          gameOver = true
        }
      }
  
      else if ( starY > screenHeight - starDiameter - basketHeight) {
        gameOver = true
      }
  
      starY += starDirectionY
      star.style.left = `${starX}px` /* modify css property(left) of star to give impression of movement */
      star.style.top = `${starY}px`
    }
  
    const renderBasket = () => {
      basketX += basketDirectionX // control basket direction & speed
  
      // check for bounds
      if (basketX < 0) {
        basketX = 0
      }
      if (basketX > screenWidth - basketWidth) {
        basketX = screenWidth - basketWidth
      }
  
      basket.style.left = `${basketX}px` // every frame change its position, add eventlistener for user inputs to move it
  
    }
  
    const renderScore = () => {
      scoreDisplay.innerText = score
    }
  
    const intervalId = setInterval(() => {
      renderStar()
      renderBasket()
      renderScore() // also render score on every iteration
  
      if (gameOver) {
        console.log('gameover')
        clearInterval(intervalId)
        // hide game screen
        // show final screen with win/lose
      }
    }, 1000 / 60)  // update frame 60 times per second

      // attach eventListener to key press, feed the event to its callback function
  document.addEventListener("keydown", (keyDownEvent) => {
    console.log(keyDownEvent) // check properties of the event

    if(keyDownEvent.code === 'KeyA' || keyDownEvent.code === 'ArrowLeft') {
      console.log('go left!')
      basketDirectionX = -2;
    }

    if(keyDownEvent.code === 'KeyD' || keyDownEvent.code === 'ArrowRight') {
      console.log('go right!')
      basketDirectionX = 2;
    }
  })

  // attach eventListener to key release
  document.addEventListener('keyup', keyUpEvent => {
    if (
      keyUpEvent.code === 'KeyA' ||
      keyUpEvent.code === 'ArrowLeft' ||
      keyUpEvent.code === 'KeyD' ||
      keyUpEvent.code === 'ArrowRight'
    ) {
      basketDirectionX = 0
    }
  })

  }
}
