const express = require("express");
const RouterStyle = express.Router();
const Style = require("../models/Style");

RouterStyle.get("/", async (req, res) => {
  try {
    const result = await Style.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterStyle.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Style.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterStyle.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await Style.create({ name });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterStyle.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await Style.update(
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

RouterStyle.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Style.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterStyle;