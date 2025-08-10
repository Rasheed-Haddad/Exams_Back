const Student = require("../models/Student");
exports.Set_College = async (req, res) => {
  const { ID, college_id } = req.body;
  const The_Student = await Student.findOne({ ID: ID });

  if (!The_Student) {
    return res.status(404).json({ error: "الطالب غير موجود" });
  }

  The_Student.college_id = college_id;
  await The_Student.save();

  res.json(The_Student);
};
