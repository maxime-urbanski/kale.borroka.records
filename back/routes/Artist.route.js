const express = require("express");
const RouterArtists = express.Router();
const Artist = require("../models/Artist");
const Location = require("../models/Location");

RouterArtists.get("/", async (req, res) => {
  try {
    const result = await Artist.findAll({ include: Location });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.post("/", async (req, res) => {
  const { name, country, town } = req.body;
  try {
    const result = await Artist.create(
      {
        name,
        Location: {
          country,
          town,
        },
      },
      {
        include: Location,
      }
    );
    console.log(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, country, town } = req.body;
  try {
    await Artist.update(
      {
        name,
        Location: {
          town,
          country,
        },
      },
      { where: { id } },
      { include: Location }
    );
    res.status(200).json(`Artist ${id} is modified`);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterArtists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterArtists;
