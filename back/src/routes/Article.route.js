const express = require("express");
const { getPagination, getPagingData } = require('./pagination/pagination');
const auth = require("../middlewares/auth");
const Album = require("../models/Album");
const Article = require("../models/Article");
const Artist = require("../models/Artist");
const Format = require("../models/Format");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const { page, perPage } = req.query;
  const {limit, offset } = getPagination(page, perPage);
  try {
    const result = await Article.findAndCountAll({
      attributes: ["id","name", "slug","price","quantity"],
      include: [
        {
          model: Album,
          include: [
            {
              model: Artist,
              attributes: ["name"],
            },
          ],
          attributes: ["name","fullName","folder","kbrProd", "kbrNum"]
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

Router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const findArticle = await Article.findByPk(id,{
      attributes: ["id","name", "slug","price","quantity"],
      include: [
        {
          model: Album,
          attributes: ["name","fullName","folder","kbrProd", "kbrNum"],
          include: [
            {
              model: Artist,
              attributes: ["name"],
            },
          ]
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
});

Router.post("/", auth("ADMIN"), async (req, res) => {
  const { AlbumId, FormatId, name, price, quantity } = req.body;

  const goodSlugFormat = (text) => {
    return text.replaceAll(' ', '_').toLowerCase();
  };
  try {
    const result = await Article.create({
      name,
      slug: goodSlugFormat(name),
      price,
      quantity,
      AlbumId,
      FormatId,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

Router.put("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  const { name, slug, price, quantity, AlbumId, FormatId } = req.body;
  console.log(FormatId)
  try {
    const result = await Article.update(
      {
        name,
        slug,
        price,
        quantity,
        AlbumId,
        FormatId
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
