const express = require("express");
const { authAdmin, authUser } = require("../middleware/auth");
const connectDB = require("./config/database.js");
const app = express();
const userModel = require("./models/user.js");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const data = new userModel(req.body);

  try {
    await data.save();
    res.send("User Has Been Added Successfully!");
  } catch {
    res.status(400).send("Error while adding user :" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connection has been successfully established");
    app.listen(3000, () => {
      console.log("SERVER IS LISTENING!!!");
    });
  })
  .catch((err) => {
    console.error("Connection has been failed");
  });

app.use("/admin", authAdmin);

// app.get("/user/allDataGet", authUser, (req, res) => {
//   res.send("User Data has been sended");
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Users Data send");
// });
// app.get("/admin/deleteUser", (req, res) => {
//   res.send("User Deleted");
// });
