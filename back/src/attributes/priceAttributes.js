const Price = require('../models/Price')

module.exports = {
  priceAttributes : {
    model: Price,
    attributes: ["price"],
  }
}
