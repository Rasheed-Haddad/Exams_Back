const Student = require("../models/Student");

exports.Set_Badge = async (req, res) => {
  try {
    const { ID, points } = req.body;

    // البحث عن الطالب
    const The_Student = await Student.findOne({ ID: ID });
    if (!The_Student) {
      return res.status(404).json({ error: "الطالب غير موجود" });
    }

    // زيادة النقاط
    The_Student.points += Number(points) || 0;

    // تحديد الشارة بناءً على مجموع النقاط
    if (The_Student.points >= 10000) {
      The_Student.badge = "قدها وقدود";
    } else if (The_Student.points >= 8000) {
      The_Student.badge = "كبير الحكماء";
    } else if (The_Student.points >= 7000) {
      The_Student.badge = "صائد العلامات";
    } else if (The_Student.points >= 6000) {
      The_Student.badge = "نيرد";
    } else if (The_Student.points >= 5000) {
      The_Student.badge = "نخبة";
    } else if (The_Student.points >= 4000) {
      The_Student.badge = "متفوق";
    } else if (The_Student.points >= 3000) {
      The_Student.badge = "مميز";
    } else if (The_Student.points >= 2000) {
      The_Student.badge = "مثابر";
    } else if (The_Student.points >= 50) {
      The_Student.badge = "مبتدئ";
    } else {
      The_Student.badge = "فارش";
    }

    // حفظ التغييرات
    await The_Student.save();

    // إرجاع البيانات المحدثة
    res.json({
      points: The_Student.points,
      badge: The_Student.badge,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "خطأ في الخادم" });
  }
};
