const express = require("express");
const Router = express.Router();
const Article = require("../models/Article");
const { articleAttributes } = require('./attributes/attributes')

Router.get('/', async (req, res) => {
  try {
    const kbrProd = await Article.findAll(articleAttributes)
    res.status(200).json(kbrProd)
  } catch(error) {
    res.status(400).json('Problème')
  }
})

module.exports = Router
