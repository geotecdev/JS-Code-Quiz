# JS-Code-Quiz
Website with event driven JavaScript and localstorage that quizzes user's JS knowledge


# Application Description
This web app runs a quiz on a timer. The quiz asks users a series of 6 JavaScript related questions and saves a score to local storeage based on time
remaining (if all the questions are answered). incorrect answers decrement the countdown timer by 7 seconds. the app also prompts users to enter
a 'player name' value--also saved to local storage--so that thier scores can be displayed in a high scores table (highScores).  


# Application Notes
The app's logic is implimented in 'vanilla' javascript. I used globalally scoped variables in most instances
and wrapped the statements that set element variables and event liteners with 'window.onload' to prevent execution
before the elements in quetsion load before those statements are executed. The help modal is a bootstrap component,
but the 'results' modal that shows at the end of the quiz is custom.

# Extra Features
-Responsive bootstrap layout
-if player name is not in local storage when user clicks the 'start quiz'
  button, they will be prompted to enter it
-player name can be changed by clicking on the 'player: ' caption in the control
 bar header
-high scores are persisted in localstorage. Table display sorts them by descending 
 score with a custom comparer

# Link to Deployed Application
https://geotecdev.github.io/JS-Code-Quiz

# Link to Github Repository
https://github.com/geotecdev/JS-Code-Quiz

# main page appearance (screenshot)
A static image of the completed landing page can be found at the link below
```md
![alt text](./images/Screenshot.png)
```

#Licence
MIT License

Copyright (c) 2021 Mike Ruane (geotecdev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
