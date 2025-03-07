import React from "react";
import { Box, Button } from "@mui/material";
import JobCards from "../AboutPage/JobCards";
import "../AboutPageTwo/AboutPageTwo.css"; 
import AboutImg from "@/public/Images/About-Img.png";
import Link from "next/link";

export default function AboutPageTwo() {
  return (
    <Box
      className="Main-con"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '60vh',
        width: '100%',
        position: 'relative',
        overflow: 'visible !important'
      }}
    >
      {/* Left Side - JobCards */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          boxSizing: 'border-box',
        }}
      >
        <JobCards className="job-cards" />
      </Box>

      {/* Right Side - Background and Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          backgroundColor: 'var(--primary)',
          position: 'relative',
          minHeight: { xs: '50vh', md: 'auto' },
          zIndex: 1,
        }}
      >
        {/* Button - Outline, top-left, mobile-only */}
        <Link href="#jobs" passHref>
        <Button
          variant="outlined"
          sx={{
            position: 'absolute',
            top: 16, // 16px from top
            left: 16, // 16px from left
            zIndex: 200, // Above the image
            display: { xs: 'block', md: 'none' }, // Block on mobile, none on desktop
            borderColor: 'white', // Customize as needed
            color: 'white', // Customize as needed
            '&:hover': {
              borderColor: 'white', // Maintain border on hover
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight hover effect
            },
            height:'50px',
            width:'150px',
            borderRadius:'30px'
          }}
        >
          Browse All
        </Button>
        </Link>

        <Box
          component="img"
          className="about-img"
          src={AboutImg.src}
          alt="About page image"
          sx={{
            position: "absolute",
            top: { xs: "-70%", md: "-10%" },
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "auto",
            maxWidth: "none",
            objectFit: "contain",
            zIndex: 100,
          }}
        />
      </Box>
    </Box>
  );
}