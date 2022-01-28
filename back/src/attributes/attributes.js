const { withLocation } = require('../attributes/artistAttributes');
const { albumAttributes } = require('../attributes/albumAttributes');
const { formatAttributes } = require('../attributes/formatAttributes');
const Album = require("../models/Album");

module.exports = {
  articleAttributes: {
    attributes: ['id', 'slug'],
    include: [
      {...albumAttributes,
        include: [withLocation],
      },
      formatAttributes,
    ],
    order: [
      [Album, "kbrNum", "ASC"],
    ],
  },
};
