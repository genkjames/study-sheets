# Project Overview

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and/or functionality. -->

The purpose of this app is for users to be able to study efficiently on a specific subject they are having trouble or to brush up on old material. Users will have access to all default worksheets and the study cards in them. Once a worksheet is added to a user's workspace they will be able to create, delete and update the study cards in that particular worksheet.

- Site Example 1: https://quizlet.com/
- Site Example 2: http://www.cram.com/

## Wireframes

<!-- Include images of your wireframes.  -->
![wireframe1](images/wireframe1.jpg)

![wireframe2](images/wireframe2.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix. 

| Component | Priority | Estimated Time |
| --- | :---: |  :---: |
| App Logic | 1 | 10hrs| 
| Database Setup | 2 | 1hrs| 
| Routes | 3 | 3hrs| 
| Page Layout | 4 | 8hrs| 
| Page Design | 5 | 9hrs|
| Total |  | 31hrs| 

![priority](images/priority.jpg)

## App Components

### Landing Page
<!-- What will a player see when they start your game? -->
A player will see a welcome page that asks for a name and a suit (diamonds, hearts, etc.) of the cards they prefer when they start a game. The rules of the game will also be displayed.

### App Initialization
<!-- What will a player see when the game is started?  -->
When the game is started cards will be shuffled and distributed from the deck position to the playing positions on the board. There will be a reset button and undo button on the page.

### Using The App
<!-- What will be the flow of the game, what will the user be expected to do and what will the user expect from the game. -->
Users will be able to click a card from the playing field on top of another card on the playing field, as long as the card being clicked on is one rank lower than the card it's being placed on. The goal is to try to get a sequence of 13 cards that are placed from King to Ace in less than 8 minutes. Once a sequence of 13 cards in the right order is met, that sequence is moved to one of the empty slots at the top right corner of the page. All four slots should be filled to win the game. Clicking on the deck of cards in the top left corner of the screen gives users more cards if needed. When you click the Undo button, the last move from the user will be cleared. The user will be able to click the Undo button as many times as possible, even to the start of the game, however their score will go down. The score of the user will be based on the time it took them to complete the game.

### Winning The Game
<!-- What does it look like when the game ends, what determines winning or losing? -->
Once the playing field is cleared of all cards and the deck is empty before 8 minutes, the user wins the game. If time runs out, then the user loses the game. Game status will be displayed in a pop up box. If user has won, confetti will appear on the screen.

### Game Reset
<!-- How will the user restart the game once it has been completed. -->
The user will be able to restart the game at any time. A reset button will be located on the board.

## MVP 

<!-- Include the full list of features that will be part of your MVP  -->
- 1 player game
- User will be greeted by name.
- Cards will be animated to move across the screen.
- Cards can be clicked to another card, if the rank of the card being clicked on is one rank lower than the card it's being placed on.
- Score will be determined by time.
- Creating the design of each card based on the suit the user has chosen.

## POST MVP

<!-- Include the full list of features that you are considering for POST MVP -->
- Users will have to log in to edit their workspace
- Logged in users will be able to create their own worksheets

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Game Logic | 1 | 7hrs| 12hrs | 12hrs |
| Card Animation | 2 | 4hrs| 2hrs | 2hrs |
| Suits Creation | 3 | 3hrs| 3hrs | 3hrs |
| Page Layout | 4 | 6hrs| 7hrs | 8hrs |
| Game Score | 5 | 1hrs| 1hrs | 2hrs |
| Post-MVP | 6 | 10hrs| 1hrs | 1hrs |
| Total |  | 31hrs| 26hrs | 29hrs |