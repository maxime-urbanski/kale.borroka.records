const express = require("express");
const Router = express.Router();
const Artist = require("./Artist.route");
const Article = require("./Article.route");
const Format = require("./Format.route");
const Label = require("./Label.route");
const Price = require("./Price.route");
const Song = require("./Song.route");
const Style = require("./Style.route");
const Album = require("./Album.route");
const City = require("./City.route");
const Country = require("./Country.route");
const Quantity = require("./Quantity.route");
const User = require('./User.route');

Router.use("/label", Label);
Router.use("/artist", Artist);
Router.use("/article", Article);
Router.use("/style", Style);
Router.use("/format", Format);
Router.use("/price", Price);
Router.use("/song", Song);
Router.use("/album", Album);
Router.use("/city", City);
Router.use("/country", Country);
Router.use("/quantity", Quantity);
Router.use("/user", User);

module.exports = Router;
