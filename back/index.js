require("./Sequelize/SequelizeAssociation");
const express = require("express");
const cors = require("cors");
const Router = require("./src/router");
const sequelize = require("./Sequelize/SequelizeConnexion");
const bodyParser = require("body-parser");
const app = express();
const port = 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("Kale Borroka Records API");
});

app.use("/api", Router);

sequelize
  .sync()
  .then(() => sequelize.authenticate())
  .then(() =>
    console.log("Database connection has been established successfully OK")
  )
  .then(
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    })
  )
  .catch((err) => console.error(err));
