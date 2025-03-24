const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Player = require("./models/player");
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
