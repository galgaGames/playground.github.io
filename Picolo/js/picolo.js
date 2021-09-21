/*
this is the galga version of picolo
Galgacolo!


ToDo
When removeing, stylöe of odd n even must change- prefeably not recaluate but might be nessecarry
make the acualt card games logic
make a how to make card doc
add card on internet? --hard (or super easy who knows)
time to sleep
*/

const addPlayer = () => {
  let playerName = document.getElementById("player-name-input").value;
  if (playerName === "" || playerList.includes(playerName)) return;

  playerList.push(playerName);
  let htmlStr = html.listItemPlayer.get(playerName, playerList.length - 1);
  document
    .getElementById("player-list")
    .insertAdjacentHTML("beforeend", htmlStr);
  document.getElementById("player-counter-label").innerHTML = playerList.length;
  document.getElementById("player-name-input").value = null;
};

const removePlayer = (name) => {
  playerList = playerList.filter((player) => player !== name);
  console.log("this is bugging", playerList, name);
  document.getElementById(`li-${name}`).remove();
  document.getElementById("player-counter-label").innerHTML = playerList.length;
};

const start = () => {
  //hide settings
  document.getElementById("galgacolo-settings").style.display = "none";
  //show game
  document.getElementById("galgacolo-container").style.display = "block";
  console.log("starting ze game", questions);
};
