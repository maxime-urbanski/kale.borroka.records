const express = require("express");
const RouterFormat = express.Router();
const Format = require("../models/Format");

RouterFormat.get("/", async (req, res) => {
  try {
    const result = await Format.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterFormat.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Format.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterFormat.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await Format.create({ name });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterFormat.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await Format.update(
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

RouterFormat.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Format.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterFormat;