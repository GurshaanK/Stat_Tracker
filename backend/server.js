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
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/teams/topWins", async (req, res) => {
  try {
    console.log("Get Top teams");
    const topTeams = await Team.aggregate([
      {
        $project: {
          _id: 0,
          Tm: "$Tm",
          W: "$W",
        },
      },
      { $sort: { W: -1 } },
      { $limit: 5 },
    ]);

    res.json(topTeams);
  } catch (err) {
    console.error("Failed to fetch top 5 teams by wins:", err);
    res.status(500).json({ message: "Server error" });
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
  try {
    // Validate required fields
    const requiredFields = [
      "Tm",
      "ACR",
      "G",
      "FG",
      "FGA",
      "3P",
      "3PA",
      "2P",
      "2PA",
      "FT",
      "FTA",
      "PTS",
      "W",
      "L",
    ];
    const missingFields = requiredFields.filter(
      (field) => req.body[field] === undefined
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Create and save the new team document
    const newTeam = new Team(req.body);
    await newTeam.save();

    res
      .status(201)
      .json({ message: "Team added successfully!", team: newTeam });
  } catch (error) {
    console.error("Error saving team:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.put("/edit-team/:id", async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.json({ message: "Team updated successfully", team: updatedTeam });
  } catch (error) {
    console.error("Error updating team:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
