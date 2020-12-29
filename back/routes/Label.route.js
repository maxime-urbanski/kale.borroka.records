const express = require("express");
const router = express.Router();
const Label = require("../models/Label");

router.get("/", async (req, res) => {
  try {
    const result = await Label.findAll();
    res.status(200).json(result);
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

router.post("/", async (req, res) => {
  const { name, friend, logo } = req.body;
  try {
    const result = await Label.create({ name, friend, logo });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
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
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Label.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
