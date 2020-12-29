const express = require("express");
const router = express.Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Style = require("../models/Style");

router.get("/", async (req, res) => {
  try {
    const result = await Album.findAll({ include: [Artist, Style] });
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
  const { name, note, folder, artist, style } = req.body;
  try {
    const result = await Album.create(
      {
        name,
        note,
        folder,
        Artist: {
          name: artist,
        },
        Style: {
          name: style,
        },
      },
      {
        include: [Artist, Style],
      }
    );
    console.log(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, country, town } = req.body;
  try {
    await Album.update(
      {
        name,
        Location: {
          town,
          country,
        },
      },
      { where: { id } },
      { include: Location }
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
