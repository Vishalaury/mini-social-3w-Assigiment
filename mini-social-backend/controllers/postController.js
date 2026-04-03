// const Post = require("../models/Post");

// // Create Post (text + image)
// exports.createPost = async (req, res) => {
//   try {
//     const { text } = req.body;

//     const post = await Post.create({
//       user: req.user.id,
//       text,
//       image: req.file ? req.file.filename : "",
//     });

//     // populate all needed fields
//     const newPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username"); 

//     res.json(newPost);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Post creation failed" });
//   }
// };

// //  Get Feed
// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username") 
//       .sort({ createdAt: -1 });

//     res.json(posts);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Fetch failed" });
//   }
// };

// //  Like / Unlike toggle
// exports.likePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     const alreadyLiked = post.likes.find(
//       (l) => l.user.toString() === req.user.id
//     );

//     if (alreadyLiked) {
//       //  Unlike
//       post.likes = post.likes.filter(
//         (l) => l.user.toString() !== req.user.id
//       );
//     } else {
//       //  Like
//       post.likes.push({ user: req.user.id });
//     }

//     await post.save();

//     //  return populated post
//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username"); 

//     res.json(updatedPost);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Like failed" });
//   }
// };

// // Comment add
// exports.commentPost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     if (!req.body.text) {
//       return res.status(400).json({ msg: "Comment required" });
//     }

//     post.comments.push({
//       user: req.user.id,
//       text: req.body.text,
//     });

//     await post.save();

//     //  return populated post
//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username"); 

//     res.json(updatedPost);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Comment failed" });
//   }
// };

// // Delete Post
// exports.deletePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     // only owner can delete
//     if (post.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     await post.deleteOne();

//     res.json({ msg: "Post deleted successfully" });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Delete failed" });
//   }
// };




// const Post = require("../models/Post");

// // Create Post (text + image)
// exports.createPost = async (req, res) => {
//   try {
//     const { text } = req.body;

//     const post = await Post.create({
//       user: req.user.id,
//       text,
//       image: req.file ? req.file.path : "", // 🔥 CHANGE HERE
//     });

//     const newPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(newPost);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Post creation failed" });
//   }
// };



// // Get Feed
// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username")
//       .sort({ createdAt: -1 });

//     res.json(posts);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Fetch failed" });
//   }
// };

// // Like / Unlike toggle
// exports.likePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     const alreadyLiked = post.likes.find(
//       (l) => l.user.toString() === req.user.id
//     );

//     if (alreadyLiked) {
//       post.likes = post.likes.filter(
//         (l) => l.user.toString() !== req.user.id
//       );
//     } else {
//       post.likes.push({ user: req.user.id });
//     }

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);
//   } catch (err) {
//     res.status(500).json({ msg: "Like failed" });
//   }
// };

// // Comment
// exports.commentPost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     post.comments.push({
//       user: req.user.id,
//       text: req.body.text,
//     });

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);
//   } catch (err) {
//     res.status(500).json({ msg: "Comment failed" });
//   }
// };

// // Delete
// exports.deletePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (post.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     await post.deleteOne();

//     res.json({ msg: "Post deleted" });
//   } catch (err) {
//     res.status(500).json({ msg: "Delete failed" });
//   }
// };



// const Post = require("../models/Post");

// // Create Post (text + image)
// exports.createPost = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // ✅ Cloudinary + multer safe access
//     const imageUrl = req.file?.path || "";

//     const post = await Post.create({
//       user: req.user.id,
//       text,
//       image: imageUrl,
//     });

//     const newPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.status(201).json(newPost);
//   } catch (err) {
//     console.log("CREATE POST ERROR 👉", err);
//     res.status(500).json({ msg: err.message });
//   }
// };

// // Get Feed
// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username")
//       .sort({ createdAt: -1 });

//     res.json(posts);
//   } catch (err) {
//     console.log("GET POSTS ERROR 👉", err);
//     res.status(500).json({ msg: err.message });
//   }
// };

// // Like / Unlike toggle
// exports.likePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) return res.status(404).json({ msg: "Post not found" });

//     const alreadyLiked = post.likes.find(
//       (l) => l.user.toString() === req.user.id
//     );

//     if (alreadyLiked) {
//       post.likes = post.likes.filter(
//         (l) => l.user.toString() !== req.user.id
//       );
//     } else {
//       post.likes.push({ user: req.user.id });
//     }

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);
//   } catch (err) {
//     console.log("LIKE ERROR 👉", err);
//     res.status(500).json({ msg: err.message });
//   }
// };

// // Comment
// exports.commentPost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) return res.status(404).json({ msg: "Post not found" });

//     post.comments.push({
//       user: req.user.id,
//       text: req.body.text,
//     });

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);
//   } catch (err) {
//     console.log("COMMENT ERROR 👉", err);
//     res.status(500).json({ msg: err.message });
//   }
// };

// // Delete
// exports.deletePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) return res.status(404).json({ msg: "Post not found" });

//     if (post.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     await post.deleteOne();

//     res.json({ msg: "Post deleted" });
//   } catch (err) {
//     console.log("DELETE ERROR 👉", err);
//     res.status(500).json({ msg: err.message });
//   }
// };




// const Post = require("../models/Post");

// // ✅ Create Post (SAFE + NO ERROR)
// exports.createPost = async (req, res) => {
//   try {
//     const { text } = req.body;

//     // 🔥 DEBUG (important)
//     console.log("REQ.FILE 👉", req.file);

//     // ✅ Safe image handling (Cloudinary)
//     const imageUrl = req.file?.path || "";

//     // ❗ atleast text or image required
//     if (!text && !imageUrl) {
//       return res.status(400).json({ msg: "Text or image required" });
//     }

//     const post = await Post.create({
//       user: req.user.id,
//       text: text || "",
//       image: imageUrl,
//     });

//     const newPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.status(201).json(newPost);

//   } catch (err) {
//     console.log("❌ CREATE POST ERROR 👉", err);
//     res.status(500).json({ msg: err.message || "Post creation failed" });
//   }
// };


// // ✅ Get Feed
// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username")
//       .sort({ createdAt: -1 });

//     res.json(posts);

//   } catch (err) {
//     console.log("❌ GET POSTS ERROR 👉", err);
//     res.status(500).json({ msg: err.message || "Fetch failed" });
//   }
// };


// // ✅ Like / Unlike
// exports.likePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     const alreadyLiked = post.likes.find(
//       (l) => l.user.toString() === req.user.id
//     );

//     if (alreadyLiked) {
//       post.likes = post.likes.filter(
//         (l) => l.user.toString() !== req.user.id
//       );
//     } else {
//       post.likes.push({ user: req.user.id });
//     }

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);

//   } catch (err) {
//     console.log("❌ LIKE ERROR 👉", err);
//     res.status(500).json({ msg: err.message || "Like failed" });
//   }
// };


// // ✅ Comment
// exports.commentPost = async (req, res) => {
//   try {
//     const { text } = req.body;

//     if (!text) {
//       return res.status(400).json({ msg: "Comment required" });
//     }

//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     post.comments.push({
//       user: req.user.id,
//       text,
//     });

//     await post.save();

//     const updatedPost = await Post.findById(post._id)
//       .populate("user", "username")
//       .populate("comments.user", "username")
//       .populate("likes.user", "username");

//     res.json(updatedPost);

//   } catch (err) {
//     console.log("❌ COMMENT ERROR 👉", err);
//     res.status(500).json({ msg: err.message || "Comment failed" });
//   }
// };


// // ✅ Delete
// exports.deletePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     if (post.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     await post.deleteOne();

//     res.json({ msg: "Post deleted successfully" });

//   } catch (err) {
//     console.log("❌ DELETE ERROR 👉", err);
//     res.status(500).json({ msg: err.message || "Delete failed" });
//   }
// };





const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");

// ✅ Create Post
exports.createPost = async (req, res) => {
  try {
    const { text } = req.body;

    console.log("REQ.FILE 👉", req.file);

    let imageUrl = "";

    // ✅ Upload to Cloudinary (SAFE)
    if (req.file && req.file.path) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        imageUrl = result.secure_url;
      } catch (uploadErr) {
        console.log("❌ CLOUDINARY ERROR 👉", uploadErr);
        return res.status(500).json({ msg: "Image upload failed" });
      }
    }

    // ❗ At least text or image required
    if (!text && !imageUrl) {
      return res.status(400).json({ msg: "Text or image required" });
    }

    const post = await Post.create({
      user: req.user.id,
      text: text || "",
      image: imageUrl,
    });

    const newPost = await Post.findById(post._id)
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username");

    res.status(201).json(newPost);

  } catch (err) {
    console.log("❌ CREATE POST ERROR 👉", err);
    res.status(500).json({ msg: err.message || "Post creation failed" });
  }
};


// ✅ Get Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {
    console.log("❌ GET POSTS ERROR 👉", err);
    res.status(500).json({ msg: err.message || "Fetch failed" });
  }
};


// ✅ Like / Unlike
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const alreadyLiked = post.likes.find(
      (l) => l.user.toString() === req.user.id
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (l) => l.user.toString() !== req.user.id
      );
    } else {
      post.likes.push({ user: req.user.id });
    }

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username");

    res.json(updatedPost);

  } catch (err) {
    console.log("❌ LIKE ERROR 👉", err);
    res.status(500).json({ msg: err.message || "Like failed" });
  }
};


// ✅ Comment
exports.commentPost = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ msg: "Comment required" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    post.comments.push({
      user: req.user.id,
      text,
    });

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username");

    res.json(updatedPost);

  } catch (err) {
    console.log("❌ COMMENT ERROR 👉", err);
    res.status(500).json({ msg: err.message || "Comment failed" });
  }
};


// ✅ Delete
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ msg: "Post deleted successfully" });

  } catch (err) {
    console.log("❌ DELETE ERROR 👉", err);
    res.status(500).json({ msg: err.message || "Delete failed" });
  }
};