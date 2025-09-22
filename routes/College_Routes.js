const express = require("express");
const router = express.Router();
const { Set_College } = require("../controllers/Set_College_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/setcollege", authenticateToken, Set_College);

module.exports = router;
