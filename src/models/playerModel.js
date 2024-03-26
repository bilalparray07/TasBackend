// models/playerModel.js
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  dob: { type: Date, required: true },
  runsScored: [{ type: String }],
  ballsFaced: [{ type: String }],
  wicketsTaken: [{ type: String }],
  lastFour: [{ type: String }],
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
