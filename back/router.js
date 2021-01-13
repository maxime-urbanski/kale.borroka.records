const express = require("express");
const Router = express.Router();
const Artist = require("./routes/Artist.route");
const Article = require("./routes/Article.route");
const Format = require("./routes/Format.route");
const Label = require("./routes/Label.route");
const Price = require("./routes/Price.route");
const Song = require("./routes/Song.route");
const Style = require("./routes/Style.route");
const Album = require("./routes/Album.route");
const City = require("./routes/City.route");
const Country = require("./routes/Country.route");
const Quantity = require("./routes/Quantity.route");

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
Router.use('/quantity', Quantity)

module.exports = Router;
