const mongoose = require("mongoose");
const SUBJECTS_SCHEMA = mongoose.Schema({
  name: { type: String, required: true },
  ID: { type: Number, required: true },
  college_id: { type: Number, required: true },
  info: { type: String },
  time: { type: Number, required: true },
  visible: { type: Boolean, default: false },
  available_to: { type: [Number], default: [] },
  open_mode: { type: Boolean, default: false },
  questions: {
    type: [
      {
        question: { type: String, required: true },
        options: { type: [String], required: true },
        answer: { type: String, required: true },
      },
    ],
  },
});

module.exports = mongoose.model("Subjects", SUBJECTS_SCHEMA);
