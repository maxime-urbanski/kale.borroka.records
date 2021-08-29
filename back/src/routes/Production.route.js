const express = require("express");
const Router = express.Router();
const Article = require("../models/Article");
const Album = require("../models/Album");
const { articleAttributes } = require('../attributes/attributes')
const {getPagination, getPagingData} = require("./pagination/pagination");

Router.get('/', async (req, res) => {
  const { page, perPage } = req.query;
  const { limit, offset } = getPagination(page, perPage)
  try {
    const ourProd = await Article.findAndCountAll(
      articleAttributes,
      limit,
      offset)
    console.log(ourProd)
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await ourProd.count,
    });
    res.status(200).json(getPagingData(ourProd,page, limit));
  } catch(error) {
    res.status(400).json('Problème')
  }
})

module.exports = Router
