const express = require("express");
const router = express.Router();
const { Set_College } = require("../controllers/Set_College_Controller");

router.post("/setcollege", Set_College);

module.exports = router;
