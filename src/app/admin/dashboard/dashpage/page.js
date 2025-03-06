"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import NavbarDash from "../navbar/navbar";
import Navbarbottom from "../navbarbotttom/navbarbotttom";
import NewJob from "../NewJob/NewJob";
import Applicants from "../Applicants/Applicants";
import JobList from "../../JobList";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard");

  const handleNewJobsClick = () => {
    setActiveView("newJobs");
  };

  const handleDashboardClick = () => {
    setActiveView("dashboard");
  };

  const handleApplicantsClick = () => {
    setActiveView("applicants");
  };

  return (
    <Box sx={{ backgroundColor: "#E6F3FF", minHeight: "100vh", paddingBottom: "40px" }}>
      <Box sx={{ width: "100%", maxWidth: "100%", mx: "auto", px: { xs: 2, sm: 0 } }}>
        <NavbarDash
          activeView={activeView}
          onNewJobsClick={handleNewJobsClick}
          onDashboardClick={handleDashboardClick}
          onApplicantsClick={handleApplicantsClick}
        />

        {activeView === "dashboard" ? (
          <Box>
            <Typography variant="h6" sx={{ textAlign: "center", pt: 4 }}>
              Welcome to Esha Jobs Dashboard
            </Typography>
            <JobList />
          </Box>
        ) : activeView === "newJobs" ? (
          <NewJob />
        ) : (
          <Applicants />
        )}

        <Navbarbottom
          activeView={activeView}
          onNewJobsClick={handleNewJobsClick}
          onDashboardClick={handleDashboardClick}
          onApplicantsClick={handleApplicantsClick}
        />
      </Box>
    </Box>
  );
}