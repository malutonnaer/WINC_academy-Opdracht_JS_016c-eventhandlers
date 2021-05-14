var buttonBackground = document.getElementById('background-button');
const bodyElement = document.body;

buttonBackground.addEventListener("click", toggleBackground);
function toggleBackground() {   
    bodyElement.classList.toggle("red-background");
};