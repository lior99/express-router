// fake db - plain json

const players = {
  _players: [
    { id: 1, name: 'Christiano Ronaldo' },
    { id: 2, name: 'Leo Messi' },
    { id: 3, name: 'Zlatan Ibrahimovich' },
    { id: 4, name: 'Neymar' }
  ],

  getPlayers() {
    return this._players;
  },

  addPlayer({ playerName }) {
    const id = this._players.length + 1;
    const player = { id, name: playerName };
    this._players.push(player);
    return id;
  }
};

module.exports = players;
