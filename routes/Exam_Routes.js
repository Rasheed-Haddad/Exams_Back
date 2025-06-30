const express = require("express");
const router = express.Router();
const { Get_Subjects } = require("../controllers/Exam_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/subjects", authenticateToken, Get_Subjects);

module.exports = router;
