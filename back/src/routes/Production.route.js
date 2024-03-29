const express = require("express");
const Router = express.Router();const Article = require("../models/Article");
const Artist = require("../models/Artist");
const Album = require("../models/Album");
const City = require('../models/City');
const Country = require('../models/Country');
const Format = require("../models/Format");
const Label = require("../models/Label");
const Song = require("../models/Song");
const Style = require("../models/Style");
const {getPagination, getPagingData} = require("./pagination/pagination");

Router.get('/', async (req, res) => {
  const { page, perPage } = req.query;
  const { limit, offset } = getPagination(page, perPage);
  try {
    const ourProd = await Article.findAndCountAll({
      attributes: ["id","name", "slug","price","quantity"],
      include: [
        {
          model: Album,
          attributes: ["name","folder","kbrProd", "kbrNum","fullName"],
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
            {
              model: Label,
              attributes: ['name']
            }
          ],
          where: {
            kbrProd: true
          },
        },
        {
          model: Format,
          attributes: ['name']
        },
      ],
      order: [
        [ Album, "kbrNum", "ASC"],
      ]
    })
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await ourProd.count,
    });
    res.status(200).json(getPagingData(ourProd,page, limit));
  } catch(error) {
    res.status(400).json(error)
  }
})

module.exports = Router;
