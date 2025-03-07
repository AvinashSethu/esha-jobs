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
          sx={{
            mt: 2,
            fontSize:{xs:30,md:40},
            fontWeight:'bold'
          }}
        >
          Unlock Your Dream Career Worldwide!
        </Typography>
      </Box>

      <Box className="service-buttons">
      <Link href="#jobs" passHref>
      <Button variant="contained" className="claim-btn" endIcon={<ArrowForwardIosIcon />}>
          Claim It
        </Button>
      </Link>
      <Link href="#contact" passHref>
      <Button variant="outlined" className="contact-btn" sx={{ width: { xs: "350px", md: "170px" } }}>
          Contact Us
        </Button>
      </Link>
      </Box>
    </Box>
  );
}