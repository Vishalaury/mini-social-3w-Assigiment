




// import { useEffect, useState } from "react";
// import API from "../api/api";
// import PostCard from "../components/PostCard";
// import CreatePostModal from "../components/CreatePostModal";
// import Navbar from "../components/Navbar";
// import {
//   Container,
//   Button,
//   Typography,
//   Box,
//   Skeleton,
//   Toolbar   // 🔥 add this
// } from "@mui/material";

// export default function Feed() {
//   const [posts, setPosts] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get("/posts");
//       setPosts(res.data);
//     } catch (err) {
//       console.log("API ERROR:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div style={{ background: "#f5f7fa", minHeight: "100vh" }}>
//       <Navbar />

//       {/* 🔥 PERFECT FIX */}
//       <Toolbar />

//       <Container
//         maxWidth="sm"
//         sx={{
//           pb: 8,
//         }}
//       >
//         {loading ? (
//           <>
//             {[1, 2, 3].map((i) => (
//               <Box key={i} sx={{ mb: 2 }}>
//                 <Skeleton
//                   variant="rectangular"
//                   height={260}
//                   sx={{ borderRadius: "18px" }}
//                 />
//                 <Skeleton sx={{ mt: 1 }} />
//                 <Skeleton width="60%" />
//               </Box>
//             ))}
//           </>
//         ) : posts.length > 0 ? (
//           posts.map((p) => (
//             <PostCard
//               key={p._id}
//               post={p}
//               fetchPosts={fetchPosts}
//               setPosts={setPosts}
//             />
//           ))
//         ) : (
//           <Box sx={{ textAlign: "center", mt: 8, opacity: 0.7 }}>
//             <Typography variant="h5" fontWeight="bold">
//               🚀 No posts yet
//             </Typography>
//             <Typography variant="body2" sx={{ mt: 1 }}>
//               Be the first to share something amazing!
//             </Typography>
//           </Box>
//         )}
//       </Container>

//       <Button
//         onClick={() => setOpen(true)}
//         sx={{
//           position: "fixed",
//           bottom: 25,
//           right: 25,
//           borderRadius: "50%",
//           width: 60,
//           height: 60,
//           fontSize: "28px",
//           background: "linear-gradient(45deg, #2196F3, #21CBF3)",
//           color: "#fff",
//           boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
//           "&:hover": {
//             transform: "scale(1.1)",
//           },
//         }}
//       >
//         +
//       </Button>

//       <CreatePostModal
//         open={open}
//         handleClose={() => setOpen(false)}
//         fetchPosts={fetchPosts}
//       />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import API from "../api/api";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import Navbar from "../components/Navbar";

import {
  Container,
  Button,
  Typography,
  Box,
  Skeleton,
  Toolbar
} from "@mui/material";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log("API ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh"
      }}
    >
      <Navbar />

      {/* navbar gap fix */}
      <Toolbar />

      <Container
        maxWidth="sm"
        sx={{
          pb: 10,
        }}
      >
        {/* 🔄 LOADING */}
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Skeleton
                  variant="rectangular"
                  height={260}
                  sx={{ borderRadius: "20px" }}
                />
                <Skeleton sx={{ mt: 1 }} />
                <Skeleton width="60%" />
              </Box>
            ))}
          </>
        ) : posts.length > 0 ? (
          posts.map((p) => (
            <PostCard
              key={p._id}
              post={p}
              fetchPosts={fetchPosts}
              setPosts={setPosts}
            />
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              mt: 10,
              opacity: 0.8
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              🚀 No posts yet
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Be the first to share something!
            </Typography>
          </Box>
        )}
      </Container>

      {/* ➕ FLOATING BUTTON (TaskPlanet style) */}
      <Button
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          borderRadius: "50%",
          width: 65,
          height: 65,
          fontSize: "30px",
          background: "linear-gradient(45deg, #1976d2, #42a5f5)",
          color: "#fff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          transition: "0.2s",

          "&:hover": {
            transform: "scale(1.1)",
            background: "linear-gradient(45deg, #1565c0, #2196f3)",
          },
        }}
      >
        +
      </Button>

      {/* MODAL */}
      <CreatePostModal
        open={open}
        handleClose={() => setOpen(false)}
        fetchPosts={fetchPosts}
      />
    </div>
  );
}