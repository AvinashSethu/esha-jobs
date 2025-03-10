"use client";
import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function SecondBox({ activeLink, handleLinkClick }) {
  const theme = useTheme();

  return (
    <Box
      className="sec-box"
      sx={{
        flex: "1",
        minWidth: "0",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff",
        height: "250px",
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
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
          },
          marginLeft: "20px",
        }}
      >
        QUICK LINKS{" "}
        <ArrowForwardIcon
          sx={{
            marginLeft: "2px",
            transform: "rotate(330deg)",
            color: "var(--primary)",
          }}
        />
      </Typography>

      <Link href="#home" passHref>
        <Typography
          variant="body2"
          onClick={() => handleLinkClick("#home")}
          sx={{
            color: activeLink === "#home" ? "var(--primary)" : "#000",
            marginBottom: "5px",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { color: "var(--primary)" },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          Home
        </Typography>
      </Link>
      <Link href="#about" passHref>
        <Typography
          variant="body2"
          onClick={() => handleLinkClick("#about")}
          sx={{
            color: activeLink === "#about" ? "var(--primary)" : "#000",
            marginBottom: "5px",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { color: "var(--primary)" },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          About us
        </Typography>
      </Link>
      <Link href="#services" passHref>
        <Typography
          variant="body2"
          onClick={() => handleLinkClick("#services")}
          sx={{
            color: activeLink === "#jobs" ? "var(--primary)" : "#000",
            marginBottom: "5px",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { color: "var(--primary)" },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          Services
        </Typography>
      </Link>
      <Link href="#jobs" passHref>
        <Typography
          variant="body2"
          onClick={() => handleLinkClick("#jobs")}
          sx={{
            color: activeLink === "#process" ? "var(--primary)" : "#000",
            marginBottom: "5px",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { color: "var(--primary)" },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          Jobs
        </Typography>
      </Link>
      <Link href="#contact" passHref>
        <Typography
          variant="body2"
          onClick={() => handleLinkClick("#contact")}
          sx={{
            color: activeLink === "#contact" ? "var(--primary)" : "#000",
            marginBottom: "5px",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { color: "var(--primary)" },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }}
        >
          Contact
        </Typography>
      </Link>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton aria-label="Facebook" sx={{ color: "#000" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Twitter" sx={{ color: "#000" }}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn" sx={{ color: "#000" }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}