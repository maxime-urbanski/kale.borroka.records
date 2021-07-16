const Album = require("../../models/Album");
const Price = require("../../models/Price");
const Format = require("../../models/Format");
const Quantity = require("../../models/Quantity");
const City = require("../../models/City");
const Country = require("../../models/Country");
const Artist = require('../../models/Artist')

module.exports = {
  articleAttributes: {
    attributes: ['id'],
    include: [
      {
        model: Album,
        attributes: ["name", "folder", "note", "kbrProd", "releaseDate"],
        where: {
          kbrProd: true
        },
        include: [
          {
            model: Artist,
            attributes: ['name'],
            include: [
              {
                model: City,
                attributes: ["city"],
              },
              {
                model: Country,
                attributes: ["country", "tag"],
              },
            ]
          }
        ]
      },
      {
        model: Price,
        attributes: ["price"],
      },
      {
        model: Format,
        attributes: ["name"],
      },
      {
        model: Quantity,
        attributes: ["quantity"],
      },
    ],
    order: [
      [Album, Artist, "name", "ASC"],
      [Album, "name", "ASC"],
    ],
    limit: 10,
  }
}
