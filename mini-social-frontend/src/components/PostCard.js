import { useState } from "react";
import API from "../api/api";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Avatar,
  IconButton,
  Divider
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function PostCard({
  post = {},
  fetchPosts = () => {},
  setPosts = () => {}
}) {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const [likes, setLikes] = useState(post?.likes || []);
  const [comments, setComments] = useState(post?.comments || []);
  const [showAllLikes, setShowAllLikes] = useState(false);

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  const isOwner =
    post?.user?._id?.toString() === userId ||
    post?.user?.toString() === userId;

  const isLiked = likes.some((l) => {
    if (!l?.user) return false;
    if (typeof l.user === "string") return l.user === userId;
    if (typeof l.user === "object") return l.user._id === userId;
    return false;
  });

  const handleLike = async () => {
    try {
      if (isLiked) {
        setLikes((prev) =>
          prev.filter((l) =>
            typeof l.user === "string"
              ? l.user !== userId
              : l.user?._id !== userId
          )
        );
      } else {
        setLikes((prev) => [
          ...prev,
          { user: { _id: userId, username: username } }
        ]);
      }

      await API.post(`/posts/like/${post?._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleComment = async () => {
    if (!comment) return;

    const newComment = {
      _id: Date.now(),
      text: comment,
      user: {
        username: username || "User",
      },
    };

    setComments((prev) => [...prev, newComment]);
    setComment("");

    try {
      await API.post(`/posts/comment/${post?._id}`, {
        text: newComment.text,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      setPosts((prev) => prev.filter((p) => p._id !== post._id));
      await API.delete(`/posts/${post?._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const likeUsers = likes
    .map((l) =>
      typeof l.user === "object" ? l.user?.username : null
    )
    .filter(Boolean);

  return (
    <Card
      sx={{
        maxWidth: 450,
        width: "95%",
        margin: "25px auto",
        borderRadius: "22px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.4)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
        transition: "0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
        },
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          sx={{
            bgcolor: "#1976d2",
            width: 44,
            height: 44,
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          {post?.user?.username?.charAt(0)?.toUpperCase() || "U"}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Typography fontWeight="600" fontSize="15px">
            {post?.user?.username || "User"}
          </Typography>
          <Typography variant="caption" color="gray">
            {post?.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : ""}
          </Typography>
        </div>

        {isOwner && (
          <IconButton
            onClick={handleDelete}
            sx={{
              "&:hover": {
                background: "rgba(255,0,0,0.1)",
              },
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        )}
      </CardContent>

      {post?.image && (
        <div
          style={{
            width: "100%",
            height: "260px",
            overflow: "hidden",
            position: "relative",
          }}
          onDoubleClick={handleLike}
        >
          <img
            src={post.image}
            alt="post"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.07)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "70px",
              background:
                "linear-gradient(transparent, rgba(0,0,0,0.5))",
            }}
          />
        </div>
      )}

      <CardContent>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon
                  sx={{
                    color: "red",
                    transform: "scale(1.25)",
                    transition: "0.2s",
                  }}
                />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: "26px" }} />
              )}
            </IconButton>
            <Typography fontWeight="500">{likes.length}</Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => setShowComments(!showComments)}>
              <ChatBubbleOutlineIcon sx={{ fontSize: "26px" }} />
            </IconButton>
            <Typography fontWeight="500">{comments.length}</Typography>
          </div>
        </div>

        {likeUsers.length > 0 && (
          <Typography sx={{ fontSize: "13px", mt: 0.5 }}>
            ❤️ Liked by <b>{likeUsers[0]}</b>
            {likeUsers.length > 1 && !showAllLikes && (
              <>
                {" "}and{" "}
                <span
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setShowAllLikes((prev) => !prev)}
                >
                  {likeUsers.length - 1} others
                </span>
              </>
            )}
          </Typography>
        )}

        {showAllLikes && (
          <Typography
            sx={{ fontSize: "13px", mb: 1, cursor: "pointer" }}
            onClick={() => setShowAllLikes((prev) => !prev)}
          >
            {likeUsers.join(", ")}
          </Typography>
        )}

        <Typography sx={{ mt: 1 }}>
          <b>{post?.user?.username}</b> {post?.text}
        </Typography>

        {showComments && (
          <>
            <Divider sx={{ my: 1 }} />

            <div
              style={{
                maxHeight: "140px",
                overflowY: "auto",
              }}
            >
              {comments.map((c) => (
                <div
                  key={c._id}
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Avatar sx={{ width: 28, height: 28 }}>
                    {c?.user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </Avatar>

                  <div
                    style={{
                      background: "#eef2f7",
                      padding: "8px 12px",
                      borderRadius: "16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    <b style={{ fontSize: "12px" }}>
                      {c?.user?.username}
                    </b>
                    <div>{c?.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Add comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{
                  background: "#f5f7fa",
                  borderRadius: "12px",
                }}
              />

              <Button
                variant="contained"
                size="small"
                onClick={handleComment}
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                }}
              >
                Post
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}