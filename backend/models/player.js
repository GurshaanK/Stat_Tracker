const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams", // This links the player to the team document (if necessary)
    required: true,
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
