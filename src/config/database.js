const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rehandb:KFe5LFOk7H4S9ZCQ@cluster0.qmdzfxn.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
