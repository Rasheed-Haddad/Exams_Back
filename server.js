const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const Auth_Routes = require("./routes/Auth_Routes");
const Get_Subjects_Routes = require("./routes/Exam_Routes");
const Send_Student_Score = require("./routes/Student_Routes");
const CONNECT_TO_MONGO_DB = require("./config/db");

CONNECT_TO_MONGO_DB();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/", Auth_Routes);
app.use("/", Get_Subjects_Routes);
app.use("/", Send_Student_Score);

app.get("/health", (req, res) => {
  res.status(200).send("K");
});

app.listen(PORT, () => {
  console.log("LISTENING TO ", PORT);
});
