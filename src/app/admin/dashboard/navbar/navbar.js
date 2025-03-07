"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import Logo from "@/public/Icons/Esha-Logo.png";
import "../navbar/navbar.css";

export default function NavbarDash({ activeView, onNewJobsClick, onDashboardClick, onApplicantsClick }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    // Clear login state and redirect to login page
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/dashboard/login"); // Redirect to login page
    setShowLogoutConfirm(false); // Hide the confirmation card after logout
  };

  // Handle cancel action
  const handleCancelLogout = () => {
    setShowLogoutConfirm(false); // Hide the confirmation card
  };

  return (
    <Box sx={{ padding: "20px 0" }} className="nav-con">
      <Box
        sx={{
          backgroundColor: "var(--secondary)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderRadius: "10px",
          color: "#fff",
          marginLeft: "40px",
          marginRight: "40px",
          height: "80px",
        }}
      >
        {/* Left side: Logo and "Esha Jobs" text */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src={Logo}
            alt="Esha Jobs Logo"
            width={30}
            height={30}
            style={{
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Esha Jobs
          </Typography>
        </Box>

        {/* Right side: Buttons with icons as specified */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Jobs button with Home icon */}
          <Button
            onClick={onDashboardClick}
            startIcon={<HomeIcon sx={{ color: "#fff", height: "25px", width: "25px" }} />}
            sx={{
              color: "#fff",
              backgroundColor: activeView === "dashboard" ? "var(--primary)" : "transparent",
              "&:hover": {
                backgroundColor: "var(--primary)",
              },
              marginRight: "25px",
              height: "50px",
              textTransform: "none",
              width: "150px",
              fontSize: "17px",
            }}
          >
            Jobs
          </Button>
          {/* Applicants button with person icon */}
          <Button
            onClick={onApplicantsClick}
            startIcon={<PersonOutlineIcon sx={{ borderRadius: "50%", color: "#fff", border: "1px solid #fff", height: "25px", width: "25px" }} />}
            sx={{
              color: "#fff",
              backgroundColor: activeView === "applicants" ? "var(--primary)" : "transparent",
              "&:hover": {
                backgroundColor: "var(--primary)",
              },
              marginRight: "25px",
              height: "50px",
              textTransform: "none",
              width: "150px",
              fontSize: "17px",
            }}
          >
            Applicants
          </Button>

          {/* New Jobs button with plus icon */}
          <Button
            onClick={onNewJobsClick}
            startIcon={<AddIcon sx={{ borderRadius: "50%", color: "#fff", border: "1px solid #fff", height: "20px", width: "20px" }} />}
            sx={{
              color: "#fff",
              backgroundColor: activeView === "newJobs" ? "var(--primary)" : "transparent",
              "&:hover": { backgroundColor: "#1565c0" },
              marginRight: "25px",
              height: "50px",
              textTransform: "none",
              width: "150px",
              fontSize: "17px",
            }}
          >
            New Jobs
          </Button>

          {/* Logout button with icon above text */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <Button
              variant="outlined"
              onClick={() => setShowLogoutConfirm(true)}
              sx={{
                color: "#fff",
                border: "1px #fff",
                "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255, 255, 255, 0.1)" },
                minWidth: "0",
                padding: "4px",
                marginTop: "3px",
              }}
            >
              <LogoutIcon />
            </Button>
            <Typography variant="caption" sx={{ color: "#fff", marginTop: "4px", fontSize: "15px" }}>
              Logout
            </Typography>

            {/* Logout Confirmation Card */}
            {showLogoutConfirm && (
              <Box
                sx={{
                  position: "absolute",
                  top: 80,
                  transform: "translateX(-50%)",
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  width: "300px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#e0f7fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "var(--primary)", fontSize: "20px" }}>!</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ color: "var(--primary)", marginBottom: "10px" }}>
                  Logging out?
                </Typography>
                <Typography sx={{ color: "#666", marginBottom: "20px", fontSize: "15px" }}>
                  Are you sure you want to log out?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                  <Button
                    onClick={handleCancelLogout}
                    sx={{
                      color: "var(--primary)",
                      border: "1px solid var(--primary)",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                      flex: 1,
                      textTransform: "none",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleLogoutConfirm}
                    sx={{
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#0277bd" },
                      flex: 1,
                      textTransform: "none",
                    }}
                  >
                    Log Out
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}