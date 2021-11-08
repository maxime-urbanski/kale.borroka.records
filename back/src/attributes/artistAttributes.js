const Artist = require("../models/Artist");
const City = require("../models/City");
const Country = require("../models/Country");

module.exports = {
  withoutLocation: {
    model: Artist,
    attributes: ["name"],
  },
  withLocation: {
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
}
