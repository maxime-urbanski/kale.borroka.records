const { withLocation } = require('../attributes/artistAttributes');
const { albumAttributes } = require('../attributes/albumAttributes');
const { formatAttributes } = require('../attributes/formatAttributes');
const Album = require("../models/Album");

module.exports = {
  articleAttributes: {
    attributes: ["id","name", "slug","price","quantity"],
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
