require("dotenv").config();
const Student = require("../models/Student");
const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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
    const token = JWT.sign({ ID, name }, JWT_SECRET, { expiresIn: "100d" });
    return res.json({ user: New_Student, token });
  } else if (Student_Existance) {
    const token = JWT.sign(
      {
        ID: Student_Existance.ID,
        name: Student_Existance.name,
        scores: Student_Existance.scores,
      },
      JWT_SECRET,
      { expiresIn: "100d" }
    );
    return res.json({ user: Student_Existance, token });
  }
};
