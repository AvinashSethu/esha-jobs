"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import NavbarDash from "../navbar/navbar";
import Navbarbottom from "../navbarbotttom/navbarbotttom";
import NewJob from "../NewJob/NewJob";
import Applicants from "../Applicants/Applicants";
import JobList from "../../JobList";
import { useRouter } from "next/navigation";
import PopupCard from "../JobCards/PopupCard";
import Logo from "@/public/Icons/Esha-Logo.png";
import Image from "next/image";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard");
  const [applicants, setApplicants] = useState([]);
  const [loadingApplicants, setLoadingApplicants] = useState(false);
  const [errorApplicants, setErrorApplicants] = useState(null);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  // Check login status on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/dashboard/login");
    }
  }, [router]);

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

  const handleEditJob = (jobData) => {
    console.log("Editing job:", jobData);
    setSelectedJob(jobData);
    setOpenEditPopup(true);
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/jobs");
      setJobs(response.data.jobs || []);
      console.log("Jobs fetched:", response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleEditClose = () => {
    setOpenEditPopup(false);
    setSelectedJob(null);
    fetchJobs(); // Refetch jobs after update
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                pt: 2,
                px: 2,
                gap: 2,
                py:2
              }}
            >
              <Image
                src={Logo}
                alt="Esha Logo"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold",fontSize:{xs:17,sm:23} }}>
                Welcome to Esha Jobs Dashboard
              </Typography>
            </Box>
            <JobList onEditJob={handleEditJob} />
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
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "center" },
                    pt: 2,
                    px: 2,
                    gap: 2,
                    py:3
                  }}
                >
                  <Image
                    src={Logo}
                    alt="Esha Logo"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Esha Applicants
                  </Typography>
                </Box>
                <Box sx={{ p: 0.5, width: "100%", maxWidth: "100%", mx: "auto" }}>
                  <Applicants applicants={applicants} />
                </Box>
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

        {openEditPopup && (
          <PopupCard
            open={openEditPopup}
            onClose={handleEditClose}
            jobData={selectedJob}
          />
        )}
      </Box>
    </Box>
  );
}