# Project Overview

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and/or functionality. -->

The purpose of this app is for users to be able to study efficiently on a specific subject they are having trouble with, or to brush up on old material. Users will have access to all default worksheets and the study cards in them. Once a worksheet is added to a user's workspace they will be able to create, delete and update the study cards in that particular worksheet.

- Site Example 1: https://quizlet.com/
- Site Example 2: http://www.cram.com/

## Wireframes

<!-- Include images of your wireframes.  -->
![wireframe1](images/wireframe1.jpg)

![wireframe2](images/wireframe2.jpg)

## Database Schema

### Table Name: worksheets
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| name | text not null |
| subject_id | references subjects(id) |

### Table Name: cards
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| user_id | references users(id) |
| question | text |
| worksheet_id |  references worksheets(id) |

### Table Name: subjects
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| subject | ex) Web Development, Accounting, Business, etc. |

### Table Name: types 
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| type | ex) multiple choice, short answer, etc. |

### Table Name: options
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| card_id | references cards(id) |
| type_id | references types(id) |
| option | possible answers to questions |
| isTrue | boolean not null |

### Table Name: users
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| username | text not null |
| email | text not null |
| password_digest | text not null |

### Table Name: userworksheets
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| user_id | references users(id) |
| worksheet_id | references worksheet(id) |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. 

| Component | Priority | Estimated Time |
| --- | :---: |  :---: |
| App Logic | 1 | 10hrs| 
| Database Setup | 2 | 1hrs| 
| Routes | 3 | 3hrs| 
| Page Layout | 4 | 8hrs| 
| Page Design | 5 | 9hrs|
| Total |  | 31hrs| 



## App Components

### Landing Page
<!-- What will a user see when they start your app? -->
A user will see a welcome page that gives them tips and tricks on how to be a better learner.

### App Initialization
<!-- What will a user see when the app is started?  -->
When the app is started, logged in users will be able to view all worksheets on the site. From there they can add worksheets to their workspace, so they can start studying the cards.

### Using The App
<!-- What will be the flow of the game, what will the user be expected to do and what will the user expect from the game. -->
Users can add as many worksheets to their workspace. The types of questions available will be multiple choice, short answer and true/false questions. Users will also be able to edit their workspace by dropping a worksheet from their workspace, creating a new study card, or updating or deleting a study card that they themselves have created. When a worksheet is dropped from the workspace the cards the user created in that worksheet will be deleted. There is also a subjects page available to filter worksheets based on the subject of their choice.


## MVP 

<!-- Include the full list of features that will be part of your MVP  -->
- Users will be able to filter results of the worksheets provided, based on a subject.
- When you click on the question mark on the study cards, the answer of the question will be revealed to the user. Clicking on the question mark again, will show the question. So it toggles between question and answer.
- Users will be able to create, update and delete study cards when they edit their workspace.
- When users create a card, they can choose whether that question will be multiple choice, short answer, true/false.

## POST MVP

<!-- Include the full list of features that you are considering for POST MVP -->
- Cards will be animated to flip over.
- Logged in users will be able to create their own worksheets

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App Logic | 1 | 10hrs| 12hrs | 12hrs |
| Database Setup | 2 | 1hrs| 1hrs | 1hrs |
| Routes | 3 | 3hrs| 2hrs | 2hrs |
| Page Layout | 4 | 8hrs| 6hrs | 6hrs |
| Page Design | 5 | 9hrs| 12hrs | 12hrs |
| Post-MVP | 6 | 7hrs| 1hrs | 1hrs |
| Total |  | 38hrs| 34hrs | 34hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |
| toggleHide() | This will toggle the class 'hide' on or off element. The class hide has a display of none. | 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. 

```
  workspaceRouter.route('/:id')
    .put(workSpaceC.updateCard, workSpaceC.updateOption, workSpaceVC.redirectWorkspace, error.sendError)

  function updateCard(question) {
    return db.one(`
      UPDATE cards
      SET question = $/question/
      WHERE id = $/id/
      RETURNING *
    `, question);
  }

  function updateCard(req, res, next) {
    req.body.id = req.params.id;
    workspaceDb.updateCard(req.body)
    .then(data => {
      res.locals.card = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }

  function updateOption(option) {
    return db.one(`
      UPDATE options
      SET option = $/option/
      WHERE card_id = $/card_id/
      AND istrue = true
      RETURNING *
    `, option);
  }

  function updateOption(req, res, next) {
    req.body.card_id = req.params.id;
    workspaceDb.updateOption(req.body)
    .then(data => {
      res.locals.option = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }

  function redirectWorkspace(req, res) {
    res.redirect('/workspace/edit');
  }
``` 
When users clicks on the create card button a put request is sent and the database selects a card with the corresponding id and updates the question column in the cards table. The same process applies to the option column for the options table. Once those values are updated, the browser redirects back to the edit page, so you can update more cards.

## Discoveries
 Use this section to list some, but not all, methods and\or functionality discovered while working on this project.

 * substring()
 * <%- %>

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 One issue I had was setting up auth after setting up my get and post routes. I had to update my code to include the req.session.user.id The process would've been a lot smoother if I had set up auth first.
