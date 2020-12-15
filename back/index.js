const express = require("express");
const app = express();
const sequelize = require("./SequelizeConnexion");
const port = 5050;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Kale Borroka Records API");
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully"))
  .then(
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    })
  )
  .catch((err) => console.error(err));
