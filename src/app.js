const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
});

app.get("/admin/getAllData", (req, res) => {
  res.send("User Data send");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});

app.listen(3000, () => {
  console.log("SERVER IS LISTENING!!!");
});
