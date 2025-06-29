require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URI;

const CONNECT_TO_MONGO_DB = async () => {
  try {
    await mongoose
      .connect(MONGO_URL)
      .then(() => console.log("===== CONNECTED SUCCESSFULLY ====="))
      .catch((error) => console.log("===== ERROR : ", error));
  } catch (error) {
    console.log("===== ERROR : ", error);
  }
};
module.exports = CONNECT_TO_MONGO_DB;
