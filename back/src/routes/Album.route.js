const express = require("express");
const router = express.Router();
const Album = require("../models/Album");
const Artist = require("../models/Artist");
const Song = require("../models/Song");
const Style = require("../models/Style");
const Label = require("../models/Label");
const Video = require("../models/Video");
const addTroughTableTracklist = require("./Trough/tracklist");
const postLabelInThroughTable = require("./Trough/labels");
const postVideoInThroughTable = require("./Trough/video");

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
          through: { attributes: [] },
        },
        { model: Label, attributes: ["name"], through: { attributes: [] } },
        {
          model: Video,
          attributes: ["youtube_url"],
          through: { attributes: [] },
        },
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
      order: [[Label, "name", "ASC"]],
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
  const {
    name,
    note,
    folder,
    ArtistId,
    StyleId,
    tracklist,
    labels,
    videos,
  } = req.body;
  try {
    const postAlbum = await Album.create({
      name,
      note,
      folder,
      ArtistId,
      StyleId,
    });
    await addTroughTableTracklist(tracklist, Song, postAlbum);
    await postLabelInThroughTable(labels, Label, postAlbum);
    await postVideoInThroughTable(videos, Video, postAlbum);
    res.status(200).json(postAlbum);
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
