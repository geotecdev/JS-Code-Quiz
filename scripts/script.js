var coverContainer;
var startBtn;

// event listener to make sure all elements have loaded
document.addEventListener("DOMContentLoaded", function(event){

    //set element variable values
    coverContainer = document.querySelector("#coverContainer");
    coverContainer.style.display  = "none";
    startBtn = document.querySelector("#startBtn");

    //event listeners
    document.querySelector("#startBtn").addEventListener("click", hideContentCover);


});






//functions

function hideContentCover() {
    coverContainer.style.display = "block";
};

function showContentCover() {
    coverContainer.style.display = "none";
}




