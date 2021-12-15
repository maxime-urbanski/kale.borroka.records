const express = require('express');
const Router = express.Router();const Album = require("../models/Album");
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
const { getPagination, getPagingData } = require('./pagination/pagination')
const { articleAttributes } = require('../attributes/attributes')

Router.get('/', async (req, res) => {
  try {
    const get = await Format.findAll();
    res.status(200).json(get)
  } catch (e) {
    res.status(400).json(e)
  }
})

Router.get("/:support", async (req, res) => {
  const { support } = req.params;
  const { page, perPage } = req.query
  const {limit, offset } = getPagination(page, perPage)
  try {
    const findSupportId = await Format.findOne({where: {
        name: support
      }
    })

    const articleByFormat = await Article.findAndCountAll({where: {
      FormatId: findSupportId.dataValues.id
      },
      ...articleAttributes,
      limit,
      offset
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
    });
    res.status(200).json(getPagingData(articleByFormat,page, limit));
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get('/:support/:slug', async (req,res) => {
  const { support, slug } = req.params;
  console.log("slug ===>", slug)
  try {
    const findSupportId = await Format.findOne({where: {
        name: support
      }
    })

    const currentArticle = await Article.findOne({where: {
        FormatId: findSupportId.dataValues.id,
        slug,
      },
      attributes: ["id","slug"],
      include: [
        {
          model: Album,
          attributes: ["name","folder","kbrProd", "kbrNum"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
              include: [
                {
                  model: City,
                  attributes: ['city']
                },
                {
                  model: Country,
                  attributes: ['country']
                }
              ]
            },
            {
              model: Song,
              attributes: ["name", "track"],
              through: { attributes: [] },
            },
            {
              model: Style,
              attributes: ['name']
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
          attributes: ['quantity']
        }
      ],
      order: [
        [Album, Artist, "name", "ASC"],
        [Album, "name", "ASC"],
        [Album, Song, "track", "ASC"],
      ],
    })

    res.status(200).json(currentArticle)
  }  catch (e) {
    res.status(400).json(e)
  }
})

module.exports = Router
