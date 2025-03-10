"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/Icons/Esha-Logo.png";

export default function ThirdBox({ handlePhoneCall }) {
  const theme = useTheme();

  return (
    <Box
      className="third-con"
      sx={{
        flex: "1",
        minWidth: "0",
        padding: "20px",
        textAlign: "left",
        backgroundColor: "#fff",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: "auto",
          marginBottom: "10px",
        },
      }}
    >
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
        sx={{
          marginBottom: "10px",
          [theme.breakpoints.down("sm")]: {
            width: "40px",
            height: "40px",
          },
        }}
        layout="fixed"
        priority={true}
      />
      <Typography
        variant="body2"
        sx={{
          color: "#000",
          marginBottom: "5px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
          },
        }}
      >
        THENGAIPATTANAM, KANYAKUMARI DISTRICT, TAMIL NADU, INDIA
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#000",
          marginBottom: "5px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
          },
        }}
      >
        PIN 629173
      </Typography>
      <Typography
        onClick={handlePhoneCall}
        variant="body2"
        sx={{
          color: "#000",
          marginBottom: "5px",
          cursor: "pointer",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
          },
        }}
      >
        +91 9788903129
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#000",
          marginBottom: "5px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
          },
        }}
      >
        ESHAARABCONSULTANCY@GMAIL.COM
      </Typography>
    </Box>
  );
}