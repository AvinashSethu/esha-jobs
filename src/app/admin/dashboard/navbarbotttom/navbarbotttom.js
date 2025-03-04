"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "../navbarbotttom/navbarbotttom.css";

export default function Navbarbottom({ activeView, onNewJobsClick, onDashboardClick, onApplicantsClick }) { // Add onApplicantsClick prop
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
          /> Jobs
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
        <Button 
          className="nav-button"
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: "var(--primary)",
            },
            height: '50px', // Match NavbarDash height for consistency
            textTransform: 'none',
            width: '150px', // Match NavbarDash width for consistency
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
      </Box>
    </Box>
  );
}