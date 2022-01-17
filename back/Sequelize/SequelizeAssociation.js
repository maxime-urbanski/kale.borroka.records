const Album = require("../src/models/Album");
const Article = require("../src/models/Article");
const Artist = require("../src/models/Artist");
const City = require("../src/models/City");
const Country = require("../src/models/Country");
const Format = require("../src/models/Format");
const Label = require("../src/models/Label");
const Song = require("../src/models/Song");
const Style = require("../src/models/Style");
const Tracklist = require("../src/models/Tracklist");
const Video = require("../src/models/Video");
const Productor = require("../src/models/Productor");
const Clip = require('../src/models/Clip');

Artist.belongsTo(City);
City.hasMany(Artist);

Artist.belongsTo(Country);
Country.hasMany(Artist);

Artist.hasMany(Album);
Album.belongsTo(Artist);

Artist.hasMany(Song);
Song.belongsTo(Artist);

Album.belongsToMany(
  Label,
  { through: Productor },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);
Label.belongsToMany(
  Album,
  { through: Productor },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);

Album.belongsTo(Style);
Style.hasMany(Album);

Song.belongsToMany(
  Album,
  { through: Tracklist },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);
Album.belongsToMany(
  Song,
  { through: Tracklist },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);

Album.belongsToMany(
  Video,
  { through: Clip },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);
Video.belongsToMany(
  Album,
  { through: Clip },
  { onDelete: "CASCADE" },
  { onUpdate: "CASCASDE" }
);

Article.belongsTo(Format);
Format.hasMany(Article);

Article.belongsTo(Album);
Album.hasMany(Article);
