"use client";
import React, { useState } from "react";
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
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [jobTitleAnchorEl, setJobTitleAnchorEl] = useState(null);

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
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="EMAIL ADDRESS"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
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
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
              }}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              select
              label="SERVICES"
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
            >
              <MenuItem value="Developer">
                Apostille & Certificate Verification
              </MenuItem>
              <MenuItem value="Designer">
                Emigration & Attestation Services
              </MenuItem>
              <MenuItem value="Manager">Ticketing & Visa Stamping</MenuItem>
              <MenuItem value="Manager">License Assistance</MenuItem>
              <MenuItem value="Manager">Dataflow & Exam Booking</MenuItem>
              <MenuItem value="Manager">
                Travel Insurance & Medical Appointments
              </MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* Third Row - Job Title */}
        <Box sx={{ marginBottom: { xs: 4, md: 4 } }}>
          <TextField
            fullWidth
            select
            label="JOB TITLE"
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
          >
            <MenuItem value="Developer">Job1</MenuItem>
            <MenuItem value="Designer">Job2</MenuItem>
            <MenuItem value="Manager">Job3</MenuItem>
            <MenuItem value="Manager">Job4</MenuItem>
            <MenuItem value="Manager">Job5</MenuItem>
            <MenuItem value="Manager">Job6</MenuItem>
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
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "#fff", borderBottom: "1px solid #fff" },
            }}
          />
        </Box>

        {/* Send Message Button */}
        <Box sx={{ marginTop: 4, textAlign: "left" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              borderRadius: "15px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0056b3" },
              fontSize: { xs: "14px", sm: "16px" },
              height: "60px",
            }}
            endIcon={<ArrowForward sx={{ color: "#fff" }} />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}