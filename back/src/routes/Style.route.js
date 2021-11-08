const express = require("express");
const RouterStyle = express.Router();
const Style = require("../models/Style");
const auth = require("../middlewares/auth");
const {getPagination, getPagingData} = require("./pagination/pagination");

RouterStyle.get("/", async (req, res) => {
  const { page, perPage } = req.query;
  const { limit, offset } = getPagination(page, perPage)
  try {
    const result = await Style.findAndCountAll({ limit, offset });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await result.count,
    });
    res.status(200).json(getPagingData(result, page, limit));
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

RouterStyle.post("/", auth("ADMIN"), async (req, res) => {
  const { name } = req.body;
  try {
    const result = await Style.create({ name });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

RouterStyle.put("/:id", auth("ADMIN"), async (req, res) => {
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

RouterStyle.delete("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Style.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = RouterStyle;
