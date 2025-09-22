const express = require("express");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");
const router = express.Router();
const { Set_Badge } = require("../controllers/Set_Badge_Controller");

router.post("/setbadge", authenticateToken, Set_Badge);

module.exports = router;
