const Student = require("../models/Student");
exports.Send_Student_Score = async (req, res) => {
  const { student_ID, subject_id, score } = req.body;
  const The_Student = await Student.findOne({ ID: student_ID });

  if (!The_Student) {
    return res.status(404).json({ error: "الطالب غير موجود" });
  }

  // تأكد من وجود مصفوفة scores
  if (!Array.isArray(The_Student.scores)) {
    The_Student.scores = [];
  }

  The_Student.scores.push({ subject_id: subject_id, score: score });
  await The_Student.save();

  res.json(The_Student);
};
