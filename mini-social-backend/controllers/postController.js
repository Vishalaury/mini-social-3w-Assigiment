const Post = require("../models/Post");

//  Create Post
exports.createPost = async (req, res) => {
  try {
    const { text } = req.body;

    console.log("REQ.FILE 👉", req.file);

    //  CloudinaryStorage already uploads image
    const imageUrl = req.file?.path || "";

    // ❗ Validation
    if (!text && !imageUrl) {
      return res.status(400).json({ msg: "Text or image required" });
    }

    const post = await Post.create({
      user: req.user.id,
      text: text || "",
      image: imageUrl,
    });

    //  Populate user + comments + likes
    const newPost = await Post.findById(post._id)
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username");

    res.status(201).json(newPost);

  } catch (err) {
    console.log("CREATE POST ERROR 👉", err);
    res.status(500).json({
      msg: err.message || "Post creation failed",
    });
  }
};


//  Get All Posts (Feed)
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username")
      .populate("comments.user", "username")
      .populate("likes.user", "username")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {
    console.log(" GET POSTS ERROR 👉", err);
    res.status(500).json({
      msg: err.message || "Fetch failed",
    });
  }
};


// Like / Unlike Post
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
      // 🔻 Unlike
      post.likes = post.likes.filter(
        (l) => l.user.toString() !== req.user.id
      );
    } else {
      // 🔺 Like
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
    res.status(500).json({
      msg: err.message || "Like failed",
    });
  }
};


//  Add Comment
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
    res.status(500).json({
      msg: err.message || "Comment failed",
    });
  }
};


//  Delete Post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    //  Only owner can delete
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ msg: "Post deleted successfully" });

  } catch (err) {
    console.log(" DELETE ERROR 👉", err);
    res.status(500).json({
      msg: err.message || "Delete failed",
    });
  }
};