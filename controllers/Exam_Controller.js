const Subjects = require("../models/Exam");
exports.Get_Subjects = async (req, res) => {
  const { college_id, ID } = req.body;

  try {
    const filteredSubjects = await Subjects.find({
      college_id: college_id,
    });

    const The_Exams = filteredSubjects.filter((subject) =>
      subject.available_to.includes(ID)
    );

    res.json(The_Exams);
  } catch (err) {
    console.error(err);
    res.status(500).json("حدث خطأ في الخادم.");
  }
};
