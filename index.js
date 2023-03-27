const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://haneum:1313@hancluster.8r3alit.mongodb.net/?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World !"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
