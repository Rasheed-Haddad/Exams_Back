const express = require("express");
const router = express.Router();
const { Get_Student_Rank } = require("../controllers/Student_Rank_Controller");

router.post("/rank", Get_Student_Rank);

module.exports = router;
