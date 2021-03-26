const express = require("express");
const Artist = require("../models/Artist");
const router = express.Router();
const Song = require("../models/Song");

router.get("/", async (req, res) => {
  try {
    const result = await Song.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Artist,
          attributes: ["name"],
        },
      ],
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Song.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Song.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, ArtistId, track } = req.body;
  try {
    const result = await Song.create({ name, ArtistId, track });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, track } = req.body;
  try {
    await Song.update(
      {
        name,
        track,
      },
      { where: { id } }
    );
    res.status(200).json(`${name} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Song.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await Song.destroy({ where: {} });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
