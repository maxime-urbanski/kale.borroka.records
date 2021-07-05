const express = require("express");
const Album = require("../models/Album");
const Router = express.Router();
const Article = require("../models/Article");
const Artist = require("../models/Artist");
const Price = require("../models/Price");
const Format = require("../models/Format");
const Quantity = require("../models/Quantity");
const Song = require("../models/Song");
const auth = require("../middlewares/auth");

Router.get("/", async (req, res) => {
  try {
    const result = await Article.findAll({
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name", "folder", "note","kbrProd"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
            },
          ]
        },
        {
          model: Price,
          attributes: ["price"],
        },
        {
          model: Format,
          attributes: ["name"],
        },
        {
          model: Quantity,
          attributes: ["quantity"],
        },
      ],
      limit: 10,
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Article.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:support", async (req, res) => {
  const { support } = req.params;
  try {
    const findSupportId = await Format.findOne({where: {
      name: support
      }
    });

    const result = await Article.findAll({where: {
        FormatId : findSupportId.id
      },
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name", "folder", "note","kbrProd"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
            },
            {
              model: Song,
              attributes: ["name", 'track'],
              through: { attributes: [] },

            },
          ],
        },
        {
          model: Price,
          attributes: ["price"],
        },
        {
          model: Format,
          attributes: ["name"],
        },
        {
          model: Quantity,
          attributes: ["quantity"],
        },
      ],
      order: [
        [Album, Artist, "name", "ASC"],
        [Album, "name", "ASC"],
        [Album, Song, "track", "ASC"],
      ],
      limit: 10,

    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Article.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Article.findByPk(id);

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/", auth("ADMIN"), async (req, res) => {
  const { AlbumId, PriceId, QuantityId, FormatId } = req.body;
  try {
    const result = await Article.create({
      AlbumId,
      PriceId,
      QuantityId,
      FormatId,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  const { AlbumId, PriceId, QuantityId, FormatId } = req.body;
  try {
    const result = await Article.update(
      {
        AlbumId,
        PriceId,
        QuantityId,
        FormatId,
      },
      { where: { id } }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Article.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/", auth("ADMIN"), async (req, res) => {
  try {
    const result = await Article.destroy({ where: {} });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
