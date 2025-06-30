const bcrypt = require("bcrypt");
require("dotenv").config();
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");

exports.signInStudent = async (req, res) => {
  try {
    const { name, ID, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingStudent = await Student.findOne({ ID: ID });

    // في حال لم يوجد الطالب، أنشئ حساب جديد
    if (!existingStudent) {
      const newStudent = new Student({
        name: name,
        ID: ID,
        password: hashedPassword,
        scores: [],
      });

      await newStudent.save();

      // إنشاء التوكن
      const token = jwt.sign(
        { id: newStudent._id, name: newStudent.name },
        process.env.JWT_SECRET,
        { expiresIn: "90d" } // صلاحية التوكن
      );

      return res.json({ user: newStudent, token });
    }

    // تحقق من مطابقة الاسم
    if (existingStudent.name !== name) {
      return res.status(400).json({ error: "رقم جامعي مستخدم باسم مختلف" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ error: "تأكد من كلمة المرور" });
    }
    // إنشاء التوكن
    const token = jwt.sign(
      { id: existingStudent._id, name: existingStudent.name },
      process.env.JWT_SECRET,
      { expiresIn: "90d" }
    );

    return res.json({ user: existingStudent, token });
  } catch (err) {
    return res.status(500).json({ error: "خطأ في الخادم" });
  }
};
