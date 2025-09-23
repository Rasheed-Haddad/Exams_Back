const express = require("express");
const router = express.Router();
const {
  Get_Student_Info,
} = require("../controllers/Get_Student_Info_Controller");

router.post("/info", Get_Student_Info);

module.exports = router;
