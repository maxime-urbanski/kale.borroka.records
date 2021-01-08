const express = require("express");
const Router = express.Router();
const artist = require("./routes/Artist.route");
const format = require("./routes/Format.route");
const label = require("./routes/Label.route");
const location = require("./routes/Location.route");
const price = require("./routes/Price.route");
const songs = require("./routes/Song.route");
const style = require("./routes/Style.route");
const Album = require("./routes/Album.route");

Router.use("/label", label);
Router.use("/location", location);
Router.use("/artist", artist);
Router.use("/style", style);
Router.use("/format", format);
Router.use("/price", price);
Router.use("/song", songs);
Router.use("/album", Album);

module.exports = Router;
