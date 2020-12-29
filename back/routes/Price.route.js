const express = require("express");
const RouterPrice = express.Router();
const Price = require("../models/Price");

RouterPrice.get("/", async (req, res) => {
  try {
    const result = await Price.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterPrice.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Price.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterPrice.post("/", async (req, res) => {
  const { price } = req.body;
  try {
    const result = await Price.create({ price });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterPrice.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    await Price.update(
      {
        price,
      },
      { where: { id } }
    );
    res.status(200).json(`${name} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterPrice.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Price.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterPrice;
