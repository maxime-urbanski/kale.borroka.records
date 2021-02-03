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
        { model: Song, attributes: ["name"] },
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
  const { name, note, folder, ArtistId, StyleId, tracklist, track } = req.body;
  try {
    const album = await Album.create({
      name,
      note,
      folder,
      ArtistId,
      StyleId,
    });

    const bulkTrack = await Song.bulkCreate(tracklist);
    await album.addSong(bulkTrack);
    res.status(200).json(album);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { songId, track } = req.body;
  try {
    const test = [req.body];
    const addSong = await Album.bulkCreate(test, {
      where: { id },
    });
    await res.status(200).json(addSong);
  } catch (err) {
    console.log(req.body);
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
  } catch (err) {
    res.status(400).json({ message: "here", err });
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
