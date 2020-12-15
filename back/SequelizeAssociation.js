const Album = require("./models/Album");
const Article = require("./models/Article");
const Artist = require("./models/Artist");
const Format = require("./models/Format");
const Label = require("./models/Label");
const Location = require("./models/Location");
const Price = require("./models/Price");
const Song = require("./models/Song");
const Style = require("./models/Style");

Artist.belongsTo(Location);
Location.hasMany(Artist);

Artist.hasMany(Album);
Album.belongsTo(Artist);
