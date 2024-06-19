# Stars Collector

## [Play the Game!](https://najjaved.github.io/game-stars-collector/)

![Game Logo]()


# Description

Brief description of the project

# MVP
MVP definition here
## Main Functionalities

- Stars fall from the sky automatically and player tries to collect them in a basket
- Player moves basket direction by clicking `left` and `right`.
- 
-

# Backlog Functionalities

- Introduce various difficulty levels based on score, for example increasing stars speed, bonus stars, etc.
- Responsive design using media queries
- Improving the UI and styling.
- Local Storage
- JS Audio() and JS Image()
- Add animation


# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes


# States

- Splash Screen
- Game Screen
- Game Over Screen

# Tasks
List of tasks in order of priority

# Project Structure

## main.js

- buildDom();
- main();
- createSplashScreen();
- removeSplashScreen();
- createGameScreen();
- removeGameScreen();
- createGameOverScreen();
- removeGameOverScreen();
- startGame();
- gameOver();

## Game.js

- Game ()

    - this.startScreen;
    - this.gameScreen;
    - this.endScreen;

    - this.screenWidth;
    - this.screenHeight;
    - this.starDiameter;


    - this.lives;
    - this.score;
    - this.gameIsOver;

    - this.background;
    
    - this.framesCounter;
    - this.starsCounter;
    - this.starsArray;


    - this.inputName;
    - this.dificultyMessage;
    - this.totalScore;


    - this.soundDificultyUp;
    - this.soundSquish;
    - this.soundGameOver;

- startGameLoop()
- checkWinLose()
- gameOver()


- dificultyIncrease()
- updateScore(name, score)

## Stars.js 

- Stars()
    - his.starDiameter;

    - this.starX;
    - this.starY;
    - this.starDirectionY;
    - this.starSpeed;

    - this.framesCounter;
    - this.starsCounter;
    - this.starsArray;


- generateX()
- speedFactor()
- createStar()
- renderStars()
- removeStars()

## Basket.js 

- Basket()
    - this.basketWidth;
    - this.basketHeight;

    - this.basketX;
    - this.basketDirectionX; 
    - this.basketSpeed;


- renderBasket()
- checkBasket()


# Links 

### Trello (https://trello.com/b/IJ0mSslm/my-game-project)

### Slides
[Link] (www.your-slides-url-here.com)

### Github repository: https://github.com/najjaved/game-stars-collector

## Deployment Link (https://najjaved.github.io/game-stars-collector/)