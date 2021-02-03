const express = require("express");
const Country = require("../models/Country");
const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const result = await Country.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Country.findByPk({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/", async (req, res) => {
  const { country, tag } = req.body;
  try {
    const result = await Country.create({ country, tag });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { country, tag } = req.body;
  try {
    const result = await Country.update({ country, tag }, { where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Country.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
