const Student = require("../models/Student");
exports.Get_Student_Info = async (req, res) => {
  const { ID } = req.body;
  const The_Student = await Student.findOne({ ID: ID });

  if (!The_Student) {
    return res.status(404).json({ error: "الطالب غير موجود" });
  }

  res.json(The_Student);
};
