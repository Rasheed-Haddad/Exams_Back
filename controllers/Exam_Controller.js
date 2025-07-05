const Subjects = require("../models/Exam");
exports.Get_Subjects = async (req, res) => {
  const { college_id, ID } = req.body;

  try {
    const filteredSubjects = await Subjects.find({
      college_id: college_id,
    });

    const The_Exams = filteredSubjects.map((subject, index) => {
      if (subject.available_to.includes(ID)) {
        return subject;
      }
    });
    if (The_Exams) {
      res.json(The_Exams);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("حدث خطأ في الخادم.");
  }
};
