const Album = require("./models/Album");
const Article = require("./models/Article");
const Artist = require("./models/Artist");
const City = require("./models/City");
const Country = require("./models/Country");
const Format = require("./models/Format");
const Label = require("./models/Label");
const Quantity = require("./models/Quantity");
const Price = require("./models/Price");
const Song = require("./models/Song");
const Style = require("./models/Style");

Artist.belongsTo(City);
City.hasMany(Artist);

Artist.belongsTo(Country);
Country.hasMany(Artist);

Artist.hasMany(Album);
Album.belongsTo(Artist);

Artist.belongsToMany(Song, { through: "WRITE" }, { onDelete: "CASCADE" });
Song.belongsToMany(Artist, { through: "WRITE" }, { onDelete: "CASCADE" });

Album.belongsToMany(Label, { through: "PRODUCT" }, { onDelete: "CASCADE" });
Label.belongsToMany(Album, { through: "PRODUCT" }, { onDelete: "CASCADE" });

Album.belongsTo(Style);
Style.hasMany(Album);

Song.belongsToMany(Album, { through: "compose" }, { onDelete: "CASCADE" });
Album.belongsToMany(Song, { through: "compose" }, { onDelete: "CASCADE" });

Article.belongsTo(Format);
Format.hasMany(Album);

Article.belongsTo(Album);
Album.hasMany(Article);

Article.belongsTo(Price);
Price.hasMany(Article);

Article.belongsTo(Quantity);
Quantity.hasMany(Article);
