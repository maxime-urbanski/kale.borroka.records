const express = require("express");
const router = express.Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Song = require("../models/Song");
const Style = require("../models/Style");
const Tracklist = require("../models/Tracklist");

router.get("/", async (req, res) => {
  try {
    const result = await Album.findAll({
      attributes: ["id", "name", "note", "folder"],
      include: [
        {
          model: Artist,
          attributes: ["name"],
        },
        { model: Style, attributes: ["name"] },
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Album.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, note, folder, ArtistId, StyleId } = req.body;
  try {
    const result = await Album.create(
      {
        name,
        note,
        folder,
        ArtistId,
        StyleId
        
      },
    );
    console.log(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, country, city } = req.body;
  try {
    await Album.update(
      {
        name,
        Location: {
          city,
          country,
        },
      },
      { where: { id } }
    );
    res.status(200).json(`Artist ${id} is modified`);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Album.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
