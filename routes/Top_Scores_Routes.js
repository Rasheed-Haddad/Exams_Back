const express = require("express");
const router = express.Router();
const { Get_Top_Scores } = require("../controllers/Top_Scores_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/topscores", authenticateToken, Get_Top_Scores);

module.exports = router;
