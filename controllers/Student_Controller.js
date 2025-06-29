const Student = require("../models/Student");
exports.Send_Student_Score = async (req, res) => {
  const { student_ID, subject_id, score } = req.body;
  const The_Student = await Student.findOne({ ID: student_ID });
  await The_Student.scores.push({ subject_id: subject_id, score: score });
  await The_Student.save();
  res.json(The_Student);
};
