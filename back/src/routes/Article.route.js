const express = require("express");
const Album = require("../models/Album");
const Router = express.Router();
const Article = require("../models/Article");
const Artist = require("../models/Artist");
const Price = require("../models/Price");
const Format = require("../models/Format");
const Quantity = require("../models/Quantity");

Router.get("/", async (req, res) => {
  try {
    const result = await Article.findAll({
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name", "folder"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
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

Router.get("/:format", async (req, res) => {
  const { format } = req.params;
  if (format === (await Format.findByPk()))
    try {
      const result = await Article.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
});

Router.post("/", async (req, res) => {
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

Router.put("/:id", async (req, res) => {
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

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Article.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
