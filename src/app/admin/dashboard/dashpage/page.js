"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import NavbarDash from "../navbar/navbar";
import Navbarbottom from "../navbarbotttom/navbarbotttom";
import NewJob from "../NewJob/NewJob";
import Applicants from "../Applicants/Applicants";
export default function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard"); // Default view is "dashboard"

  const handleNewJobsClick = () => {
    setActiveView("newJobs"); // Switch to NewJob view when "New Jobs" is clicked
  };

  const handleDashboardClick = () => {
    setActiveView("dashboard"); // Switch back to dashboard view when "Jobs" is clicked
  };

  const handleApplicantsClick = () => {
    setActiveView("applicants"); // Switch to Applicants view when "Applicants" is clicked
  };

  return (
    <Box sx={{ backgroundColor: '#E6F3FF', minHeight: '100vh', paddingBottom: '40px' }}>
      <Box>
        <NavbarDash 
          activeView={activeView} // Pass the current active view
          onNewJobsClick={handleNewJobsClick} 
          onDashboardClick={handleDashboardClick} 
          onApplicantsClick={handleApplicantsClick} // Pass the new handler
        /> {/* Pass all click handlers and activeView to NavbarDash */}
        
        {/* Conditionally render content based on activeView */}
        {activeView === "dashboard" ? (
          <Box>
            <Typography variant="h6" sx={{ textAlign: 'center', pt: 4 }}>
              Welcome to Esha Jobs Dashboard
            </Typography>
            {/* Add more dashboard content here if needed */}
          </Box>
        ) : activeView === "newJobs" ? (
          <NewJob /> // Render NewJob component when activeView is "newJobs"
        ) : (
          <Applicants /> // Render Applicants component when activeView is "applicants"
        )}

        <Navbarbottom 
          activeView={activeView} // Pass the current active view
          onNewJobsClick={handleNewJobsClick} 
          onDashboardClick={handleDashboardClick} 
          onApplicantsClick={handleApplicantsClick} // Pass the new handler
        /> {/* Pass all click handlers and activeView to Navbarbottom */}
      </Box>
    </Box>
  );
}