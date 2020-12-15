const express = require("express");
const RouterLocation = express.Router();
const Location = require("../models/Location");

RouterLocation.get("/", async (req, res) => {
  try {
    const result = await Location.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterLocation.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Location.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterLocation.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await Location.create({ name });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterLocation.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await Location.update(
      {
        name,
      },
      { where: { id } }
    );
    res.status(200).json(`${name} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterLocation.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Location.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterLocation;
