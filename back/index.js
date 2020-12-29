require("./SequelizeAssociation");
const express = require("express");
const sequelize = require("./SequelizeConnexion");
const app = express();
const artist = require("./routes/Artist.route");
const format = require("./routes/Format.route");
const label = require("./routes/Label.route");
const location = require("./routes/Location.route");
const price = require("./routes/Price.route");
const songs = require("./routes/Song.route");
const style = require("./routes/Style.route");
const Album = require("./routes/Album.route");
const port = 5050;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Kale Borroka Records API");
});

app.use("/api/artist", artist);
app.use("/api/location", location);
app.use("/api/label", label);
app.use("/api/style", style);
app.use("/api/format", format);
app.use("/api/price", price);
app.use("/api/song", songs);
app.use("/api/album", Album);

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
