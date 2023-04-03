const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { user } = require("./models/User");
const { User } = require("./models/User");

const config = require("./config/key");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World !"));

app.post("/register", async (req, res) => {
  const user = new User(req.body);

  const result = await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
