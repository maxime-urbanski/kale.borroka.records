const Quantity = require('../models/Quantity')

module.exports = {
  quantityAttributes: {
    model: Quantity,
    attributes: ["quantity"],
  }
}
