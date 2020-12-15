const express = require("express");
const RouterArtists = require("./routes/Artist.route");
const RouterLocation = require("./routes/Location.route");
const app = express();
const sequelize = require("./SequelizeConnexion");
const port = 5050;
require("./SequelizeAssociation");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Kale Borroka Records API");
});

app.use("/api/artists", RouterArtists);
app.use("/api/location", RouterLocation);

sequelize
  .sync({ alter: true })
  .then(() => sequelize.authenticate())
  .then(() => console.log("Connection has been established successfully"))
  .then(
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    })
  )
  .catch((err) => console.error(err));
