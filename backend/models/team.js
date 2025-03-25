const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Team name
  conference: { type: String, required: true }, // Conference (East/West)
  division: { type: String, required: true }, // Division (e.g., Atlantic, Central)
  ppg: { type: Number, required: true },
  w: { type: Number, required: true }, // Wins
  l: { type: Number, required: true }, // Losses
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
