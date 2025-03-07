import React, { useState, useEffect } from "react";
import axios from "axios";
import Applicants from "../Applicants/Applicants";
import { Box, Typography } from "@mui/material";

export default function ApplicantsPage() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
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
        console.log("Applicants state set to:", fetchedApplicants);
      } catch (err) {
        console.error("Fetch error:", err.message);
        if (err.response) {
          console.error("Error Response Data:", err.response.data);
          console.error("Error Response Status:", err.response.status);
        }
        setError(err.message || "Failed to fetch applicants");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures fetch happens once on mount

  useEffect(() => {
    console.log("Applicants state updated:", applicants);
  }, [applicants]);

  console.log("Rendering ApplicantsPage with applicants:", applicants);
  console.log("Rendering ApplicantsPage with loading:", loading);
  console.log("Rendering ApplicantsPage with error:", error);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography>Loading applicants...</Typography>
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

  if (!applicants || applicants.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography>No applicants found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: "1200px", mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Applicants
      </Typography>
      <Applicants applicants={applicants || []} />




    </Box>
  );
}