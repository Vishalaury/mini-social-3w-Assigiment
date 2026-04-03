// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ msg: "No token" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };



// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ msg: "No token" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded.user; // 🔥 YAHI FIX HAI

//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };


const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const token = authHeader.split(" ")[1]; // 🔥 IMPORTANT

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id }; // 🔥 FIX

    next();
  } catch (err) {
    console.log("AUTH ERROR 👉", err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};