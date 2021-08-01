const express = require("express");
const Router = express.Router();
const Article = require("../models/Article");
const { articleAttributes } = require('../attributes/attributes')

Router.get('/', async (req, res) => {
  try {
    const ourProd = await Article.findAll(
      articleAttributes,
      {
        where: {
          kbrProd: true
        }
      })
    res.status(200).json(ourProd)
  } catch(error) {
    res.status(400).json('Problème')
  }
})

module.exports = Router
