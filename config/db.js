const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
