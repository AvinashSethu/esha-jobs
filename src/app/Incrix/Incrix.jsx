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
        alignItems: "flex-end",
        justifyContent: "center",
        height: "15vh",
        pr: 10, // Padding for right alignment
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
            width={100} 
            height={24} 
            style={{ cursor: "pointer" }} // Optional: Adds pointer cursor on hover
          />
        </Link>
      </Box>

      {/* Second Line: Copyright Text */}
      <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
        © Copyright 2025, All Rights Reserved by Esha jobs
      </Typography>
    </Box>
  );
}
