import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../ServicesPage/ServiceHeader.css";
import Link from 'next/link';

export default function ServiceHeader() {
  return (
    <Box className="service-header">
      <Box className="service-text">
        <Typography
          variant="caption"
          className="service-subtitle"
          sx={{ color: "var(--primary)", fontWeight: "bold", textTransform: "uppercase", fontSize: { xs: 16, md: 20 } }}
        >
          OUR SERVICES/
        </Typography>
        <Typography
          component="h1" // Use a semantic tag, avoid variant conflicts
          className="service-title"
          sx={{
            fontWeight: "bold",
            mt: 2, // margin-top: 20px
            fontSize: { xs: 22, md: 42 }, // 22px on mobile, 42px on desktop
          }}
        >
          Unlock Your Dream <br /> Career Worldwide!
        </Typography>
      </Box>

      <Box className="service-buttons">
      <Link href="#jobs" passHref>
      <Button variant="contained" className="claim-btn" endIcon={<ArrowForwardIosIcon />}>
          Claim It
        </Button>
      </Link>
      <Link href="#contact" passHref>
      <Button variant="outlined" className="contact-btn">
          Contact Us
        </Button>
      </Link>
      </Box>
    </Box>
  );
}