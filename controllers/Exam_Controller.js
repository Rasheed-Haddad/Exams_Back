const Subjects = require("../models/Exam");
exports.Get_Subjects = async (req, res) => {
  const college_id = req.body.college_id;
  const Subjects_Existance = await Subjects.find({ college_id: college_id });
  if (!Subjects_Existance) {
    return res.json("حاليا لا توجد أي اختبارات لهذا الفرع");
  }
  return res.json(Subjects_Existance);
};
