const html = {
  removePlayerBtn: {
    get: (id) => {
      return `<button class="circle-btn player-remove-btn" onclick="removePlayer('${id}')">x</button>`;
    },
  },
  listItemPlayer: {
    get: (playerName, id) => {
      return (
        '<li id="li-' +
        playerName +
        '" class="content-container ' +
        (id % 2 ? "li-odd" : "li-even") +
        '"><span class="content-li">' +
        playerName +
        "</span>" +
        html.removePlayerBtn.get(playerName) +
        "</li>"
      );
    },
  },
};
let playerList = [];
