const multer = require("multer");

// ✅ Render-safe memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
