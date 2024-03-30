// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./src/routes"); // Corrected import path
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  "mongodb+srv://sorieasal:sorieasal@nodejs.3k8ji4v.mongodb.net/";

mongoose.connect(MONGODB_URI);
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
// Serve static files from the public directory
app.use(express.static("src/public"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
