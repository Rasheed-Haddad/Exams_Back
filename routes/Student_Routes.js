const express = require("express");
const router = express.Router();
const { Send_Student_Score } = require("../controllers/Student_Controller");

router.post("/results", Send_Student_Score);

module.exports = router;
