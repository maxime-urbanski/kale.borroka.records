require("./Sequelize/SequelizeAssociation");
const express = require("express");
const Router = require("./src/router");
const sequelize = require("./Sequelize/SequelizeConnexion");
const bodyParser = require("body-parser");
const app = express();
const port = 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Kale Borroka Records API");
});

app.use("/api", Router);

sequelize
  .sync({ alter: true })
  .then(() => sequelize.authenticate())
  .then(() =>
    console.log("Database connection has been established successfully")
  )
  .then(
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    })
  )
  .catch((err) => console.error(err));
