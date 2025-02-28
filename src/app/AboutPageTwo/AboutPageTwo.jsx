import React from "react";
import { Box } from "@mui/material";
import JobCards from "../AboutPage/JobCards";
import "../AboutPageTwo/AboutPageTwo.css"; 
import AboutImg from "@/public/Images/About-Img.png";

export default function AboutPageTwo() {
  return (
    <Box
    className="Main-con"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
        minHeight: '60vh', // Full viewport height
        width: '100%',
        position:'relative',
        overflow:'visible !important'
     
      }}
    >
      {/* Left Side - JobCards */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // 100% on mobile, 50% on desktop
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          boxSizing: 'border-box', // Ensures padding doesn't affect width
        }}
      >
        {/* Use the new JobCards component */}
        <JobCards className="job-cards" />
      </Box>

      {/* Right Side - Background and Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // 100% on mobile, 50% on desktop
          backgroundColor: 'var(--primary)',
          position: 'relative',
          minHeight: { xs: '50vh', md: 'auto' }, // Ensure some height on mobile
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          className="about-img"
          src={AboutImg.src} // Use the src from the imported image
          alt="About page image"
          sx={{
            position: "absolute",
            top: { xs: "-50%", md: "-10%" }, // Position at the top, with half extending upward (same for mobile and desktop)
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally only
            width: "700px", // Slightly larger to ensure half overflows upward
            height: "auto", // Maintain aspect ratio
            maxWidth: "none", // Allow the image to extend beyond container width
            objectFit: "contain", // Maintain aspect ratio and fit within bounds
            zIndex: 100,
          }}
        />
      </Box>
    </Box>
  );
}