"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "../navbarbotttom/navbarbotttom.css";
import { useRouter } from "next/navigation";

export default function Navbarbottom({ activeView, onNewJobsClick, onDashboardClick, onApplicantsClick }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin/dashboard/login"); 
    setShowLogoutConfirm(false); 
  };
  // Handle cancel action
  const handleCancelLogout = () => {
    setShowLogoutConfirm(false); // Hide the confirmation card
  };

  return (
    <Box>
      <Box className="navbar-bottom">
        {/* Jobs button with Home icon (active when activeView is "dashboard") */}
        <Button 
          className="nav-button home-button"
          onClick={onDashboardClick} // Switch back to dashboard
          sx={{
            color: '#fff',
            backgroundColor: activeView === "dashboard" ? "var(--primary)" : "transparent", // Active state
            '&:hover': {
              backgroundColor: "var(--primary)", // Consistent hover state
            },
            height: '50px', // Match NavbarDash height for consistency
            textTransform: 'none',
            width: '150px', // Match NavbarDash width for consistency
            fontSize: '17px' // Match NavbarDash font size
          }}
        >
          <HomeIcon 
            sx={{ 
              color: '#fff',
              height: '30px',
              width: '30px',
            }}
          /> 
        </Button>

        {/* Applicants button with Person icon (active when activeView is "applicants") */}
        <Button 
          className="nav-button"
          onClick={onApplicantsClick} // Switch to Applicants view
          sx={{
            color: '#fff',
            backgroundColor: activeView === "applicants" ? "var(--primary)" : "transparent", // Active state
            '&:hover': {
              backgroundColor: "var(--primary)",
            },
            height: '50px', // Match NavbarDash height for consistency
            textTransform: 'none',
            width: '150px', // Match NavbarDash width for consistency
            fontSize: '17px' // Match NavbarDash font size
          }}
        >
          <PersonIcon 
            sx={{ 
              borderRadius: '50%',
              color: '#fff',
              border: '1px solid #fff',
              height: '30px',
              width: '30px'
            }}
          /> 
        </Button>

        {/* New Jobs button with Add icon (active when activeView is "newJobs") */}
        <Button 
          className="nav-button"
          onClick={onNewJobsClick} // Switch to NewJob
          sx={{
            color: '#fff',
            backgroundColor: activeView === "newJobs" ? "var(--primary)" : "transparent", // Active state
            '&:hover': { backgroundColor: '#1565c0' }, // Match NavbarDash hover for New Jobs
            height: '50px', // Match NavbarDash height for consistency
            textTransform: 'none',
            width: '150px', // Match NavbarDash width for consistency
            fontSize: '17px' // Match NavbarDash font size
          }}
        >
          <AddIcon 
            sx={{ 
              borderRadius: '50%',
              color: '#fff',
              border: '1px solid #fff',
              height: '30px',
              width: '30px'
            }}
          /> 
        </Button>

        {/* Logout button with ExitToApp icon */}
        <Box sx={{ position: 'relative' }}>
          <Button 
            className="nav-button"
            onClick={() => setShowLogoutConfirm(true)} // Show confirmation card
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: "var(--primary)",
              },
              height: '50px', // Match NavbarDash height for consistency
              textTransform: 'none',
              width: '100px', // Match NavbarDash width for consistency
              fontSize: '17px' // Match NavbarDash font size
            }}
          >
            <ExitToAppIcon 
              sx={{ 
                color: '#fff',
                height: '30px',
                width: '30px'
              }}
            /> 
          </Button>

          {/* Logout Confirmation Card */}
          {showLogoutConfirm && (
            <Box
              sx={{
                position: 'absolute',
                bottom: '100px',
                right:'-110px',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                width: '300px',
                textAlign: 'center',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#e0f7fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: 'var(--primary)', fontSize: '20px' }}>!</Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ color: 'var(--primary)', marginBottom: '10px' }}>
                Logging out?
              </Typography>
              <Typography sx={{ color: '#666', marginBottom: '20px' }}>
                Are you sure you want to log out?
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <Button
                  onClick={handleCancelLogout}
                  sx={{
                    color: 'var(--primary)',
                    border: '1px solid var(--primary)',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                    flex: 1,
                    textTransform: 'none',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleLogoutConfirm}
                  sx={{
                    backgroundColor: 'var(--primary)',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#0277bd' },
                    flex: 1,
                    textTransform: 'none',
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
  );
}