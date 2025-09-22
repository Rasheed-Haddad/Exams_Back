const express = require("express");
const router = express.Router();
const { Send_Student_Score } = require("../controllers/Student_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/results", authenticateToken, Send_Student_Score);

module.exports = router;
