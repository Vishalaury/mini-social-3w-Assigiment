

// import { useState } from "react";
// import API from "../api/api";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   CircularProgress
// } from "@mui/material";

// export default function CreatePostModal({
//   open = false, // ✅ safety fix
//   handleClose = () => {}, // ✅ safety fix
//   fetchPosts = () => {}, // ✅ safety fix
// }) {
//   const [text, setText] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handlePost = async () => {
//     if (!text && !file) return;

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("text", text);
//       if (file) formData.append("image", file);

//       await API.post("/posts", formData);

//       setText("");
//       setFile(null);
//       fetchPosts();
//       handleClose();
//     } catch (err) {
//       console.log("Post error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal open={Boolean(open)} onClose={handleClose}>
//       <Box
//         sx={{
//           width: 400,
//           maxWidth: "95%",
//           margin: "100px auto",
//           background: "#fff",
//           borderRadius: "16px",
//           padding: "20px",
//           boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <Avatar />
//           <Typography fontWeight="bold">Create Post</Typography>
//         </div>

//         {/* INPUT */}
//         <TextField
//           fullWidth
//           multiline
//           rows={3}
//           placeholder="Share your thoughts..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           sx={{ marginTop: 2 }}
//         />

//         {/* IMAGE PREVIEW */}
//         {file && (
//           <img
//             src={URL.createObjectURL(file)}
//             alt="preview"
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//               borderRadius: "10px",
//               marginTop: "10px",
//             }}
//           />
//         )}

//         {/* ACTION */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "15px",
//           }}
//         >
//           <label style={{ cursor: "pointer", color: "#1976d2" }}>
//             📷 Add Photo
//             <input
//               type="file"
//               hidden
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </label>

//           <Button
//             variant="contained"
//             onClick={handlePost}
//             disabled={loading}
//             sx={{ borderRadius: "20px" }}
//           >
//             {loading ? <CircularProgress size={20} /> : "Post"}
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// }





import { useState } from "react";
import API from "../api/api";
import {
  Modal,
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  CircularProgress,
  Divider
} from "@mui/material";

export default function CreatePostModal({
  open = false,
  handleClose = () => {},
  fetchPosts = () => {},
}) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    if (!text && !file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("text", text);
      if (file) formData.append("image", file);

      await API.post("/posts", formData);

      setText("");
      setFile(null);
      fetchPosts();
      handleClose();
    } catch (err) {
      console.log("Post error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={Boolean(open)} onClose={handleClose}>
      <Box
        sx={{
          width: 450,
          maxWidth: "95%",
          margin: "80px auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* 🔥 HEADER */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar />
          <Typography fontWeight="bold" fontSize="18px">
            Create Post
          </Typography>
        </div>

        <Divider sx={{ marginY: 2 }} />

        {/* 🔥 TEXT INPUT */}
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            background: "#f5f5f5",
            borderRadius: "10px",
          }}
        />

        {/* 🖼 IMAGE PREVIEW */}
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
              marginTop: "15px",
            }}
          />
        )}

        {/* 🔥 ACTIONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          {/* Upload */}
          <label
            style={{
              cursor: "pointer",
              color: "#1976d2",
              fontWeight: "500",
            }}
          >
            📷 Add Photo
            <input
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          {/* Post button */}
          <Button
            variant="contained"
            onClick={handlePost}
            disabled={loading}
            sx={{
              borderRadius: "20px",
              paddingX: "20px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            {loading ? <CircularProgress size={20} /> : "Post"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}