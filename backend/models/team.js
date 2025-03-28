const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  Rk: { type: Number, required: false }, // Rank
  Tm: { type: String, required: true }, // Team Name
  ACR: { type: String, required: true }, // Team Abbreviation
  G: { type: Number, required: true }, // Games Played
  MP: { type: Number, required: false }, // Minutes Played
  FG: { type: Number, required: true }, // Field Goals Made
  FGA: { type: Number, required: true }, // Field Goals Attempted
  "FG%": { type: Number, required: false }, // Field Goal Percentage
  "3P": { type: Number, required: false }, // Three-Pointers Made
  "3PA": { type: Number, required: false }, // Three-Pointers Attempted
  "3P%": { type: Number, required: false }, // Three-Point Percentage
  "2P": { type: Number, required: false }, // Two-Pointers Made
  "2PA": { type: Number, required: false }, // Two-Pointers Attempted
  "2P%": { type: Number, required: false }, // Two-Point Percentage
  FT: { type: Number, required: false }, // Free Throws Made
  FTA: { type: Number, required: false }, // Free Throws Attempted
  "FT%": { type: Number, required: false }, // Free Throw Percentage
  ORB: { type: Number, required: false }, // Offensive Rebounds
  DRB: { type: Number, required: false }, // Defensive Rebounds
  TRB: { type: Number, required: false }, // Total Rebounds
  AST: { type: Number, required: false }, // Assists
  STL: { type: Number, required: false }, // Steals
  BLK: { type: Number, required: false }, // Blocks
  TOV: { type: Number, required: false }, // Turnovers
  PF: { type: Number, required: false }, // Personal Fouls
  PTS: { type: Number, required: true }, // Total Points
  W: { type: Number, required: true }, // Wins
  L: { type: Number, required: true }, // Losses
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
