<!--![Game Logo](https://github.com/najjaved/game-stars-collector/blob/development/images/starsCollector.jpg) -->

# GAME | Catch the falling Stars 

## [Play the Game!](https://najjaved.github.io/game-stars-collector/)

<p align="center">
  <img src="https://media1.giphy.com/media/OFazVPIFIYmFsXROhj/giphy.webp?cid=ecf05e47eeyw4q8enmg5y9zqj74a2umf9i6lxidwjsvt7iwg&ep=v1_gifs_search&rid=giphy.webp&ct=g" width="400" alt="game start gif" style = "border-radius:30px" >
</p>



## Description

Brief description of the project here

## MVP
MVP definition here
### Main Functionalities

- Stars fall from the sky automatically and player tries to collect them in a basket
- Player moves basket direction by clicking `left` and `right`.
Introduce various difficulty levels based on score, for example increasing stars speed, bonus stars, etc.
- 
-

## Backlog Functionalities

- Refactor
- Display top score and player name when game is over.
- Responsive design using media queries
- Add animations
- Enable touch screen/ mouse control option


## Technologies Used

- HTML
- CSS
- JavaScript, OOP
- DOM Manipulation


## States

- Splash Screen
- Game Screen
- Game Over Screen

## Tasks
<details>
  <summary></summary>
   List of tasks in order of priority: 

  - check trello board 
  - ...

  <br>

</details>
<br>


# Project Structure
## main.js

- startGame();

Evemt Listeners:
- load
- click
- keyup
- keydown


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
    - this.totalScore;


- startGameLoop()
- updateScore(name, score)

## Stars.js 

- Stars()
    - this.starDiameter;

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


## Links:
### [`Trello`](https://trello.com/b/IJ0mSslm/my-game-project)
### [`Slides`](https://docs.google.com/presentation/d/1CrUeyLBTDnBFgGiYDTbboXrgNxxXFVIE-n4L15YlWZk/edit#slide=id.g2e72b1bab55_0_14)
### [`Github repository`](https://github.com/najjaved/game-stars-collector)
### [`Deployment Link`](https://najjaved.github.io/game-stars-collector/)