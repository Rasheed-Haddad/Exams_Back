const Student = require("../models/Student");

exports.Get_Student_Rank = async (req, res) => {
  try {
    const { ID } = req.body;

    const The_Student = await Student.findOne({ ID: ID });
    if (!The_Student) {
      return res.status(404).json({ error: "الطالب غير موجود" });
    }

    // جلب جميع الطلاب وترتيبهم تنازليًا حسب النقاط
    const Students = await Student.find().sort({ points: -1 });

    // إيجاد ترتيب الطالب
    const rank =
      Students.findIndex((student) => student.ID === The_Student.ID) + 1;

    // إرجاع البيانات
    res.json({ rank: rank });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "خطأ في الخادم" });
  }
};
