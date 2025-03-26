const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  Rk: { type: Number, required: true }, // Rank
  Tm: { type: String, required: true }, // Team Name
  ACR: { type: String, required: true }, // Team Abbreviation
  G: { type: Number, required: true }, // Games Played
  MP: { type: Number, required: true }, // Minutes Played
  FG: { type: Number, required: true }, // Field Goals Made
  FGA: { type: Number, required: true }, // Field Goals Attempted
  "FG%": { type: Number, required: true }, // Field Goal Percentage
  "3P": { type: Number, required: true }, // Three-Pointers Made
  "3PA": { type: Number, required: true }, // Three-Pointers Attempted
  "3P%": { type: Number, required: true }, // Three-Point Percentage
  "2P": { type: Number, required: true }, // Two-Pointers Made
  "2PA": { type: Number, required: true }, // Two-Pointers Attempted
  "2P%": { type: Number, required: true }, // Two-Point Percentage
  FT: { type: Number, required: true }, // Free Throws Made
  FTA: { type: Number, required: true }, // Free Throws Attempted
  "FT%": { type: Number, required: true }, // Free Throw Percentage
  ORB: { type: Number, required: true }, // Offensive Rebounds
  DRB: { type: Number, required: true }, // Defensive Rebounds
  TRB: { type: Number, required: true }, // Total Rebounds
  AST: { type: Number, required: true }, // Assists
  STL: { type: Number, required: true }, // Steals
  BLK: { type: Number, required: true }, // Blocks
  TOV: { type: Number, required: true }, // Turnovers
  PF: { type: Number, required: true }, // Personal Fouls
  PTS: { type: Number, required: true }, // Total Points
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
