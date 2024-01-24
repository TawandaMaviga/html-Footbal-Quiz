In this project 2, i will create a Football Quiz. The quiz consists of ten questions. To make the quiz, easy to read and to use, the questions and answers shall be short and brief. This is to test the user's's knowledge about the game of football(not American football).
For this project, i am utilising HTML, CSS AND JavaScript.
I am using Visual Studio Code as my editor.
First step is to create the HTML structure in Visual Studio Code
Next, i have created the CSS file in Visual Studio Code and i have added the margin, padding, font-family and box-sizing which will apply to all HTML elements.
I have added the CSS link to the HTML file, to connect the two files.
Added the title of the quiz in the title section of the HTML and added the div in the body of the HTML, with the class name Application.
In the CSS, i have added the body and the color, aquamarine and i have also added the Application in the CSS together with its attributes such as background color, margin, width etc.
i have created the h1 with the title Footbal Quiz and the div with the class 'quiz'. I have also added h2 with the id 'question' and the heading 'Write Questions'. These actions should now show in the webpage on liveserver.
Next, i have added some orphans by creating a div named 'buttons-for answers
and then added the ten answer buttons, the ten answer button should now reflect on the webpage.
I added some CSS  for the h1 Application, this creates a line below the title of Football Quiz. I also added the class name '.quiz' and also for '.quiz h2'.
Designing the buttons by adding the CSS for it and when viewing the webpage, it shows the added CSS.
Next is to add the hover button in the CSS and it is now showing the background color when hovering over the answer boxes.
Now to add the 'next' button below the answer boxes. I first add another button with the id 'next-button' and title 'Next'. Now, the 'Next' button is visible below the ten answer boxes. I will add the CSS for the 'Next' button, which has now added color to it. I will try to move it to the center by adding the display in the CSS with the instruction set to none, so that it can be hidden.
Next, Adding JavaScript by creating a new JavaScript file in Visual Studio Code and also connect it to the HTML by adding the link in HTML.
The first to do in the JavaScript is to set all the 10 quiz questions with const and the probable answers to each question.
I will now add the 3 variables (question,buttons-for answers & next-button) in the HTML to Javascript file.
I do this by using the getElementBy Id in JavaScript for all the above named 3 variables.
As the quiz is being played, the number and index will change, so i will create the currentQuestionIndex and set it to 0 as well as set the score to 0.
I will try to add the function to StarttheQuiz withe currentQuestionIndex and score set to 0 and adding the Next button in the function element will enable the quiz to restart and replay.
I will also create the showQuestion function in JavaScript, this will enable to show the first question if it set at 0 and the next after.
I will then create the currentQuestion.answer.forEachAnswer, this will allow to show the answer for each question.
I will set the startQuiz function at the bottom of the JavaScript file so that it can call the showQuestion function, the currentQuestion function and the currentQuestionAnswers function
However, now when i go to the webpage, it is not displaying these above functions. There seems to be an error. It is not displaying the quiz questions and the answers.
I add another function element, the resetState. This function will elp remove all the previous answers in the quiz game.
I will add the click function by adding the eventListener with click to select answer. So if we click on the button it will select answer and will add if the answer is correct. Also will create the button dataset.correct which will answer if it is true or false as in the answer text of the questions.
I will also add the selectAnswer function in the JavaScript file. If the selectAnswer button is clicked, it should be able to check if the selected dataset is true and if it, it will then add the classlist as correct if not, it will say incorrect.
I will go back to the CSS file and add some color to the correct and incorrect classlists.
After adding these, when answer button is clicked incorrect, the color crimson will show and if correct, the color aqua will show.
To disable the click function after choosing an answer, i will add the Array function, and make sure the answer buttons for each button if answer is true, the button is disabled. I will also add the nextButton.display to block in order to enable it to go to the next question. 
In the CSS, we will go to the Hover button and add not disabled and then also add below, that button disabled and also make the cursor not to work on the other boxes once answer chosen.
I will then add the nextButton.eventListener such that if there is no currentQuestion, it will restart the quiz.
I will also add the handleNextButton function such that if there is no next question, it will show the score of the quiz.
I will also add the showScore function, such that after showing the score, the user should be able to play the game again.
After noticing some typo in my button element in JavaScript and also a typo in the disabled attribute and also fixing my cursor by giving it a valid value of not allowed, now when i go on live server, my code is displaying the first question and the answers to select, and when i select the answer, the next button comes on but when i click to move to the next question, it is not responsive.
