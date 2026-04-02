





// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

// export default function Navbar() {
//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         top: 0,
//         left: 0,
//         width: "100%",
//         borderRadius: 0,
//         backdropFilter: "blur(12px)",
//         background: "rgba(33,150,243,0.9)",
//         borderBottom: "1px solid rgba(255,255,255,0.15)",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
//         zIndex: 1300,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           px: 2,
//           minHeight: "64px", // 🔥 fixed height
//         }}
//       >
//         {/* LEFT LOGO */}
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: "700",
//             letterSpacing: "1px",
//             cursor: "pointer",
//             color: "#fff",
//             transition: "0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//             },
//           }}
//         >
//           🚀 Mini Social
//         </Typography>

//         {/* RIGHT BUTTONS */}
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button
//             onClick={() => (window.location.href = "/feed")}
//             sx={{
//               color: "#fff",
//               textTransform: "none",
//               fontWeight: "600",
//               borderRadius: "10px",
//               px: 2,
//               "&:hover": {
//                 background: "rgba(255,255,255,0.2)",
//               },
//             }}
//           >
//             Feed
//           </Button>

//           <Button
//             onClick={logout}
//             sx={{
//               color: "#fff",
//               textTransform: "none",
//               fontWeight: "600",
//               borderRadius: "10px",
//               px: 2,
//               background: "rgba(255,255,255,0.15)",
//               "&:hover": {
//                 background: "rgba(255,255,255,0.3)",
//               },
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }


import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar
} from "@mui/material";

export default function Navbar() {
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        background: "rgba(25,118,210,0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            letterSpacing: "1px",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          🚀 Mini Social
        </Typography>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          {/* 👤 USER AVATAR */}
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "#fff",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            {username?.charAt(0)?.toUpperCase() || "U"}
          </Avatar>

          {/* USER NAME */}
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {username || "User"}
          </Typography>

          {/* FEED BUTTON */}
          <Button
            onClick={() => (window.location.href = "/feed")}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "10px",
              "&:hover": {
                background: "rgba(255,255,255,0.2)",
              },
            }}
          >
            Feed
          </Button>

          {/* LOGOUT */}
          <Button
            onClick={logout}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.2)",
              "&:hover": {
                background: "rgba(255,255,255,0.35)",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}