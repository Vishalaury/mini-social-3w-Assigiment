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
        background: "linear-gradient(135deg, #eef2f7, #e3f2fd)",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Toolbar />

      <Container
        maxWidth="sm"
        sx={{
          pb: 12,
        }}
      >
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <Box key={i} sx={{ mb: 4 }}>
                <Skeleton
                  variant="rectangular"
                  height={260}
                  sx={{
                    borderRadius: "20px",
                  }}
                />
                <Skeleton sx={{ mt: 1 }} />
                <Skeleton width="60%" />
              </Box>
            ))}
          </>
        ) : posts.length > 0 ? (
          posts.map((p) => (
            <Box
              key={p._id}
              sx={{
                mb: 4,
                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <PostCard
                post={p}
                fetchPosts={fetchPosts}
                setPosts={setPosts}
              />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              mt: 14,
              opacity: 0.9,
            }}
          >
            <Typography variant="h5" fontWeight="600">
              No posts yet 🚀
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Be the first to share something!
            </Typography>
          </Box>
        )}
      </Container>

      <Button
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 35,
          right: 35,
          borderRadius: "50%",
          width: 72,
          height: 72,
          fontSize: "34px",
          fontWeight: "bold",
          background: "linear-gradient(135deg, #ff6a00, #ee0979)",
          color: "#fff",
          boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
          transition: "0.25s ease",

          "&:hover": {
            transform: "scale(1.15)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.45)",
          },
        }}
      >
        +
      </Button>

      <CreatePostModal
        open={open}
        handleClose={() => setOpen(false)}
        fetchPosts={fetchPosts}
      />
    </div>
  );
}