const express = require("express");
const router = express.Router();
const {
  Get_One_Subject,
} = require("../controllers/Get_One_Subject_Controller");

router.post("/getonesubject", Get_One_Subject);

module.exports = router;
