const mongoose = require("mongoose");
const STUDENT_SCHEMA = mongoose.Schema({
  name: { type: String, required: true },
  ID: { type: Number, required: true },
  scores: {
    type: [{ subject_id: { type: Number }, score: { type: Number } }],
    default: [],
  },
});

module.exports = mongoose.model("Student", STUDENT_SCHEMA);
