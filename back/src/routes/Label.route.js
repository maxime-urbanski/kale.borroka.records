const express = require("express");
const router = express.Router();
const Label = require("../models/Label");
const auth = require("../middlewares/auth");
const {getPagination, getPagingData} = require("./pagination/pagination");

router.get("/", async (req, res) => {
  const { page, perPage } = req.query;
  const { limit, offset } = getPagination(page, perPage)
  try {
    const result = await Label.findAndCountAll({
      limit,
      offset
    });
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Label.findByPk(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", auth("ADMIN"), async (req, res) => {
  const { name, friend, logo } = req.body;
  try {
    const result = await Label.create({ name, friend, logo });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  const { name, friend, logo } = req.body;
  try {
    await Label.update(
      {
        name,
        logo,
        friend,
      },
      { where: { id } }
    );
    res.status(200).json(`LAbel ${name} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", auth("ADMIN"), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Label.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/", auth("ADMIN"), async (req, res) => {
  try {
    const result = await Label.destroy({ where: {} });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
