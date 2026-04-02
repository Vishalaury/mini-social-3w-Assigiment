// import { useState } from "react";
// import API from "../api/api";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   Avatar,
//   IconButton,
//   Divider
// } from "@mui/material";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

// export default function PostCard({
//   post = {},
//   fetchPosts = () => {},
//   setPosts = () => {}
// }) {
//   const [comment, setComment] = useState("");
//   const [showComments, setShowComments] = useState(false);

//   const [likes, setLikes] = useState(post?.likes || []);
//   const [comments, setComments] = useState(post?.comments || []);

//   const [showAllLikes, setShowAllLikes] = useState(false);

//   const userId = localStorage.getItem("userId");
//   const username = localStorage.getItem("username");

//   const isOwner =
//     post?.user?._id?.toString() === userId ||
//     post?.user?.toString() === userId;

//   const isLiked = likes.some((l) => {
//     if (!l?.user) return false;
//     if (typeof l.user === "string") return l.user === userId;
//     if (typeof l.user === "object") return l.user._id === userId;
//     return false;
//   });

//   //  LIKE
//   const handleLike = async () => {
//     try {
//       if (isLiked) {
//         setLikes((prev) =>
//           prev.filter((l) =>
//             typeof l.user === "string"
//               ? l.user !== userId
//               : l.user?._id !== userId
//           )
//         );
//       } else {
//         setLikes((prev) => [
//           ...prev,
//           { user: { _id: userId, username: username } }
//         ]);
//       }

//       await API.post(`/posts/like/${post?._id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   //  COMMENT
//   const handleComment = async () => {
//     if (!comment) return;

//     const newComment = {
//       _id: Date.now(),
//       text: comment,
//       user: {
//         username: username || "User",
//       },
//     };

//     setComments((prev) => [...prev, newComment]);
//     setComment("");

//     try {
//       await API.post(`/posts/comment/${post?._id}`, {
//         text: newComment.text,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🗑 DELETE
//   const handleDelete = async () => {
//     try {
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//       await API.delete(`/posts/${post?._id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const likeUsers = likes
//     .map((l) =>
//       typeof l.user === "object" ? l.user?.username : null
//     )
//     .filter(Boolean);

//   return (
//     <Card
//       sx={{
//         maxWidth: 450,
//         width: "95%",
//         margin: "20px auto",
//         borderRadius: "20px",
//         overflow: "hidden",
//         background: "#fff",
//         boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
//       }}
//     >
//       {/* HEADER */}
//       <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//         <Avatar sx={{ bgcolor: "#1976d2" }}>
//           {post?.user?.username?.charAt(0)?.toUpperCase() || "U"}
//         </Avatar>

//         <div style={{ flex: 1 }}>
//           <Typography fontWeight="600">
//             {post?.user?.username || "User"}
//           </Typography>
//           <Typography variant="caption" color="gray">
//             {post?.createdAt
//               ? new Date(post.createdAt).toLocaleString()
//               : ""}
//           </Typography>
//         </div>

//         {isOwner && (
//           <IconButton onClick={handleDelete} color="error">
//             <DeleteIcon />
//           </IconButton>
//         )}
//       </CardContent>

//       {/* IMAGE */}
//       {post?.image && (
//         <div
//           style={{ width: "100%", height: "260px", overflow: "hidden" }}
//           onDoubleClick={handleLike}
//         >
//           <img
//            src={`https://mini-social-3w-assigiment.onrender.com/uploads/${post.image}`}
//             alt="post"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         </div>
//       )}

//       {/* CONTENT */}
//       <CardContent>
//         {/* ACTIONS */}
//         <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <IconButton onClick={handleLike}>
//               {isLiked ? (
//                 <FavoriteIcon sx={{ color: "red" }} />
//               ) : (
//                 <FavoriteBorderIcon />
//               )}
//             </IconButton>
//             <Typography>{likes.length}</Typography>
//           </div>

//           <div style={{ display: "flex", alignItems: "center" }}>
//             <IconButton onClick={() => setShowComments(!showComments)}>
//               <ChatBubbleOutlineIcon />
//             </IconButton>
//             <Typography>{comments.length}</Typography>
//           </div>
//         </div>

//         {/* LIKE TEXT */}
//         {likeUsers.length > 0 && (
//           <Typography sx={{ fontSize: "13px", mt: 0.5 }}>
//             ❤️ Liked by <b>{likeUsers[0]}</b>
//             {likeUsers.length > 1 && !showAllLikes && (
//               <>
//                 {" "}and{" "}
//                 <span
//                   style={{ fontWeight: "bold", cursor: "pointer" }}
//                   onClick={() => setShowAllLikes((prev) => !prev)}
//                 >
//                   {likeUsers.length - 1} others
//                 </span>
//               </>
//             )}
//           </Typography>
//         )}

//         {showAllLikes && (
//           <Typography
//             sx={{ fontSize: "13px", mb: 1, cursor: "pointer" }}
//             onClick={() => setShowAllLikes((prev) => !prev)}
//           >
//             {likeUsers.join(", ")}
//           </Typography>
//         )}

//         {/* TEXT */}
//         <Typography sx={{ mt: 1 }}>
//           <b>{post?.user?.username}</b> {post?.text}
//         </Typography>

//         {/* COMMENTS */}
//         {showComments && (
//           <>
//             <Divider sx={{ my: 1 }} />

//             <div style={{ maxHeight: "120px", overflowY: "auto" }}>
//               {comments.map((c) => (
//                 <div
//                   key={c._id}
//                   style={{ display: "flex", gap: "8px", marginBottom: "8px" }}
//                 >
//                   <Avatar sx={{ width: 26, height: 26 }}>
//                     {c?.user?.username?.charAt(0)?.toUpperCase() || "U"}
//                   </Avatar>

//                   <div
//                     style={{
//                       background: "#f5f5f5",
//                       padding: "6px 10px",
//                       borderRadius: "12px",
//                     }}
//                   >
//                     <b style={{ fontSize: "12px" }}>
//                       {c?.user?.username}
//                     </b>
//                     <div>{c?.text}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
//               <TextField
//                 fullWidth
//                 size="small"
//                 placeholder="Add comment..."
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               />

//               <Button variant="contained" size="small" onClick={handleComment}>
//                 Post
//               </Button>
//             </div>
//           </>
//         )}
//       </CardContent>
//     </Card>
//   );
// }





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

  // ❤️ LIKE
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

  // 💬 COMMENT
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

  // 🗑 DELETE
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
        margin: "20px auto",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      }}
    >
      {/* HEADER */}
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ bgcolor: "#1976d2" }}>
          {post?.user?.username?.charAt(0)?.toUpperCase() || "U"}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Typography fontWeight="600">
            {post?.user?.username || "User"}
          </Typography>
          <Typography variant="caption" color="gray">
            {post?.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : ""}
          </Typography>
        </div>

        {isOwner && (
          <IconButton onClick={handleDelete} color="error">
            <DeleteIcon />
          </IconButton>
        )}
      </CardContent>

      {/* ✅ IMAGE (FIXED CLOUDINARY) */}
      {post?.image && (
        <div
          style={{ width: "100%", height: "260px", overflow: "hidden" }}
          onDoubleClick={handleLike}
        >
          <img
            src={post.image}   // 🔥 FINAL FIX
            alt="post"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* CONTENT */}
      <CardContent>
        {/* ACTIONS */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Typography>{likes.length}</Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => setShowComments(!showComments)}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </div>
        </div>

        {/* LIKE TEXT */}
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

        {/* TEXT */}
        <Typography sx={{ mt: 1 }}>
          <b>{post?.user?.username}</b> {post?.text}
        </Typography>

        {/* COMMENTS */}
        {showComments && (
          <>
            <Divider sx={{ my: 1 }} />

            <div style={{ maxHeight: "120px", overflowY: "auto" }}>
              {comments.map((c) => (
                <div
                  key={c._id}
                  style={{ display: "flex", gap: "8px", marginBottom: "8px" }}
                >
                  <Avatar sx={{ width: 26, height: 26 }}>
                    {c?.user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </Avatar>

                  <div
                    style={{
                      background: "#f5f5f5",
                      padding: "6px 10px",
                      borderRadius: "12px",
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
              />

              <Button variant="contained" size="small" onClick={handleComment}>
                Post
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}