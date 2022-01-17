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
const auth = require("../middlewares/auth");
const { withoutLocation } = require('../attributes/artistAttributes');
const {getPagination, getPagingData} = require("./pagination/pagination");


router.get("/", async (req, res) => {
  const { page, perPage } = req.query;
  const { limit, offset } = getPagination(page, perPage);
  try {
    const result = await Album.findAndCountAll({
      attributes: ["id", "name", "fullName","note", "folder", "kbrProd", "kbrNum","releaseDate"],
      include: [
        withoutLocation,
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
      limit,
      offset,
    });

    // TODO resolve findAndCountAll
    result.count = await Album.count();
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await result.count,
    });
    res.status(200).json(getPagingData(result,page, limit));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Album.findByPk(id, {
      attributes: ["id", "name", "fullName", "note", "folder", "kbrProd","kbrNum", "releaseDate"],
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
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", auth("ADMIN"), async (req, res) => {
  const {
    name,
    note,
    folder,
    ArtistId,
    StyleId,
    tracklist,
    labels,
    videos,
    kbrProd,
    kbrNum,
    releaseDate
  } = req.body;
  try {
    const findArtist = await Artist.findByPk(ArtistId);
    const ArtistName = findArtist.dataValues.name;
    const fullName = `${ArtistName} - ${name}`;

    const postAlbum = await Album.create({
      name,
      fullName,
      note,
      folder,
      ArtistId,
      StyleId,
      kbrProd,
      kbrNum,
      releaseDate
    });
    await addTroughTableTracklist(tracklist, Song, postAlbum);
    await postLabelInThroughTable(labels, Label, postAlbum);
    await postVideoInThroughTable(videos, Video, postAlbum);
    res.status(200).json(postAlbum);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  const { name, note, folder, ArtistId, StyleId, kbrProd, kbrNum, releaseDate } = req.body;
  try {

    const findArtist = await Artist.findByPk(ArtistId);
    const artistName = findArtist.dataValues.name;
    const fullName = `${artistName} - ${name}`;

    const putAlbum = await Album.update(
      {
        name,
        fullName,
        note,
        folder,
        ArtistId,
        StyleId,
        kbrProd,
        kbrNum,
        releaseDate,
      },
      {
        where: { id },
      }
    );
    res.status(200).json({putAlbum});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Album.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/", auth("ADMIN"), async (req, res) => {
  try {
    const deleteAllAlbums = await Album.destroy({ where: {} });
    res.status(200).json(`${deleteAllAlbums} albums are dropped`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
