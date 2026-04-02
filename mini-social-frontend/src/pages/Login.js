// // import { useState } from "react";
// // import API from "../api/api";
// // import { TextField, Button, Container } from "@mui/material";
// // import { useLocation, useNavigate, Link } from "react-router-dom";

// // export default function Login() {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const handleLogin = async () => {
// //     try {
// //       const res = await API.post("/auth/login", form);
// //       localStorage.setItem("token", res.data.token);
// //       navigate("/feed");
// //     } catch {
// //         setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
// //       <h2>Login</h2>

// //       {location.state?.msg && (
// //         <p style={{ color: "green" }}>{location.state.msg}</p>
// //       )}

// //       <TextField
// //         label="Email"
// //         fullWidth
// //         margin="normal"
// //         onChange={(e) =>
// //           setForm({ ...form, email: e.target.value })
// //         }
// //       />

// //       <TextField
// //         label="Password"
// //         type="password"
// //         fullWidth
// //         margin="normal"
// //         onChange={(e) =>
// //           setForm({ ...form, password: e.target.value })
// //         }
// //       />

// //       <Button
// //         variant="contained"
// //         fullWidth
// //         style={{ marginTop: "20px" }}
// //         onClick={handleLogin}
// //       >
// //         Login
// //       </Button>

// //       {/* ✅ Signup link */}
// //       <p style={{ marginTop: "10px" }}>
// //         Don't have an account?{" "}
// //         <Link to="/signup">Signup</Link>
// //       </p>
// //     </Container>
// //   );
// // }


// import { useState } from "react";
// import API from "../api/api";
// import { TextField, Button, Container } from "@mui/material";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       setError(""); // reset error

//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);

//       navigate("/feed");

//     } catch (err) {
//       setError(
//         err.response?.data?.msg || "Invalid email or password ❌"
//       );
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//       <h2>Login</h2>

//       {/* ✅ Signup success message */}
//       {location.state?.msg && (
//         <p style={{ color: "green" }}>{location.state.msg}</p>
//       )}

//       {/* ✅ Error message */}
//       {error && (
//         <p style={{ color: "red", marginTop: "10px" }}>
//           {error}
//         </p>
//       )}

//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         value={form.email}
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={form.password}
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <Button
//         variant="contained"
//         fullWidth
//         style={{ marginTop: "20px" }}
//         onClick={handleLogin}
//       >
//         Login
//       </Button>

//       {/* ✅ Signup link */}
//       <p style={{ marginTop: "15px" }}>
//         Don't have an account?{" "}
//         <Link to="/signup">Signup</Link>
//       </p>
//     </Container>
//   );
// }




// import { useState } from "react";
// import API from "../api/api";
// import { TextField, Button, Container } from "@mui/material";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       setError("");

//       const res = await API.post("/auth/login", form);

//       // ✅ token save
//       localStorage.setItem("token", res.data.token);

//       // ✅ userId save (IMPORTANT for like toggle)
//       localStorage.setItem("userId", res.data.user._id);

//       navigate("/feed");

//     } catch (err) {
//       setError(
//         err.response?.data?.msg || "Invalid email or password ❌"
//       );
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//       <h2>Login</h2>

//       {/* ✅ Signup success message */}
//       {location.state?.msg && (
//         <p style={{ color: "green" }}>{location.state.msg}</p>
//       )}

//       {/* ❌ Error message */}
//       {error && (
//         <p style={{ color: "red", marginTop: "10px" }}>
//           {error}
//         </p>
//       )}

//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         value={form.email}
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={form.password}
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <Button
//         variant="contained"
//         fullWidth
//         style={{ marginTop: "20px" }}
//         onClick={handleLogin}
//       >
//         Login
//       </Button>

//       {/* ✅ Signup link */}
//       <p style={{ marginTop: "15px" }}>
//         Don't have an account?{" "}
//         <Link to="/signup">Signup</Link>
//       </p>
//     </Container>
//   );
// }




// import { useState } from "react";
// import API from "../api/api";
// import { TextField, Button, Container } from "@mui/material";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       setError("");

//       const res = await API.post("/auth/login", form);

//     //   // 🔥 DEBUG (check console)
//     //   console.log("LOGIN RESPONSE:", res.data);

//       // ✅ token save
//       localStorage.setItem("token", res.data.token);

//       // ✅ SAFE userId save (error नहीं आएगा)
//       if (res.data.user && res.data.user._id) {
//         localStorage.setItem("userId", res.data.user._id);
//       } else {
//         console.log("❌ user नहीं आया backend से");
//       }

//       navigate("/feed");

//     } catch (err) {
//       setError(
//         err.response?.data?.msg || "Invalid email or password ❌"
//       );
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//       <h2>Login</h2>

//       {/* ✅ Signup success message */}
//       {location.state?.msg && (
//         <p style={{ color: "green" }}>{location.state.msg}</p>
//       )}

//       {/* ❌ Error message */}
//       {error && (
//         <p style={{ color: "red", marginTop: "10px" }}>
//           {error}
//         </p>
//       )}

//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         value={form.email}
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={form.password}
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <Button
//         variant="contained"
//         fullWidth
//         style={{ marginTop: "20px" }}
//         onClick={handleLogin}
//       >
//         Login
//       </Button>

//       {/* ✅ Signup link */}
//       <p style={{ marginTop: "15px" }}>
//         Don't have an account?{" "}
//         <Link to="/signup">Signup</Link>
//       </p>
//     </Container>
//   );
// }



// import { useState } from "react";
// import API from "../api/api";
// import {
//   TextField,
//   Button,
//   Container,
//   Paper,
//   Typography,
//   Box,
//   Link as MuiLink,
//   CircularProgress,
// } from "@mui/material";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       setError("");
//       setLoading(true);

//       const res = await API.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       if (res.data.user && res.data.user._id) {
//         localStorage.setItem("userId", res.data.user._id);
//       }
//       navigate("/feed");
//     } catch (err) {
//       setError(err.response?.data?.msg || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//       }}
//     >
//       <Paper
//         elevation={8}
//         sx={{
//           width: "100%",
//           px: 4,
//           py: 5,
//           borderRadius: 3,
//           boxShadow: "0 20px 45px rgba(15, 23, 42, 0.25)",
//           background: "linear-gradient(160deg, #ffffff 0%, #f3f6ff 100%)",
//         }}
//       >
//         <Typography variant="h4" fontWeight={700} gutterBottom>
//           Welcome Back
//         </Typography>
//         <Typography variant="body1" color="text.secondary" mb={3}>
//           Sign in to continue to Mini Social.
//         </Typography>

//         {location.state?.msg && (
//           <Box
//             mb={2}
//             p={1.5}
//             borderRadius={1}
//             sx={{ backgroundColor: "#e6ffed", color: "#027a48" }}
//           >
//             {location.state.msg}
//           </Box>
//         )}

//         {error && (
//           <Box
//             mb={2}
//             p={1.5}
//             borderRadius={1}
//             sx={{ backgroundColor: "#ffe6e6", color: "#b42318" }}
//           >
//             {error}
//           </Box>
//         )}

//         <TextField
//           label="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           fullWidth
//           margin="normal"
//           autoComplete="email"
//         />

//         <TextField
//           label="Password"
//           type="password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           fullWidth
//           margin="normal"
//           autoComplete="current-password"
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           sx={{ mt: 2, py: 1.3 }}
//           onClick={handleLogin}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={22} color="inherit" /> : "Login"}
//         </Button>

//         <Box mt={3} textAlign="center">
//           <Typography variant="body2" color="text.secondary">
//             Don’t have an account?{' '}
//             <MuiLink component={Link} to="/signup" underline="hover">
//               Signup
//             </MuiLink>
//           </Typography>
//         </Box>
//       </Paper>
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
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
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

      // 🔥 FIX (IMPORTANT)
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