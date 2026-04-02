// const router = require('express').Router();
// const auth = require('../middleware/authMiddleware');
// const multer = require('multer');

// const {
//   createPost,
//   getPosts,
//   likePost,
//   commentPost
// } = require('../controllers/postController');

// const upload = multer({ dest: "uploads/" });

// router.post('/', auth, upload.single('image'), createPost);
// router.get('/', getPosts);
// router.post('/like/:id', auth, likePost);
// router.post('/comment/:id', auth, commentPost);

// module.exports = router;




// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const multer = require("multer");

// const {
//   createPost,
//   getPosts,
//   likePost,
//   commentPost,
// } = require("../controllers/postController");

// // ✅ Better multer config (filename + folder)
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // ✅ Routes

// // Create Post (text + image)
// router.post("/", auth, upload.single("image"), createPost);

// // Get all posts
// router.get("/", getPosts);

// // Like / Unlike post
// router.post("/like/:id", auth, likePost);

// // Add comment
// router.post("/comment/:id", auth, commentPost);

// // delete
// router.delete("/:id", auth, deletePost);

// module.exports = router;



const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const multer = require("multer");

// ✅ multer config (image upload)
const upload = multer({ dest: "uploads/" });

// ✅ controllers import
const {
  createPost,
  getPosts,
  likePost,
  commentPost,
  deletePost
} = require("../controllers/postController");

// 🔥 ROUTES

// Create post (text + image)
router.post("/", auth, upload.single("image"), createPost);

// Get all posts (feed)
router.get("/", getPosts);

// Like / Unlike
router.post("/like/:id", auth, likePost);

// Comment
router.post("/comment/:id", auth, commentPost);

// Delete post
router.delete("/:id", auth, deletePost);

module.exports = router;