import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import FlightImg from "@/public/Images/Flight.png";
import FlightImgMobile from "@/public/Images/Flight-Mobile.png";
import "../FlightImage/FlightImage.css";
import Link from "next/link";

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
        src={FlightImgMobile}
        alt="Flight Image Mobile"
        layout="fill"
        objectFit="contain"
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
        <Typography variant="h3" gutterBottom className="fli-title">
          {/* Render title differently for mobile and desktop */}
          {typeof window !== "undefined" && window.innerWidth < 768 ? (
            "Take the First Step Towards Your Dream Job!"
          ) : (
            <>
              Take the First Step Towards <br /> Your Dream Job!
            </>
          )}
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