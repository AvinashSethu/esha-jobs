"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
import Logo from "@/public/Icons/Esha-Logo.png";
import "../navbar/navbar.css";

export default function NavbarDash({ activeView, onNewJobsClick, onDashboardClick, onApplicantsClick }) { // Add onApplicantsClick prop
  return (
    <Box sx={{ padding: '20px 0' }} className="nav-con">
      <Box
        sx={{
          backgroundColor: 'var(--secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          borderRadius: '10px',
          color: '#fff',
          marginLeft: '40px',
          marginRight: '40px',
          height: '80px'
        }}
      >
        {/* Left side: Logo and "Esha Jobs" text */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={Logo}
            alt="Esha Jobs Logo"
            width={30}
            height={30}
            style={{
              borderRadius: '50%',
              marginRight: '10px',
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Esha Jobs
          </Typography>
        </Box>

        {/* Right side: Buttons with icons as specified */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Jobs button with Home icon (active when activeView is "dashboard") */}
          <Button
            onClick={onDashboardClick}
            startIcon={<HomeIcon
              sx={{
                color: '#fff',
                height: '25px',
                width: '25px'
              }}
            />}
            sx={{
              color: '#fff',
              backgroundColor: activeView === "dashboard" ? "var(--primary)" : "transparent", // Active state
              '&:hover': {
                backgroundColor: "var(--primary)", // Consistent hover state
              },
              marginRight: '25px',
              height: '50px',
              textTransform: 'none',
              width: '150px',
              fontSize: '17px'
            }}
          >
            Jobs
          </Button>
          {/* Applicants button with person icon (active when activeView is "applicants") */}
          <Button
            onClick={onApplicantsClick} // Navigate to Applicants view
            startIcon={<PersonOutlineIcon
              sx={{
                borderRadius: '50%',
                color: '#fff',
                border: '1px solid #fff',
                height: '25px',
                width: '25px'
              }}
            />}
            sx={{
              color: '#fff',
              backgroundColor: activeView === "applicants" ? "var(--primary)" : "transparent", // Active state
              '&:hover': {
                backgroundColor: "var(--primary)",
              },
              marginRight: '25px',
              height: '50px',
              textTransform: 'none',
              width: '150px',
              fontSize: '17px'
            }}
          >
            Applicants
          </Button>

          {/* New Jobs button with plus icon (active when activeView is "newJobs") */}
          <Button
            onClick={onNewJobsClick}
            startIcon={<AddIcon
              sx={{
                borderRadius: '50%',
                color: '#fff',
                border: '1px solid #fff',
                height: '20px',
                width: '20px'
              }}
            />}
            sx={{
              color: '#fff',
              backgroundColor: activeView === "newJobs" ? "var(--primary)" : "transparent", // Active state
              '&:hover': { backgroundColor: '#1565c0' }, // Match NavbarDash hover for New Jobs
              marginRight: '25px',
              height: '50px',
              textTransform: 'none',
              width: '150px',
              fontSize: '17px'
            }}
          >
            New Jobs
          </Button>

          {/* Logout button with icon above text */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                border: '1px #fff',
                '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                minWidth: '0',
                padding: '4px',
                marginTop: '3px'
              }}
            >
              <LogoutIcon />
            </Button>
            <Typography
              variant="caption"
              sx={{ color: '#fff', marginTop: '4px', fontSize: '15px' }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}