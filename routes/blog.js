const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/online-shopping-addiction", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/online-shopping-addiction.html"));
});

router.get("/video-game-addiction", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/video-game-addiction.html"));
});

router.get("/supplementary-addiction", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/supplementary-addiction.html"));
});

router.get("/social-media-addiction", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/social-media-addiction.html"));
});

module.exports = router;
