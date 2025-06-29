const Subjects = require("../models/Exam");
exports.Get_Subjects = async (req, res) => {
  const college_id = req.body.college_id;
  const Subjects_Existance = await Subjects.find({ college_id: college_id });
  if (!Subjects_Existance) {
    return res.json("حاليا لا توجد أي اختبارات لهذا الفرع");
  }
  return res.json([Subjects_Existance]);
  /*const college_id = req.body.college_id;
  const New_Subject = new Subjects({
    name: "علم المناعة",
    info: "دورة الدكتورة سوزان اللي ما خلت حدا ما رسبتو بالمادة",
    ID: 12,
    college_id: college_id,
    questions: [
      {
        question: "مين اكتشف علم المناعة المصلي",
        options: ["Pastor", "Kokh", "Lovenhok", "Magi"],
        answer: 4,
      },

      {
        question: "مين اكتشف علم المناعة المصلي",
        options: ["Pastor", "Kokh", "Lovenhok", "Magi"],
        answer: 3,
        id: 123948444,
      },
      {
        question: "مين اكتشف علم المناعة المصلي",
        options: ["Pastor", "Kokh", "Lovenhok", "Magi"],
        answer: 2,
        id: 1239456778,
      },
    ],
  });
  await New_Subject.save();
  res.send("DONE MOTHERFUCKER");*/
};
