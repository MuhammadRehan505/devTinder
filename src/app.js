const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("1st Response");
    next();
    res.send("1st response");
  },
  (req, res, next) => {
    console.log("2nd Response");
    next();
    res.send("2nd response");
  },
);

app.listen(3000, () => {
  console.log("SERVER IS LISTENING!!!");
});
