import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../AboutPage/AboutPage.css";

export default function AboutPage() {
  return (
    <Box 
      className="about-page-container" 
      display="flex" 
      height="40vh"
      sx={{
        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop (md breakpoint)
        alignItems: 'center',
        padding: '0 20px' // 20px padding on left and right
      }}
    >
      {/* Left Side - Typography and Job Listings */}
      <Box 
        className="left-section" 
        flex={1} 
        p={4} 
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on desktop
          order: { xs: 1, md: 1 }, // Maintain order on desktop, stack first on mobile
          padding: 0, // Remove default padding to control with container
          paddingLeft:'40px'
        }}
      >
        <Typography 
          className="about-esha-text"
          sx={{ 
            color: "var(--primary)", 
            fontSize: "14px", 
            marginBottom: "8px", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px"
          }}
        >
          <span style={{ flex: 0.1, borderBottom: "1px solid var(--primary)" }} className="underline"></span>
          ABOUT ESHA JOBS
          <span style={{ flex: 0.1, borderBottom: "1px solid var(--primary)" }}  className="underline"></span>
        </Typography>
        
        <Typography 
  className="dream-job-text"
  variant="h1"
  sx={{ 
    color: "#000", 
    fontSize: "42px", 
    marginBottom: "16px",
    paddingTop: "15px",
    "& br": { 
      display: { 
        xs: "none", // hides br on mobile (extra small screens)
        sm: "inline" // shows br on larger screens
      }
    }
  }}
>
  Your Dream <span style={{color:'var(--primary)'}}>Job Abroad</span> is <br /> 
  Just One Click Away!
</Typography>
        
        <Typography 
          className="future-text"
          sx={{ 
            color: "#666", 
            fontSize: "16px", 
            marginBottom: "24px",
            paddingTop: '10px'
          }}
        >
          DON’T WAIT—SECURE YOUR FUTURE TODAY!
        </Typography>
      </Box>

      {/* Right Side - Browse Button */}
      <Box 
        className="browse-button-container" 
        display="flex" 
        justifyContent={{ xs: 'center', md: 'flex-end' }} // Center on mobile, right on desktop
        width="100%"
        mb={2}
        pr={{ xs: 0, md: 0 }} // Remove right padding
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on desktop
          order: { xs: 2, md: 2 }, // Stack second on mobile, maintain on desktop
          mt: { xs: 2, md: 0 }, // Add top margin on mobile for spacing
          padding: 0 // Remove default padding to control with container
        }}
      >
        <Button 
          className="MuiButton-outlined"
          variant="outlined" 
          sx={{ 
            borderRadius: "20px", 
            padding: "8px 16px", 
            borderColor: "#000",
            color: "#000",
            height: '50px'
          }}
        >
          BROWSE ALL
        </Button>
      </Box>
    </Box>
  );
}