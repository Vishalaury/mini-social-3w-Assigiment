// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const multer = require("multer");

// //  multer config (image upload)
// const upload = multer({ dest: "uploads/" });

// // controllers import
// const {
//   createPost,
//   getPosts,
//   likePost,
//   commentPost,
//   deletePost
// } = require("../controllers/postController");

// //  ROUTES

// // Create post (text + image)
// router.post("/", auth, upload.single("image"), createPost);

// // Get all posts (feed)
// router.get("/", getPosts);

// // Like / Unlike
// router.post("/like/:id", auth, likePost);

// // Comment
// router.post("/comment/:id", auth, commentPost);

// // Delete post
// router.delete("/:id", auth, deletePost);

// module.exports = router;



const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary storage config
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-social-posts",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// controllers import
const {
  createPost,
  getPosts,
  likePost,
  commentPost,
  deletePost,
} = require("../controllers/postController");

// ROUTES

// Create post
router.post("/", auth, upload.single("image"), createPost);

// Get all posts
router.get("/", getPosts);

// Like / Unlike
router.post("/like/:id", auth, likePost);

// Comment
router.post("/comment/:id", auth, commentPost);

// Delete post
router.delete("/:id", auth, deletePost);

module.exports = router;