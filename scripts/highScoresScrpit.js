var highScoresTableEl;
var hsJson;
var highScores;

//makes sure window has loaded before accessing page elements
window.onload = function() {
    highScoresTableEl = document.querySelector("#highScoresTable");
    hsJson = localStorage.getItem("highScores")

    //parse highScore objects
    highScores = JSON.parse(hsJson);

    //propulate table
    if (highScores != null && highScores.length > 0) {

        //desc order sort by score
        highScores.sort(scoreCompare);

        var tableRowsMarkup = "";
        //create a row for each record
        for (var i = 0; i < highScores.length; i++) {
            var score = highScores[i];
            tableRowsMarkup += "<tr><td>" + score.playerName + "</td>" +
                                "<td>" + score.quizDate + "</td>" +
                                "<td class='collapseCol'>" + score.rightAnswerCount + "</td>" +
                                "<td  class='collapseCol'>" + score.wrongAnswerCount + "</td>" +
                                "<td>" + score.score + "<td></tr>";


            highScoresTableEl.innerHTML = tableRowsMarkup;
        }
    }
}

//comparer for highScores sort
function scoreCompare( a, b ) {
    if ( a.score < b.score ){
      return 1;
    }
    if ( a.score > b.score ){
      return -1;
    }
    return 0;
  }