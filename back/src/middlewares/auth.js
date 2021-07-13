const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (role) => (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const multiRole = Array.isArray(role);

  if (!token) {
    console.log('YOUHOIU')
    res.sendStatus(403)
    next();
  }
  if (token) {
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
      console.log('DEUXIEME YOUHOIU', err)
        res.status(403).json(err);
        next();
      }
      if (role === payload.usertype) {
        req.user = payload;
        next();
      } else if (multiRole && role.some((ar) => ar === payload.usertype)) {
        req.user = payload;
        next();
      } else {
        res.sendStatus(401);
        next();
      }
    });
  }
};
