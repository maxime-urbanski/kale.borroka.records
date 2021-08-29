const express = require("express");
const { getPagination, getPagingData } = require('./pagination/pagination')
const { articleAttributes } = require('../attributes/attributes')
const auth = require("../middlewares/auth");
const Album = require("../models/Album");
const Article = require("../models/Article");
const Artist = require("../models/Artist");
const City = require('../models/City');
const Country = require('../models/Country');
const Format = require("../models/Format");
const Label = require("../models/Label");
const Price = require("../models/Price");
const Quantity = require("../models/Quantity");
const Song = require("../models/Song");
const Style = require("../models/Style");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const { page, perPage } = req.query
  const {limit, offset } = getPagination(page, perPage)
  try {
    const result = await Article.findAndCountAll({
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name","folder","kbrProd", "kbrNum"],
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
      ],
      order: [
        [Album, Artist, "name", "ASC"],
        [Album, "name", "ASC"],
      ],
      limit,
      offset,
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": result.count,
    });
    res.status(200).json(getPagingData(result,page, limit));
  } catch (err) {
    res.status(400).json(err);
  }
});

/*Router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const findArticle = await Article.findByPk(id,{
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name","folder","kbrProd", "kbrNum"],
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
      ],
    });
    res.status(200).json(findArticle)
  } catch {
    res.status(401).json('Articles non trouvé')
  }
});*/

Router.get("/:support", async (req, res) => {
  const { support } = req.params;
  const { page, perPage } = req.query
  const {limit, offset } = getPagination(page, perPage)

  try {
    console.log("je suis pas ARTICLE SUPPORT");
    const findSupportId = await Format.findOne({where: {
      name: support
      }
    })
    const result = await Article.findAndCountAll({ ...articleAttributes,
      limit,
      offset,
      where: {
        FormatId : findSupportId.id
      }
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": result.count,
    });
    console.log(result);
    res.status(200).json(getPagingData(result, page, limit));
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:support/:id", async (req, res) => {
  const { support, id } = req.params;
  try {
    const findSupportId = await Format.findOne({where: {
        name: support
      }
    });

    const result = await Article.findOne({where: {
        FormatId : findSupportId.id,
        id
      },
      attributes: ["id"],
      include: [
        {
          model: Album,
          attributes: ["name", "folder", "note", "kbrProd","kbrNum", "releaseDate"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
              include: [
                {
                  model: City,
                  attributes: ["city"],
                },
                {
                  model: Country,
                  attributes: ["country", "tag"],
                },
              ]
            },
            {
              model: Song,
              attributes: ["name", 'track'],
              through: { attributes: [] },
            },
            {
              model: Label,
              attributes: ["name"],
              through: { attributes: [] },
            },
            {
              model: Style,
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
      order: [
        [Album, Artist, "name", "ASC"],
        [Album, "name", "ASC"],
        [Album, Song, "track", "ASC"],
      ],
      limit: 10,
    });
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
