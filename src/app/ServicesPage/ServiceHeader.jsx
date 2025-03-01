import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../ServicesPage/ServiceHeader.css";

export default function ServiceHeader() {
  return (
    <Box className="service-header">
      <Box className="service-text">
        <Typography variant="caption" className="service-subtitle">
          OUR SERVICES/
        </Typography>
        <Typography variant="h4" className="service-title">
          Unlock Your Dream <br /> Career Worldwide!
        </Typography>
      </Box>

      <Box className="service-buttons">
        <Button variant="contained" className="claim-btn" endIcon={<ArrowForwardIosIcon />}>
          Claim It
        </Button>
        <Button variant="outlined" className="contact-btn">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
