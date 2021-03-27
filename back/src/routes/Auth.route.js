const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secret = process.env.JWT_SECRET;

Router.post("/signup", async (req, res) => {
  const { username, password, email, usertype } = req.body;
  try {
    const user = await User.create({
      username,
      password,
      email,
      usertype,
    });
    delete user.dataValues.password;
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    const goodPassword = user.validPassword(password);
    if (user && goodPassword) {
      const { email, usertype } = user.dataValues;
      const payload = {
        username,
        email,
        usertype,
      };

      const token = jwt.sign(payload, secret, {
        expiresIn: "3h",
      });

      delete user.dataValues.password;
      res.status(200).json({ user, token });
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = Router;
