const express = require("express");
const { authAdmin, authUser } = require("../middleware/auth");
const app = express();

app.use("/admin", authAdmin);

app.get("/user/allDataGet", authUser, (req, res) => {
  res.send("User Data has been sended");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Users Data send");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});

app.listen(3000, () => {
  console.log("SERVER IS LISTENING!!!");
});
