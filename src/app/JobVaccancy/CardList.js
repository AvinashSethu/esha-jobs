import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import CardJob from "./CardJob";

export default function CardList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        const fetchedJobs = response.data.jobs || [];
        console.log("Fetched jobs:", fetchedJobs);
        setJobs(fetchedJobs);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch jobs");
        setLoading(false);
        console.error("Fetch error:", err);
      }
    };

    fetchJobs();
    const handleResize = () => console.log("Window width:", window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
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
        // Responsive grid columns: 1 column on mobile (xs), 2 columns on larger screens (md)
        gridTemplateColumns: {
          xs: "1fr",        // 1 column on extra-small screens (mobile)
          md: "repeat(2, 1fr)" // 2 columns on medium and larger screens
        },
        gap: { 
          xs: 2,           // Smaller gap on mobile
          md: 8            // Larger gap on desktop
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