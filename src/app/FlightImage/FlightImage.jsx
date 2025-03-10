import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import FlightImg from "@/public/Images/Flight.png";
import "../FlightImage/FlightImage.css";
import Link from "next/link";
import FlightImgOne from "@/public/Images/Flight-Img.png";

export default function FlightImage() {
  return (
    <Box
      className="fli-con"
      sx={{
        height: "70vh",
        width: "100vw",
        position: "relative",
        marginTop: "12%",
      }}
    >
      {/* Full image for desktop */}
      <Image
        src={FlightImg}
        alt="Flight Image"
        layout="fill"
        objectFit="cover"
        className="desktop-image"
      />

      {/* Mobile-specific image (right half with airplane) */}
      <Image
        src={FlightImgOne}
        alt="Flight Image Mobile"
        layout="fill"
        objectFit="cover"
        className="mobile-image"
      />

      {/* Overlay for text and button on the left side */}
      <Box
        className="fli-over"
        sx={{
          position: "absolute",
          top: { xs: "45%", md: "65%" }, // Adjust top position for mobile
          left: "6%",
          transform: "translateY(-50%)",
          color: "white",
          textAlign: "left",
          p: 2,
          backgroundColor: "transparent",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          className="fli-title"
          sx={{
            // Use CSS to control line breaks
            whiteSpace: { xs: "normal", md: "pre-line" }, // Normal on mobile, pre-line on desktop
          }}
        >
          Take the First Step Towards{"\n"}Your Dream Job!
        </Typography>
        <Typography variant="h5" gutterBottom className="fli-subtitle">
          Top Nursing Jobs in India & Abroad – No Hassle, No Delays!
        </Typography>
        <Link href="#contact" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            endIcon={<ArrowForwardIcon />}
            className="fli-btn"
          >
            Fly High
          </Button>
        </Link>
      </Box>
    </Box>
  );
}