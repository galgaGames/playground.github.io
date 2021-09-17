/*
Listner for clickign add on enter keystroke
*/
document
  .getElementById("player-name-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("player-name-button").click();
    }
  });
