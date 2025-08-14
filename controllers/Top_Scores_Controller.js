const Student = require("../models/Student");

exports.Get_Top_Scores = async (req, res) => {
  const { ID } = req.body; // أو ممكن تستعمل req.params لو GET

  if (!ID) {
    return res.status(400).json({ error: "يجب تحديد رقم الامتحان" });
  }

  try {
    const students = await Student.find();

    // استخراج النتائج الخاصة بالامتحان + تجاهل open mode
    const examResults = students
      .map((student) => {
        const scoreEntry = student.scores.find(
          (s) => s.subject_id === Number(ID) && !s.is_open_mode
        );
        return scoreEntry
          ? {
              name: student.name,
              nick_name: student.nick_name,
              score: scoreEntry.score,
            }
          : null;
      })
      .filter((entry) => entry !== null)
      .sort((a, b) => b.score - a.score) // ترتيب تنازلي
      .slice(0, 3); // <<< أعلى 3 فقط

    res.json(examResults);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "حدث خطأ في الخادم" });
  }
};
