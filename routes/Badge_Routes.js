const express = require("express");
const router = express.Router();
const { Set_Badge } = require("../controllers/Set_Badge_Controller");

router.post("/setbadge", Set_Badge);

module.exports = router;
