import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the forward arrow icon
import Image from "next/image";
import FlightImg from "@/public/Images/Flight.png";
import "../FlightImage/FlightImage.css";
import Link from 'next/link';

export default function FlightImage() {
  return (
    <Box sx={{ height: "70vh", width: "100vw", position: "relative",marginTop:'12%' }}>
      <Image src={FlightImg} alt="Flight Image" layout="fill" objectFit="cover" />

      {/* Overlay for text and button on the left side */}
      <Box 
        className="fli-over"
        sx={{
          position: "absolute",
          top: "65%",
          left: "6%",
          transform: "translateY(-50%)",
          color: "white",
          textAlign: "left",
          p: 2,
          backgroundColor: "transparent", 
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom className="fli-title">
          Take the First Step Towards <br /> Your Dream Job!
        </Typography>
        <Typography variant="h5" gutterBottom  className="fli-subtitle">
           Top Nursing Jobs in India & Abroad – No Hassle, No Delays!
        </Typography>
        <Link href="#contact" passHref>
        <Button variant="contained" size="large" sx={{ mt: 2, }} endIcon={<ArrowForwardIcon />}  className="fli-btn">
          Fly High
        </Button>
        </Link>
      </Box>
    </Box>
  );
}