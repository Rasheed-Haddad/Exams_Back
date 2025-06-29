const express = require("express");
const router = express.Router();
const { signInStudent } = require("../controllers/Auth_Controller");

router.post("/signin", signInStudent);

module.exports = router;
