const express = require("express");
const Router = express.Router();
const artist = require("./routes/Artist.route");
const format = require("./routes/Format.route");
const label = require("./routes/Label.route");
const price = require("./routes/Price.route");
const songs = require("./routes/Song.route");
const style = require("./routes/Style.route");
const Album = require("./routes/Album.route");
const City = require("./routes/City.route");
const Country = require("./routes/Country.route");

Router.use("/label", label);
Router.use("/artist", artist);
Router.use("/style", style);
Router.use("/format", format);
Router.use("/price", price);
Router.use("/song", songs);
Router.use("/album", Album);
Router.use("/city", City);
Router.use("/country", Country);

module.exports = Router;
