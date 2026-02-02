const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("SERVER IS LISTENING!!!");
});
