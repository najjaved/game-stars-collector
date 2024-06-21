<!--![Game Logo](https://github.com/najjaved/game-stars-collector/blob/development/images/starsCollector.jpg) -->

# GAME | Catch the falling Stars 

## [Play the Game!](https://najjaved.github.io/game-stars-collector/)

<p align="center">
  <img src="https://media1.giphy.com/media/OFazVPIFIYmFsXROhj/giphy.webp?cid=ecf05e47eeyw4q8enmg5y9zqj74a2umf9i6lxidwjsvt7iwg&ep=v1_gifs_search&rid=giphy.webp&ct=g" width="400" alt="game start gif" style = "border-radius:30px" >
</p>



## Description

Catch the falling stars, is a game where a player tries to collect stars to gain points. In each game round, player has 3 lives. A star falling on earth means a life lost whereas catching a golden star earns you a new life.If the score reaches 150, player wins. If lives are exhaused, game is over and palyer loses! After the game ends, top score is displayed along with a player name on screen.


### Main Functionalities

- Stars fall from the sky automatically in intervals.
- Player tries to collect them in a basket by clicking key A/ arrow `left` and key D/ arrow `right` to control its movement.
- A score is calculated based number of stars collected.
- The game ends when 3 chances are missed i.e. a fell on ground, or when a score of 150 is reached.
- The game difficulty increases as the score is increased. This changes the speed and frequency of stars.
- For each game play, scores are tracked with a player name and score.


## Backlog Functionalities

- Refactor
- Display top score and player name when game is over.
- Responsive design using media queries
- Add animations e.g. when a star is lost
- Add audios for impact, win and lose
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

  - Game idea presentation & validation
  - Project planing & collection of assests: images, GIFs, audio files
  - Split tasks and setup Kanban board
  - Game implementation:  
    - Create splash screen
    - Create game screen
    - Create end screen with win or lose display
    - implementation of user interaction
    - Render basket object and its movement control
    - Create stars objects dynamically and render them onto game screen
    - Implement Win/Lose logic
    - Implement game over function
    - Add background audio when game starts
    - Finalize styling
  - Update Readme
  - Deployment and testing live
  - Prepare presentaion slides


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


    - this.basketWidth;
    - this.basketHeight;
    - this.basketX;
    - this.basketY;
    - this.basketSpeed;

    - this.starWidth;
    - this.starHeight;
    - this.starX;
    - this.starY;
    - this.starsSpeed;

    - this.lives;
    - this.score;
    - this.gameIsOver;

    
    - this.framesCounter;
    - this.starsCounter;
    - this.starsArray;


    - this.playerName;
    - this.totalScore;


- startGameLoop()
- generateX()
- speedFactor()
- createStar()
- renderStars()
- checkBasket()
- checkWinLose()
- gameOver()
- removeStars()
- updateScore(name, score)

## Stars.js 

- Stars()

    - this.starWidth;
    - this.starHeight;
    - this.starX;
    - this.starY;
    - this.starsSpeed;

    - this.basketWidth;
    - this.basketHeight;
    - this.basketX;
    - this.basketY;

    - this.framesCounter;
    - this.starsCounter;
    - this.starsArray;


- generateX()
- speedFactor()
- createStar()
- renderStars()

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