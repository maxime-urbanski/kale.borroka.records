const { withLocation } = require('../attributes/artistAttributes')
const { albumAttributes } = require('../attributes/albumAttributes')
const { priceAttributes } = require('../attributes/priceAttributes')
const { quantityAttributes } = require('../attributes/quantityAttributes')
const { formatAttributes } = require('../attributes/formatAttributes')
const Album = require("../models/Album");
const Artist = require("../models/Artist");

module.exports = {
  articleAttributes: {
    attributes: ['id', 'slug'],
    include: [
      {...albumAttributes,
        include: [withLocation],
      },
      priceAttributes,
      formatAttributes,
      quantityAttributes,
    ],
    order: [
      [Album, "kbrNum", "ASC"],
    ],
  },
}
