// routes/playerRoutes.js
const express = require("express");
const router = express.Router();
const playerController = require("../src/controllers/playerController");

// Route to add a new player
router.post("/players", playerController.addPlayer);

// Route to update player details
router.put("/players/:id", playerController.updatePlayer);

// Route to get player by ID
router.get("/players/:id", playerController.getPlayerById);

// Route to get all players
router.get("/players", playerController.getAllPlayers);
router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.send("Hello From Backend of TAS");
});

module.exports = router;
