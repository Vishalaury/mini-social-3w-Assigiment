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
        // 🔥 PREMIUM GRADIENT NAVBAR
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
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
            transition: "0.3s",

            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          🚀 Mini Social
        </Typography>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          
          {/* USER AVATAR */}
          <Avatar
            sx={{
              width: 34,
              height: 34,
              fontWeight: "bold",

              // 🔥 gradient avatar
              background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
              color: "#333",

              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
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
              opacity: 0.9,
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
              borderRadius: "12px",
              px: 2,
              transition: "0.25s",

              "&:hover": {
                background: "rgba(255,255,255,0.2)",
                transform: "translateY(-2px)",
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
              borderRadius: "12px",
              px: 2,

              background: "rgba(255,255,255,0.2)",
              transition: "0.25s",

              "&:hover": {
                background: "rgba(255,255,255,0.35)",
                transform: "translateY(-2px)",
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