    //load question data from JSON
    function loadQuestions() {        
        var questions = [
            {
                "question": "what does the 'DOM' stand for?",
                "answerChoices": [
                    "~ Document Object Model",
                    "Dominic",
                    "Dingos and Opossums are Marsupials",
                    "Domain Object Map"        
                ],
                "answer": "~ Document Object Model"
            },
            {
                "question": "which operator signifies 'or' in javascript?",
                "answerChoices": [
                    "%",
                    "**",
                    "~ ||",
                    "&&"        
                ],
                "answer": "~ ||"
            },
            {
                "question": "how would you find a random number between 0 and 10?",
                "answerChoices": [
                    "~ Math.floor(Math.random() * 10);",
                    "Math.ceiling(Math.random() * 10) + 1);",
                    "Math.floor(Math.random() * 9) - 1);",
                    "Math.round(Math.random() * 10) + 1)"        
                ],
                "answer": "~ Math.floor(Math.random() * 10);"
            },
            {
                "question": "how can you select a div that has a class and id name?",
                "answerChoices": [
                    "document.getElementById('idName');",
                    "document.getElementByClassName('className');",
                    "document.querySelector ('#idName');",
                    "~ all of the above"        
                ],
                "answer": "~ all of the above"
            },
            {
                "question": "what is the document object a property of",
                "answerChoices": [
                    "tab",
                    "client",
                    "~ window",
                    "body"        
                ],
                "answer": "~ window"
            },
            {
                "question": "how would you get the 3rd item in an array",
                "answerChoices": [
                    "arr[3]",
                    "~ arr[2]",
                    "arr['three']",
                    "arr(2)"        
                ],
                "answer": "~ arr[2]"
            }
        ];
        return questions;
    }