const Subjects = require("../models/Exam");
exports.Get_Subjects = async (req, res) => {
  const { college_id, ID } = req.body;

  try {
    const filteredSubjects = await Subjects.find({
      college_id: college_id,
      available_to: ID, // Mongoose will check if the array includes this value
    });

    if (filteredSubjects.length === 0) {
      return res.status(404).json("حاليًا لا توجد اختبارات متاحة لهذا الطالب.");
    }

    res.json(filteredSubjects);
  } catch (err) {
    console.error(err);
    res.status(500).json("حدث خطأ في الخادم.");
  }
};
