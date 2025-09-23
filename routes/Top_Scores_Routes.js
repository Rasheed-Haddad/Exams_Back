const express = require("express");
const router = express.Router();
const { Get_Top_Scores } = require("../controllers/Top_Scores_Controller");

router.post("/topscores", Get_Top_Scores);

module.exports = router;
