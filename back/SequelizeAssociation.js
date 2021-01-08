const Album = require("./models/Album");
const Article = require("./models/Article");
const Artist = require("./models/Artist");
const Format = require("./models/Format");
const Label = require("./models/Label");
const Location = require("./models/Location");
const Price = require("./models/Price");
const Song = require("./models/Song");
const Style = require("./models/Style");
const Tracklist = require("./models/Tracklist");

Artist.belongsTo(Location, { onUpdate: "RESTRICT" });
Location.hasMany(Artist, { onUpdate: "RESTRICT" });

Artist.hasMany(Album);
Album.belongsTo(Artist);

Artist.belongsToMany(Song, { through: "WRITE" }, { onDelete: "CASCADE" });
Song.belongsToMany(Artist, { through: "WRITE" }, { onDelete: "CASCADE" });

Album.belongsToMany(Label, { through: "PRODUCT" }, { onDelete: "CASCADE" });
Label.belongsToMany(Album, { through: "PRODUCT" }, { onDelete: "CASCADE" });

Album.belongsTo(Style);
Style.hasMany(Album);

Album.belongsTo(Tracklist);
Tracklist.hasOne(Album);

Song.belongsToMany(Tracklist, { through: "compose" }, { onDelete: "CASCADE" });
Tracklist.belongsToMany(Song, { through: "compose" }, { onDelete: "CASCADE" });

Article.belongsTo(Format);
Format.hasMany(Album);

Article.belongsTo(Album);
Album.hasMany(Article);

Article.belongsTo(Price);
Price.hasMany(Article);
