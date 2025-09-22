const express = require("express");
const router = express.Router();
const { Get_Student_Rank } = require("../controllers/Student_Rank_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/rank", authenticateToken, Get_Student_Rank);

module.exports = router;
