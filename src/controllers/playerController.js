// controllers/playerController.js
const Player = require("../models/playerModel");

// Add a new player
exports.addPlayer = async (req, res) => {
  try {
    const { name, role, dob, runsScored, ballsFaced, wicketsTaken } = req.body;
    const player = new Player({
      name,
      role,
      dob,
      runsScored,
      wicketsTaken,
      ballsFaced,
    });
    await player.save();
    res.status(201).json({ message: "Player added successfully", player });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update player details
exports.updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, dob, runsScored, ballsFaced, wicketsTaken } = req.body;

    // Convert 'runsScored' and 'wicketsTaken' to arrays if they're not already
    // const runsScoredArray = runsScored.split(",");
    // const wicketsTakenArray = wickets.split(",");
    // const ballsFacedArray = ballsFaced.split(",");

    const player = await Player.findByIdAndUpdate(
      id,
      {
        name,
        role,
        dob,
        runsScored,
        ballsFaced,
        wicketsTaken,
      },
      { new: true }
    );
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json({ message: "Player updated successfully", player });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get player by ID
exports.getPlayerById = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(player);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
