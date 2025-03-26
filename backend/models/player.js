const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    Rk: { type: Number, required: true }, // Id
    Player: { type: String, required: true }, //Player Name
    Pos: { type: String, required: true }, //Position
    Age: { type: Number, required: true }, //Age
    Tm: { type: String, required: true }, //Team (Abbreviation)
    G: { type: Number, required: true }, //Games Played
    GS: { type: Number, required: true }, //Games Started
    MP: { type: Number, required: true }, //Minutes Per Game
    FG: { type: Number, required: true }, //Field Goals Made
    FGA: { type: Number, required: true }, //Field Goals Attempted
    "FG%": { type: Number, required: true }, //Field Goal Percentage
    "3P": { type: Number, required: true }, //Three-Point Field Goals Made
    "3PA": { type: Number, required: true }, //Three-Point Field Goals Attempted
    "3P%": { type: Number, required: true }, //Three-Point Percentage
    "2P": { type: Number, required: true }, //Two-Point Field Goals Made
    "2PA": { type: Number, required: true }, //Two-Point Field Goals Attempted
    "2P%": { type: Number, required: true }, //Two-Point Percentage
    "eFG%": { type: Number, required: true }, //Effective Field Goal Percentage
    FT: { type: Number, required: true }, //Free Throws Made
    FTA: { type: Number, required: true }, //Free Throws Attempted
    "FT%": { type: Number, required: true }, //Free Throw Percentage
    ORB: { type: Number, required: true }, //Offensive Rebounds
    DRB: { type: Number, required: true }, //Defensive Rebounds
    TRB: { type: Number, required: true }, //Total Rebounds
    AST: { type: Number, required: true }, //Assists
    STL: { type: Number, required: true }, //Steals
    BLK: { type: Number, required: true }, //Blocks
    TOV: { type: Number, required: true }, //Turnovers
    PF: { type: Number, required: true }, //Personal Fouls
    PTS: { type: Number, required: true }, //Points Per Game
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
