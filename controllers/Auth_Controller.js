const Student = require("../models/Student");

exports.signInStudent = async (req, res) => {
  try {
    const { name, ID } = req.body;

    const existingStudent = await Student.findOne({ ID: ID });

    if (!existingStudent) {
      const newStudent = new Student({
        name: name,
        ID: ID,
        scores: [],
      });
      await newStudent.save();
      return res.json({ user: newStudent });
    }

    if (existingStudent.name !== name) {
      return res.status(400).json({ error: "رقم جامعي مستخدم باسم مختلف" });
    }

    return res.json({ user: existingStudent });
  } catch (err) {
    console.error("SignIn Error:", err);
    return res.status(500).json({ error: "خطأ في الخادم" });
  }
};
