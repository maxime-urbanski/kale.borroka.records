const express = require("express");
const RouterSong = express.Router();
const Song = require("../models/Song");

RouterSong.get("/", async (req, res) => {
  try {
    const result = await Song.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterSong.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Song.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterSong.post("/", async (req, res) => {
  const { name, onYoutube } = req.body;
  try {
    const result = await Song.create({ name, onYoutube });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterSong.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, onYoutube } = req.body;
  try {
    await Song.update(
      {
        name,
        onYoutube,
      },
      { where: { id } }
    );
    res.status(200).json(`${name} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterSong.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Song.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterSong;
