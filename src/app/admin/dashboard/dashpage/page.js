"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import NavbarDash from "../navbar/navbar";
import Navbarbottom from "../navbarbotttom/navbarbotttom";
import NewJob from "../NewJob/NewJob";
import Applicants from "../Applicants/Applicants";
import JobList from "../../JobList";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard");
  const [applicants, setApplicants] = useState([]);
  const [loadingApplicants, setLoadingApplicants] = useState(false);
  const [errorApplicants, setErrorApplicants] = useState(null);

  const handleNewJobsClick = () => {
    setActiveView("newJobs");
  };

  const handleDashboardClick = () => {
    setActiveView("dashboard");
  };

  const handleApplicantsClick = () => {
    setActiveView("applicants");
    if (applicants.length === 0 && !loadingApplicants && !errorApplicants) {
      fetchApplicants();
    }
  };

  const fetchApplicants = async () => {
    try {
      setLoadingApplicants(true);
      console.log("Fetching contacts from /api/contact...");
      const response = await axios.get("/api/contact");
      console.log("API Response:", response.data);

      const fetchedApplicants = response.data.contacts || [];
      console.log("Extracted applicants:", fetchedApplicants);

      if (fetchedApplicants.length > 0) {
        console.log("Valid applicants found, setting state:", fetchedApplicants);
      } else {
        console.warn("No applicants found in response.");
      }

      setApplicants(fetchedApplicants);
    } catch (err) {
      console.error("Fetch error:", err.message);
      if (err.response) {
        console.error("Error Response Data:", err.response.data);
        console.error("Error Response Status:", err.response.status);
      }
      setErrorApplicants(err.message || "Failed to fetch applicants");
    } finally {
      setLoadingApplicants(false);
    }
  };

  useEffect(() => {
    console.log("Applicants state updated in DashboardPage:", applicants);
  }, [applicants]);

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
          <Box>
            {loadingApplicants ? (
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography>Loading applicants...</Typography>
              </Box>
            ) : errorApplicants ? (
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography color="error">Error: {errorApplicants}</Typography>
              </Box>
            ) : (
              <Box sx={{ p: 0.5, width: "100%", maxWidth: "100%", mx: "auto" }}>
                <Applicants applicants={applicants} />
              </Box>
            )}
          </Box>
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