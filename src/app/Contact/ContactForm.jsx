"use client";
import React, { useState,useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Snackbar,
  Alert
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "../Contact/Contact.css";

export default function ContactForm({ prefilledJobTitle = "", jobTitles = [] }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    services: "",
    jobTitle: prefilledJobTitle,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [jobTitleAnchorEl, setJobTitleAnchorEl] = useState(null);

  // Pre-fill jobTitle from query parameter
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      jobTitle: prefilledJobTitle,
    }));
  }, [prefilledJobTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data as JSON to the API endpoint
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
      setSnackbar({
        open: true,
        message: "Contact form submitted successfully!",
        severity: "success"
      });
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        services: "",
        jobTitle: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setSnackbar({
        open: true,
        message: "Failed to submit contact form: " + 
          (error.response?.data?.error || error.message),
        severity: "error"
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  // Snackbar close handler
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleJobTitleClick = (event) => {
    setJobTitleAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
    setJobTitleAnchorEl(null);
  };
  // Define the full service options
  const serviceOptions = [
    "Apostille and Certificate Verification",
    "Emigration and Attestation Services",
    "Ticketing and Visa Stamping",
    "License Assistance",
    "Dataflow and Exam Booking",
    "Travel Insurance and Medical Appointments",
  ];

  return (
    <Box
      sx={{
        flex: 1,
        width: { xs: "100%", md: "50%" },
        margin: 0,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#000",
          padding: { xs: "30px", sm: "60px", md: "90px" },
          borderRadius: {xs:5,md:1},
          color: "#fff",
          width: { xs: "100%", md: "50%" },
          overflow: "visible",
          position: "absolute",
          top: { md: "20%" },
          left: { md: "0" },
          zIndex: 10,
        }}
      >
        {/* First Row - Full Name & Email Address */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 5, sm: 2 },
            marginBottom: { xs: 6, sm: 4, md: 9 },
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="FULL NAME"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="EMAIL ADDRESS"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
              disabled={isSubmitting}
            />
          </Box>
        </Box>

        {/* Second Row - Phone Number & Services */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 2 },
            marginBottom: { xs: 6, sm: 4, md: 6 },
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="PHONE NUMBER"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              select
              label="SERVICES"
              name="services"
              value={formData.services}
              onChange={handleChange}
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDownIcon
                      sx={{ color: "#fff", cursor: "pointer" }}
                      onClick={handleServicesClick}
                    />
                  </InputAdornment>
                ),
              }}
              SelectProps={{
                open: Boolean(servicesAnchorEl),
                onClose: handleClose,
                onOpen: handleServicesClick,
                MenuProps: { anchorEl: servicesAnchorEl },
              }}
              disabled={isSubmitting}
            >
              <MenuItem value="">
                <em>Select a service</em>
              </MenuItem>
              {serviceOptions.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        {/* Third Row - Job Title */}
        <Box sx={{ marginBottom: { xs: 4, md: 4 } }}>
        <TextField
            fullWidth
            select
            label="JOB TITLE"
            name="jobTitle"
            value={formData.jobTitle || ""} // Ensure value is never undefined
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "#fff", borderBottom: "1px solid #fff" },
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon sx={{ color: "#fff",cursor: "pointer" }} onClick={handleJobTitleClick}/>
                </InputAdornment>
              ),
            }}
            SelectProps={{
              open: Boolean(jobTitleAnchorEl),
              onClose: handleClose,
              onOpen: handleJobTitleClick,
              MenuProps: { anchorEl: jobTitleAnchorEl },
            }}
            disabled={isSubmitting}
          >
            <MenuItem value="">
              <em>Select a job title</em>
            </MenuItem>
            {jobTitles.map((title, index) => (
              <MenuItem key={index} value={title}>
                {title}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Fourth Row - Message */}
        <Box
          sx={{
            marginBottom: { xs: 4, md: 4 },
            marginTop: { md: 12, xs: 10 },
          }}
        >
          <TextField
            fullWidth
            multiline
            rows={{ xs: 3, md: 4 }}
            placeholder="PLEASE TYPE YOUR MESSAGE HERE..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "#fff", borderBottom: "1px solid #fff" },
            }}
            disabled={isSubmitting}
          />
        </Box>

        {/* Send Message Button */}
        <Box sx={{ marginTop: 4, textAlign: "left" }}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              borderRadius: "30px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0056b3" },
              fontSize: { xs: "14px", sm: "16px" },
              height: "60px",
              width:{xs:"100%",md:200}
            }}
            endIcon={<ArrowForward sx={{ color: "#fff" }} />}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {submitStatus === "success" && (
            <Box sx={{ color: "green", mt: 2 }}>Message sent successfully!</Box>
          )}
          {submitStatus === "error" && (
            <Box sx={{ color: "red", mt: 2 }}>Failed to send message. Please try again.</Box>
          )}
        </Box>
        {/* Add Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}