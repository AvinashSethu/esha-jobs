import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import JobCards from "./dashboard/JobCards/JobCards";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        const fetchedJobs = response.data.jobs || [];
        console.log("Fetched jobs:", fetchedJobs); // Debug: Log fetched jobs
        setJobs(fetchedJobs);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch jobs");
        setLoading(false);
        console.error("Fetch error:", err); // Debug: Log fetch errors
      }
    };

    fetchJobs();
    // Debug: Log window width
    const handleResize = () => console.log("Window width:", window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Log initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography>Loading jobs...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  if (jobs.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography>No jobs found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Force 2 columns
        gap: 3, // Spacing between cards
        p: 2,
        width: "100%", // Use full width of the container
        maxWidth: "1200px", // Ensure enough space for two 500px cards + gap
        mx: "auto", // Center the grid
      }}
    >
      {jobs.map((job) => (
        <JobCards
          key={job._id}
          jobtitle={job.jobTitle}
          gender={job.gender}
          location={job.location}
          salary={job.salary}
          description={job.description}
          keyFeatures={job.keyFeatures}
          benefits={job.benefits}
          otherDetails={job.otherDetails}
          jobDetails={job.jobDetails}
          jobImage={job.jobImage}
        />
      ))}
    </Box>
  );
}