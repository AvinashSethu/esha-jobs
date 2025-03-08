import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material"; // Added CircularProgress for loading
import axios from "axios";
import CardJob from "./CardJob";

export default function CardList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true); // Show loading state during fetch
      const response = await axios.get("/api/jobs");
      const fetchedJobs = response.data.jobs || [];
      console.log("Fetched jobs:", fetchedJobs);
      setJobs(fetchedJobs);
    } catch (err) {
      setError(err.message || "Failed to fetch jobs");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  useEffect(() => {
    fetchJobs(); // Initial fetch

    // Poll every 10 seconds to check for updates
    const interval = setInterval(fetchJobs, 10000);

    const handleResize = () => console.log("Window width:", window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      clearInterval(interval); // Cleanup interval
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading && jobs.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress /> {/* Spinner while initial loading */}
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
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 1fr)",
        },
        gap: {
          xs: 2,
          md: 8,
        },
        p: 2,
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {jobs.map((job) => (
        <CardJob
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