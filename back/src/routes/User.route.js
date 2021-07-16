const express = require("express");
const Router = express.Router();
const User = require("../models/User");
const auth = require("../middlewares/auth");

Router.get("/",  async (req, res) => {
  try {
    const result = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
      limit: 10,
    });
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "X-Total-Count",
      "X-Total-Count": await User.count(),
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:id", auth(["ADMIN", "USER"]), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/", async (req, res) => {
  const { username, password, email, usertype } = req.body;
  try {
    const result = await User.create({
      username,
      password,
      email,
      usertype,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.put("/:id", auth(["ADMIN", "USER"]), async (req, res) => {
  const { id } = req.params;
  const { username, password, email, usertype } = req.body;
  try {
    await User.update(
      {
        username,
        password,
        email,
        usertype,
      },

      { where: { id } }
    );
    res.status(200).json(`Artist ${id} is modified`);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.delete("/:id", auth(["ADMIN", "USER"]), async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Artist.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Router;
