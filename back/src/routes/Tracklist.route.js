const express = require("express");
const Router = express.Router();
const Tracklist = require("../models/Tracklist");
const auth = require("../middlewares/auth");

Router.get("/", async (req, res) => {
  try {
    const getTracklist = await Tracklist.findAll({ limit: 10 });
    res.status(200).json(getTracklist);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/album/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getOneTracklist = await Tracklist.findAll({
      where: { AlbumId: id },
    });
    res.status(200).json(getOneTracklist);
  } catch (error) {
    res.status(400).json(error);
  }
});

Router.post("/", auth("ADMIN"), async (req, res) => {
  const { tracklist, AlbumId, SongId } = req.body;
  try {
    if ((tracklist.length = 1)) {
      const postTracklist = await Tracklist.create({
        AlbumId,
        SongId,
      });
      res.status(200).json(postTracklist);
    } else {
      const postTracklist = await Tracklist.bulkCreate(tracklist);
      res.status(200).json(postTracklist);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

Router.put("/album/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  try {
    const putTracklistAlbum = await Tracklist.update(
      { AlbumId },
      {
        where: { AlbumId: id },
      }
    );
    res.status(200).json(putTracklistAlbum);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = Router;
