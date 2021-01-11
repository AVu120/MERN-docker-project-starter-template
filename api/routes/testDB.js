const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let databaseConnectionStatus = "Waiting for Database response...";

router.get("/", (req, res, next) => {
  res.send(databaseConnectionStatus);
});

// Connecting to MongoDB
mongoose.connect("mongodb://mongodb:27017/test");

// If there is a connection error send an error message
mongoose.connection.on("error", (error) => {
  console.log("Database connection error:", error);
  databaseConnectionStatus = "Error connecting to Database";
});

// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  databaseConnectionStatus = "Connected to Database";
});

module.exports = router;
