const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Player = require("./models/player");
const Team = require("./models/team");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// API Routes
app.get("/players", async (req, res) => {
  try {
    console.log("Getting Players");
    const players = await Player.find();
    console.log(players);
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/teams", async (req, res) => {
  try {
    console.log("Getting Teams");
    const teams = await Team.find();
    console.log(teams);
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/teams/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the team by its ID
    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res
      .status(200)
      .json({ message: "Team deleted successfully", team: deletedTeam });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team", error });
  }
});

app.post("/add-team", async (req, res) => {
  const { name, conference, division, ppg, w, l } = req.body;

  try {
    const newTeam = new Team({ name, conference, division, ppg, w, l });
    await newTeam.save();
    res
      .status(201)
      .json({ message: "Player added successfully!", player: newPlayer });
  } catch (error) {
    res.status(500).json({ message: "Error adding team", error });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
