const express = require("express");
const router = express.Router();
const {
  Get_Student_Info,
} = require("../controllers/Get_Student_Info_Controller");
const authenticateToken = require("../middlewares/Auth_Middle_Ware");

router.post("/info", authenticateToken, Get_Student_Info);

module.exports = router;
