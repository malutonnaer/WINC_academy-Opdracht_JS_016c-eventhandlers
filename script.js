var buttonAlert = document.getElementById('alert-button');
buttonAlert.addEventListener("click", makeAlert);

function makeAlert() {
    alert("Button Clicked")
};

var buttonBackground = document.getElementById('background-button');
const bodyElement = document.body;

buttonBackground.addEventListener("click", toggleBackground);
function toggleBackground() {   
    bodyElement.classList.toggle("red-background");
};


