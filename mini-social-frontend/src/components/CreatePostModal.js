// import { useState } from "react";
// import API from "../api/api";
// import { Modal, Box, TextField, Button } from "@mui/material";

// export default function CreatePostModal({ open = false, handleClose, fetchPosts }) {
//   const [text, setText] = useState("");

//   const handlePost = async () => {
//     if (!text) return;

//     await API.post("/posts", { text });
//     setText("");
//     fetchPosts();
//     handleClose();
//   };

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Box sx={{ width: 300, margin: "100px auto", background: "#fff", p: 2 }}>
//         <TextField
//           fullWidth
//           placeholder="Write post..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <Button onClick={handlePost}>Post</Button>
//       </Box>
//     </Modal>
//   );
// }



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

// export default function CreatePostModal({ open, handleClose, fetchPosts }) {
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
//     <Modal open={open} onClose={handleClose}>
//       <Box
//         sx={{
//           width: 400,
//           maxWidth: "95%",
//           margin: "100px auto",
//           background: "#fff",
//           borderRadius: "16px",
//           padding: "20px",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <Avatar />
//           <Typography fontWeight="bold">Create Post</Typography>
//         </div>

//         {/* TEXT */}
//         <TextField
//           fullWidth
//           multiline
//           rows={3}
//           placeholder="Write something..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           sx={{ mt: 2 }}
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

//         {/* ACTIONS */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "15px",
//           }}
//         >
//           {/* 📷 FILE BUTTON */}
//           <label style={{ cursor: "pointer", color: "#1976d2" }}>
//             📷 Add Photo
//             <input
//               type="file"
//               hidden
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </label>

//           {/* POST BUTTON */}
//           <Button onClick={handlePost} disabled={loading}>
//             {loading ? <CircularProgress size={20} /> : "Post"}
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// }


// import { useState } from "react";
// import API from "../api/api";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   CircularProgress,
//   IconButton
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function CreatePostModal({
//   open = false,
//   handleClose = () => {},
//   fetchPosts = () => {},
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
//           width: 420,
//           maxWidth: "95%",
//           margin: "80px auto",
//           borderRadius: "20px",
//           padding: "20px",
//           backdropFilter: "blur(15px)", // 🔥 glass effect
//           background: "rgba(255,255,255,0.9)",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//           animation: "fadeIn 0.3s ease",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <Avatar />
//           <Typography fontWeight="bold" fontSize="16px">
//             Create Post
//           </Typography>

//           <div style={{ marginLeft: "auto" }}>
//             <IconButton onClick={handleClose}>
//               <CloseIcon />
//             </IconButton>
//           </div>
//         </div>

//         {/* TEXT INPUT */}
//         <TextField
//           fullWidth
//           multiline
//           rows={3}
//           placeholder="What's on your mind?"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           sx={{
//             mt: 2,
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "12px",
//               background: "#f9fafc",
//             },
//           }}
//         />

//         {/* IMAGE PREVIEW */}
//         {file && (
//           <div style={{ marginTop: 12 }}>
//             <img
//               src={URL.createObjectURL(file)}
//               alt="preview"
//               style={{
//                 width: "100%",
//                 height: "220px",
//                 objectFit: "cover",
//                 borderRadius: "12px",
//                 transition: "0.3s",
//               }}
//             />
//           </div>
//         )}

//         {/* ACTION BAR */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: 15,
//           }}
//         >
//           {/* FILE BUTTON */}
//           <label
//             style={{
//               cursor: "pointer",
//               fontWeight: "500",
//               color: "#1976d2",
//               padding: "6px 10px",
//               borderRadius: "8px",
//               transition: "0.2s",
//             }}
//           >
//             📷 Add Photo
//             <input
//               type="file"
//               hidden
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </label>

//           {/* POST BUTTON */}
//           <Button
//             onClick={handlePost}
//             disabled={loading}
//             sx={{
//               borderRadius: "25px",
//               padding: "6px 18px",
//               textTransform: "none",
//               fontWeight: "600",
//               background: "linear-gradient(45deg, #2196F3, #21CBF3)",
//               color: "#fff",
//               boxShadow: "0 4px 12px rgba(33,150,243,0.4)",
//               "&:hover": {
//                 background: "linear-gradient(45deg, #1976D2, #00B0FF)",
//               },
//             }}
//           >
//             {loading ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : "Post"}
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// }





// import { useState } from "react";
// import API from "../api/api";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   CircularProgress,
//   IconButton
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function CreatePostModal({
//   open = false,
//   handleClose = () => {},
//   fetchPosts = () => {},
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
//           width: 420,
//           maxWidth: "95%",
//           margin: "60px auto",
//           borderRadius: "20px",
//           overflow: "hidden",
//           backdropFilter: "blur(15px)",
//           background: "rgba(255,255,255,0.95)",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", padding: "12px 16px" }}>
//           <Avatar />
//           <Typography fontWeight="bold" sx={{ ml: 1 }}>
//             Create Post
//           </Typography>

//           <IconButton onClick={handleClose} sx={{ marginLeft: "auto" }}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {/* IMAGE AREA (TOP PRIORITY) */}
//         <div
//           style={{
//             width: "100%",
//             height: file ? "260px" : "150px",
//             background: "#f5f5f5",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           {file ? (
//             <img
//               src={URL.createObjectURL(file)}
//               alt="preview"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           ) : (
//             <label style={{ cursor: "pointer", color: "#1976d2" }}>
//               📷 Add Photo
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </label>
//           )}
//         </div>

//         {/* CAPTION INPUT (SMALL + CLEAN) */}
//         <div style={{ padding: "12px 16px" }}>
//           <TextField
//             fullWidth
//             variant="standard"
//             placeholder="Write a caption..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             InputProps={{
//               disableUnderline: true,
//             }}
//             sx={{
//               fontSize: "14px",
//               background: "#f9fafc",
//               borderRadius: "10px",
//               padding: "8px 12px",
//             }}
//           />
//         </div>

//         {/* ACTION */}
//         <div
//           style={{
//             padding: "12px 16px",
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Button
//             onClick={handlePost}
//             disabled={loading}
//             sx={{
//               borderRadius: "20px",
//               textTransform: "none",
//               fontWeight: "600",
//               padding: "6px 20px",
//               background: "linear-gradient(45deg, #2196F3, #21CBF3)",
//               color: "#fff",
//             }}
//           >
//             {loading ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : "Post"}
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// }




// import { useState } from "react";
// import API from "../api/api";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   CircularProgress,
//   IconButton
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function CreatePostModal({
//   open = false,
//   handleClose = () => {},
//   fetchPosts = () => {},
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
//           width: 420,
//           maxWidth: "95%",
//           margin: "60px auto",
//           borderRadius: "20px",
//           overflow: "hidden",
//           backdropFilter: "blur(15px)",
//           background: "rgba(255,255,255,0.95)",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", padding: "12px 16px" }}>
//           <Avatar />
//           <Typography fontWeight="bold" sx={{ ml: 1 }}>
//             Create Post
//           </Typography>

//           <IconButton onClick={handleClose} sx={{ marginLeft: "auto" }}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {/* IMAGE */}
//         <div
//           style={{
//             width: "100%",
//             height: file ? "260px" : "150px",
//             background: "#f5f5f5",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           {file ? (
//             <img
//               src={URL.createObjectURL(file)}
//               alt="preview"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           ) : (
//             <label style={{ cursor: "pointer", color: "#1976d2" }}>
//               📷 Add Photo
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </label>
//           )}
//         </div>

//         {/* CAPTION */}
//         <div style={{ padding: "12px 16px" }}>
//           <TextField
//             fullWidth
//             variant="standard"
//             placeholder="Write a caption..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             InputProps={{ disableUnderline: true }}
//             sx={{
//               background: "#f9fafc",
//               borderRadius: "10px",
//               padding: "8px 12px",
//             }}
//           />
//         </div>

//         {/* BUTTON */}
//         <div style={{ padding: "12px 16px", textAlign: "right" }}>
//           <Button
//             onClick={handlePost}
//             disabled={loading}
//             sx={{
//               borderRadius: "20px",
//               textTransform: "none",
//               fontWeight: "600",
//               background: "linear-gradient(45deg, #2196F3, #21CBF3)",
//               color: "#fff",
//             }}
//           >
//             {loading ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : "Post"}
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// }






// import { useState } from "react";
// import API from "../api/api";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   CircularProgress,
//   IconButton
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function CreatePostModal({
//   open = false,
//   handleClose = () => {},
//   fetchPosts = () => {},
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
//           width: 420,
//           maxWidth: "95%",
//           margin: "60px auto",
//           borderRadius: "20px",
//           overflow: "hidden",
//           backdropFilter: "blur(15px)",
//           background: "rgba(255,255,255,0.95)",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//         }}
//       >
//         {/* HEADER */}
//         <div style={{ display: "flex", alignItems: "center", padding: "12px 16px" }}>
//           <Avatar />
//           <Typography fontWeight="bold" sx={{ ml: 1 }}>
//             Create Post
//           </Typography>

//           <IconButton onClick={handleClose} sx={{ marginLeft: "auto" }}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {/* IMAGE */}
//         <div
//           style={{
//             width: "100%",
//             height: file ? "260px" : "150px",
//             background: "#f5f5f5",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           {file ? (
//             <img
//               src={URL.createObjectURL(file)}
//               alt="preview"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           ) : (
//             <label style={{ cursor: "pointer", color: "#1976d2" }}>
//               📷 Add Photo
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </label>
//           )}
//         </div>

//         {/* 🔥 PREMIUM CAPTION BOX */}
//         <div style={{ padding: "14px 16px" }}>
//           <div
//             style={{
//               background: "#ffffff",
//               borderRadius: "12px",
//               padding: "10px 14px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//               border: "1px solid #eee",
//             }}
//           >
//             <Typography
//               variant="caption"
//               sx={{
//                 color: "gray",
//                 fontSize: "11px",
//                 display: "block",
//                 marginBottom: "4px",
//               }}
//             >
//               Caption
//             </Typography>

//             <TextField
//               fullWidth
//               variant="standard"
//               placeholder="Write something..."
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               InputProps={{
//                 disableUnderline: true,
//                 style: {
//                   fontSize: "14px",
//                 },
//               }}
//             />
//           </div>
//         </div>

//         {/* BUTTON */}
//         <div style={{ padding: "12px 16px", textAlign: "right" }}>
//           <Button
//             onClick={handlePost}
//             disabled={loading}
//             sx={{
//               borderRadius: "20px",
//               textTransform: "none",
//               fontWeight: "600",
//               padding: "6px 20px",
//               background: "linear-gradient(45deg, #2196F3, #21CBF3)",
//               color: "#fff",
//               boxShadow: "0 4px 12px rgba(33,150,243,0.3)",
//             }}
//           >
//             {loading ? (
//               <CircularProgress size={20} sx={{ color: "#fff" }} />
//             ) : (
//               "Post"
//             )}
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