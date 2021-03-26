const express = require("express");
const Router = express.Router();
const Quantity = require("../models/Quantity");

Router.get("/", async (req, res) => {
  try {
    const result = await Quantity.findAll();
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await Quantity.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Quantity.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/", async (req, res) => {
  const { quantity } = req.body;
  try {
    const result = await Quantity.create({ quantity });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    await Quantity.update(
      {
        quantity,
      },
      { where: { id } }
    );
    res.status(200).json(`${quantity} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Quantity.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
