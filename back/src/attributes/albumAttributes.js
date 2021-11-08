const Album = require("../models/Album");

module.exports = {
  albumAttributes: {
    model: Album,
    attributes: ["id", "name", "note", "folder", "kbrProd","kbrNum", "releaseDate"],
  }
}
