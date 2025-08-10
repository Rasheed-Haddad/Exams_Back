const mongoose = require("mongoose");
const STUDENT_SCHEMA = mongoose.Schema({
  name: { type: String, required: true },
  ID: { type: Number, required: true },
  college_id: { type: Number },
  password: { type: String, required: true },
  scores: {
    type: [
      {
        subject_id: { type: Number },
        score: { type: Number },
        is_open_mode: { type: Boolean },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Student", STUDENT_SCHEMA);
