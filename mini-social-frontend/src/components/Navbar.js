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
           Mini Social
        </Typography>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          {/*  USER AVATAR */}
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