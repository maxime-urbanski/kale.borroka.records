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
const User = require("./routes/User.route");
const Auth = require("./routes/Auth.route");
const Tracklist = require('./routes/Tracklist.route')
const Production = require('./routes/Production.route')

Router.use("/artists", Artist);
Router.use("/labels", Label);
Router.use("/articles", Article);
Router.use("/styles", Style);
Router.use("/formats", Format);
Router.use("/prices", Price);
Router.use("/songs", Song);
Router.use("/albums", Album);
Router.use("/cities",City);
Router.use("/countries", Country);
Router.use("/quantities",Quantity);
Router.use("/users",User);
Router.use("/auth", Auth);
Router.use('/tracklists',Tracklist);
Router.use('/production', Production )

module.exports = Router;
