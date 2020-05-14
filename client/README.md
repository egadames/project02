### Team: 
Sin Cho Chan, Erik Adames, David Hughey and Adeola Afariogun

### Location of URLs
This is the link to the github repo:

https://github.com/egadames/project02

This is the link to the live website:

https://guarded-escarpment-04692.herokuapp.com/

### Website Concept: 
Our website is a better way to learn!
The app is way to create, edit, delete and review flashcards for studying.

### Process:  

What challenges did you encounter?
  * The challenges arose from the modulization of various components and containers. Often different containers needed to access other states that were not in the same container. The challenge was to make the code modulized while still not putting the state at the top level. 

What were your successes?
  * The main issue about s

### What were the technologies used? 
  * MySQL
  * Heroku for the domain
  * JawsDB MySql
  * HTML
  * JavaScript
  * React
  * Semantic UI CSS

### Start Page
  * This will load a starting page that contains a navbar, footer and buttons that will send you to the various features of the app.
  * There are 3 buttons on the startpage. They are links to GetAll Flashcards feature, Create a New Flashcard feature and take a review quiz feature.
  * The navbar and footer have access to the same links.

### Get All Cards Feature
  * This page is a new page that contains a navbar, footer and all the flashcard currently loaded into the database.
  * The navbar and footer have links to all the other pages on the website.
  * The flashcard will have the question and answer for each flashcard and also the flashcard number as the header.
  * The cards contain 2 buttons that are links to other features of the flashcard app. 
  * The left button takes you to the update a flashcard feature of the app.
  * the right button takes you to the delete a flashcard feature of the app.

### Update a Flashcard Feature
  * This page is a new page that contains a navbar, footer and the flashcard that was selected to be updated. There are also 2 input bars on the page. 
  * The navbar and footer have links to all the other pages on the website.
  * There are 2 inputs boxes on the page. One for updating a question and the other for updating an answer.
  * The flashcard will have the question and answer for that paticular flashcard and also the flashcard number as the header.
  * The cards contain 2 buttons that will confirm the updates and the other will be to cancel the update. 
  * The left button is used to confirm the updates and once the button is pressed the updates will replace the current on the flashcard loaded on the page.
  * the right button is there are no changes and once pressed will take you back to the startpage.

### Delete a Flashcard Feature
  * This page is a new page that contains a navbar, footer and the flashcard that was selected to be deleted. 
  * The navbar and footer have links to all the other pages on the website.
  * The flashcard will have the question and answer for that paticular flashcard and also the flashcard number as the header.
  * The cards contain 2 buttons that will confirm the deletion and the other will be to cancel the deletion. 
  * The left button is used to confirm the deletion and once the button is pressed. The flashcard will be deleted from the database and the user is routed to the view all page to show the flashcard is deleted.
  * the right button is used when the user changes their mind and once pressed will take you back to the startpage.

### Add a Flashcard Feature
  * This page is a new page that contains a navbar, footer, 2 input bars on the page with 2 buttons, and also all the flashcards in the database. 
  * The navbar and footer have links to all the other pages on the website.
  * ALl the flashcards are loaded to allow the user to easily confirm there is no duplicate flashcards being created.
  * There are 2 inputs boxes on the page. One for adding a question and the other for adding an answer.
  * Once the user enters the information into the input fields and the submit button is pressed. The new flashcard is created. 
  * After the submit button is pressed, the flashcard is created and theuser is routed to the view all page where they can see the newly added card.
  * the cancel button once pressed will take you back to the startpage.

### Review Flashcard feature
  * This page is a new page that contains a navbar, footer, 1 input bar with a submit buttons, a flashcard starting from the first in the database and 2 navigation buttons. 
  * The navbar and footer have links to all the other pages on the website.
  * The flashcards are loaded one at a time starting with the first flashcard in the database. The flashcard only contains the question and no answer.
  * Below the flashcard, there is an input box for the user to submit an answer. The user is only allowed to submit once and on their submission there response is checked against and there correct count is updated accordingly. 
  * There are 2 navigation buttons on either side of the flashcars and this allows users to cycle through the cards in the database to perform the quiz. 
  * If the user attempts to go back before the first card, nothing occurs.
  * If the user reaches the last card and the next button is pressed. THis action takes the user to the final screen where a modal appears telling them their number correct and their percentage correct.
  * On this model, there are 2 buttons that will send the user to the startpage or allow the user to redo the quiz.

### Additional Features
1. There will be an additional feature that allows the user to create different flashcard stacks. Currently all the flashcards are grouped together so if there are different subjects there will be no way to only study a certain subject.
2. There will be a more advanced version of the quiz that incoroprates True or False questions and also multiple choice.




