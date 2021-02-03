const Album = require("../src/models/Album");
const Article = require("../src/models/Article");
const Artist = require("../src/models/Artist");
const City = require("../src/models/City");
const Country = require("../src/models/Country");
const Format = require("../src/models/Format");
const Label = require("../src/models/Label");
const Quantity = require("../src/models/Quantity");
const Price = require("../src/models/Price");
const Song = require("../src/models/Song");
const Style = require("../src/models/Style");
const Tracklist = require("../src/models/Tracklist");

Artist.belongsTo(City);
City.hasMany(Artist);

Artist.belongsTo(Country);
Country.hasMany(Artist);

Artist.hasMany(Album);
Album.belongsTo(Artist);

Artist.hasMany(Song);
Song.belongsTo(Artist);

Album.belongsToMany(Label, { through: "PRODUCT" }, { onDelete: "CASCADE" });
Label.belongsToMany(Album, { through: "PRODUCT" }, { onDelete: "CASCADE" });

Album.belongsTo(Style);
Style.hasMany(Album);

Song.belongsToMany(Album, { through: Tracklist }, { onDelete: "CASCADE" });
Album.belongsToMany(Song, { through: Tracklist }, { onDelete: "CASCADE" });

Song.hasMany(Tracklist);
Tracklist.belongsTo(Song);

Album.hasMany(Tracklist);
Tracklist.belongsTo(Album);

Article.belongsTo(Format);
Format.hasMany(Album);

Article.belongsTo(Album);
Album.hasMany(Article);

Article.belongsTo(Price);
Price.hasMany(Article);

Article.belongsTo(Quantity);
Quantity.hasMany(Article);
