const express = require("express");
const router = express.Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Song = require("../models/Song");
const Style = require("../models/Style");
const Label = require("../models/Label");

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
        {
          model: Song,
          attributes: ["name", "track"],
          through: { attributes: [], order: ["track", "ASC"] },
        },
        { model: Label, attributes: ["name"], through: { attributes: [] } },
      ],
      order: [
        [Song, "track", "ASC"],
        [Label, "name", "ASC"],
      ],
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Album.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Album.findByPk(id, {
      attributes: ["id", "name", "note", "folder"],
      include: [
        {
          model: Artist,
          attributes: ["name", "id"],
        },
        { model: Style, attributes: ["name"] },
        {
          model: Song,
          attributes: ["name", "track"],
          through: { attributes: [], order: ["track", "ASC"] },
        },
        { model: Label, attributes: ["name"], through: { attributes: [] } },
      ],
      order: [
        [Song, "track", "ASC"],
        [Label, "name", "ASC"],
      ],
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Album.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, note, folder, ArtistId, StyleId, tracklist, labels } = req.body;
  try {
    const album = await Album.create({
      name,
      note,
      folder,
      ArtistId,
      StyleId,
    });

    for (let i = 0; i < tracklist.length; i++) {
      tracklist[i].ArtistId = ArtistId;
      console.log(tracklist[i]);
      const postSong = await Song.create({
        name: tracklist[i].name,
        track: tracklist[i].track,
        ArtistId,
      });
      await album.addSong(postSong);
    }

    const checkLabelInDb = [];
    for (let i = 0; i < labels.length; i++) {
      const searchLabel = await Label.findOne({
        where: { name: labels[i].name },
      });
      if (searchLabel !== null && searchLabel.isNewRecord === false) {
        await album.addLabel(searchLabel);
      } else {
        checkLabelInDb.push(labels[i]);
      }
    }
    if (checkLabelInDb.length > 0) {
      const bulkLabels = await Label.bulkCreate(checkLabelInDb);
      await album.addLabel(bulkLabels);
    }
    res.status(200).json(album);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, note, folder, ArtistId, StyleId } = req.body;
  try {
    await Album.update(
      {
        name,
        note,
        folder,
        ArtistId,
        StyleId,
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

router.delete("/", async (req, res) => {
  try {
    const result = await Album.destroy({ where: {} });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
