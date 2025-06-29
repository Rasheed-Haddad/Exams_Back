const express = require("express");
const router = express.Router();
const { Get_Subjects } = require("../controllers/Exam_Controller");

router.post("/subjects", Get_Subjects);

module.exports = router;
