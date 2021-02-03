const express = require("express");
const Song = require("../models/Song");
const Router = express.Router();
const Tracklist = require("../models/Tracklist");

Router.post("/", async (req, res) => {
  try {
    const { tracklist, AlbumId, track } = req.body;
    const result = await Tracklist.create({ AlbumId, track });
    console.log("je suis la");
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
