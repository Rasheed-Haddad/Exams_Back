const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "توكن غير موجود" });
  }

  // التحقق من صحة التوكن
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "توكن غير صالح أو منتهي" });
    }

    req.user = user; // حفظ بيانات المستخدم المستخرجة من التوكن
    next(); // المتابعة للراوتر التالي
  });
};

module.exports = authenticateToken;
