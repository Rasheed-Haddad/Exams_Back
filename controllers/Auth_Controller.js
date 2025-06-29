const Student = require("../models/Student");

exports.signInStudent = async (req, res) => {
  const { name, ID } = req.body;
  const Student_Existance = await Student.findOne({ ID: ID, name: name });

  if (!Student_Existance) {
    const New_Student = new Student({
      name: name,
      ID: ID,
      scores: [],
    });
    await New_Student.save();
    return res.json({ user: New_Student });
  } else if (Student_Existance) {
    return res.json({ user: Student_Existance });
  }
};
