import React, { useState, useEffect } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import JobCards from "./dashboard/JobCards/JobCards";

export default function JobList({ onEditJob }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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
  }, []);

  const handleDelete = (id, message, severity) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

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
    <>
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
            _id={job._id}
            onDelete={(id, message, severity) => handleDelete(id, message, severity)} // Pass updated onDelete
            {...job}
            onEditJob={onEditJob}
          />
        ))}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}