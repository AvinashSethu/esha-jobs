import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import "../Incrix/Incrix.css";
import Logo from "@/public/Icons/Incrix-Logo.png";

export default function Incrix() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto", // Padding for right alignment
        marginTop:'50px',
        paddingBottom:'30px'
      }}
    >
      {/* First Line: Typography and Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#666" }}>
          CRAFTED BY
        </Typography>
        <Link href="https://www.incrix.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={Logo} 
            alt="Incrix Logo"
            width={90} 
            height={20} 
            style={{ cursor: "pointer" }} // Optional: Adds pointer cursor on hover
          />
        </Link>
      </Box>

      {/* Second Line: Copyright Text */}
      <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
        © Copyright 2025, All Rights Reserved by Esha jobs
      </Typography>

      <Typography sx={{color:'#666',mt:1}}>
        Terms and conditions | Privacy Policy
      </Typography>
    </Box>
  );
}
