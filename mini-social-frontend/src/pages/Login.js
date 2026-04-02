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
import {  useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      if (res.data.user && res.data.user._id) {
        localStorage.setItem("userId", res.data.user._id);
      }

      // FIX (IMPORTANT)
      if (res.data.user && res.data.user.username) {
        localStorage.setItem("username", res.data.user.username);
      }

      navigate("/feed");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", px: 2 }}>
      <Paper elevation={8} sx={{ width: "100%", px: 4, py: 5, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={700}>Welcome Back</Typography>

        {error && <Box mt={2}>{error}</Box>}

        <TextField label="Email" fullWidth margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <TextField label="Password" type="password" fullWidth margin="normal"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button fullWidth variant="contained" onClick={handleLogin} disabled={loading}>
          {loading ? <CircularProgress size={20} /> : "Login"}
        </Button>

        <Box mt={2}>
          <MuiLink component={Link} to="/signup">Signup</MuiLink>
        </Box>
      </Paper>
    </Container>
  );
}