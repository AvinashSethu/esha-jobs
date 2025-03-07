"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "../Contact/Contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    services: "",
    jobTitle: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [jobTitleAnchorEl, setJobTitleAnchorEl] = useState(null);

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
      alert("Contact form submitted successfully!");
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
      alert(
        "Failed to submit contact form: " +
          (error.response?.data?.error || error.message)
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
          borderRadius: "1px",
          color: "#fff",
          width: { xs: "100%", md: "50%" },
          overflow: "visible",
          position: "absolute",
          top: { md: "10%" },
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
              <MenuItem value="Apostille">Apostille and Certificate Verification</MenuItem>
              <MenuItem value="Emigration">Emigration and Attestation Services</MenuItem>
              <MenuItem value="Ticketing">Ticketing and Visa Stamping</MenuItem>
              <MenuItem value="License">License Assistance</MenuItem>
              <MenuItem value="Dataflow">Dataflow and Exam Booking</MenuItem>
              <MenuItem value="Insurance">Travel Insurance and Medical Appointments</MenuItem>
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
            value={formData.jobTitle}
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "#fff", borderBottom: "1px solid #fff" },
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon
                    sx={{ color: "#fff", cursor: "pointer" }}
                    onClick={handleJobTitleClick}
                  />
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
            <MenuItem value="Job1">Job1</MenuItem>
            <MenuItem value="Job2">Job2</MenuItem>
            <MenuItem value="Job3">Job3</MenuItem>
            <MenuItem value="Job4">Job4</MenuItem>
            <MenuItem value="Job5">Job5</MenuItem>
            <MenuItem value="Job6">Job6</MenuItem>
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
      </Box>
    </Box>
  );
}