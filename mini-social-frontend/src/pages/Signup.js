// import { useState } from "react";
// import API from "../api/api";
// import { TextField, Button, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {

//   const navigate = useNavigate(); // 

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleSignup = async () => {
//     try {
//       await API.post("/auth/signup", form);

//       alert("Signup successful ✅");

//       // 👉 Login page pe redirect
//       navigate("/");

//     } catch (err) {
//       alert("Signup failed ❌");
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//       <h2>Signup</h2>

//       <TextField
//         label="Username"
//         fullWidth
//         margin="normal"
//         onChange={(e) =>
//           setForm({ ...form, username: e.target.value })
//         }
//       />

//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <Button
//         variant="contained"
//         fullWidth
//         style={{ marginTop: "20px" }}
//         onClick={handleSignup}
//       >
//         Signup
//       </Button>
//     </Container>
//   );
// }




import { useState } from "react";
import API from "../api/api";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Link as MuiLink,
  CircularProgress,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      setError("");
      setLoading(true);

      await API.post("/auth/signup", form);

      navigate("/", {
        state: { msg: "Signup successful, please login ✅" },
      });
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.25)",
          background: "linear-gradient(165deg, #f7f8ff 0%, #f6fff2 100%)",
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Create Your Account
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Join the Mini Social community in seconds.
        </Typography>

        {error && (
          <Box
            mb={2}
            p={1.5}
            borderRadius={1}
            sx={{ backgroundColor: "#ffe6e6", color: "#b42318" }}
          >
            {error}
          </Box>
        )}

        <TextField
          label="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          fullWidth
          margin="normal"
          autoComplete="username"
        />

        <TextField
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          fullWidth
          margin="normal"
          autoComplete="email"
        />

        <TextField
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          fullWidth
          margin="normal"
          autoComplete="new-password"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mt: 2, py: 1.3 }}
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? <CircularProgress size={22} color="inherit" /> : "Signup"}
        </Button>

        <Box mt={3} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Already have an account?{' '}
            <MuiLink component={Link} to="/" underline="hover">
              Login
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}