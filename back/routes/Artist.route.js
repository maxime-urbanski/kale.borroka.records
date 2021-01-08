const express = require("express");
const Router = express.Router();
const Artist = require("../models/Artist");
const City = require("../models/City");
const Country = require("../models/Country");
const Location = require("../models/Location");
const Song = require("../models/Song");

Router.get("/", async (req, res) => {
  try {
    const result = await Artist.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: City,
          attributes: ["city"],
        },
        {
          model: Country,
          attributes: ["country", "tag"],
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
    const result = await Artist.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/", async (req, res) => {
  const { name, CityId, CountryId } = req.body;
  try {
    const result = await Artist.create({
      name,
      CityId,
      CountryId,
    });
    console.log(req.body);
    console.log(req.statusCode);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, country, city } = req.body;
  try {
    await Artist.update(
      {
        name,
        Location: {
          city,
          country,
        },
      },

      { where: { id } }
    );
    res.status(200).json(`Artist ${id} is modified`);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
