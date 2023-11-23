const myButton = document.querySelector("#myButton");

// Adding an event listener to the button
document.getElementById("myButton").addEventListener("click", showAlert);
function showAlert() {
  alert("Your message was sent successfully. Thank you! ");
}

function playClickSound() {
  let audio = document.getElementById("clickSound");
  audio.play();
}
