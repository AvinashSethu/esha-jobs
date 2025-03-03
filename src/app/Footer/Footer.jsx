"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link for navigation
import "../Footer/Footer.css";
import Logo from "@/public/Icons/Esha-Logo.png";

export default function Footer() {
  const theme = useTheme(); // Access MUI theme for breakpoints
  const [activeLink, setActiveLink] = useState('#home'); // Track active link state

  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'jobs', 'process', 'contact'];
      let newActiveLink = activeLink;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 0) {
            newActiveLink = `#${section}`;
          }
        }
      });

      setActiveLink(newActiveLink);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]); // Include activeLink as dependency to ensure updates

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set active link immediately
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      className="fot-con"
      sx={{
        backgroundColor: "#fff",
        paddingTop: "20px",
        [theme.breakpoints.down("sm")]: {
          padding: "10px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap", // Allows stacking on smaller screens
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {/* First Box (4 parts) - Esha Arab Nursing Consultancy */}
        <Box
          sx={{
            flex: "4", // 4 parts of the total 12 parts (33.33% on desktop)
            minWidth: "0", // Ensures box shrinks properly
            padding: "50px",
            textAlign: "left",
            [theme.breakpoints.down("sm")]: {
              flex: "100%", // Full width on mobile
              textAlign: "center",
            },
            backgroundColor: '#c5e7ff'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#000",
              marginBottom: "13px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
              fontSize: '24px'
            }}
          >
            Esha Arab Nursing Consultancy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              marginBottom: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
              fontSize: '17px'
            }}
          >
            Your Dream Job is Just a Step Away!
          </Typography>
          <Link href="#jobs" passHref>
          <Button
            className="fot-btn"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "var(--primary)",
              color: "#fff",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "var(--primary)" },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                fontSize: "0.8rem",
              },
              height: '50px',
              width: '170px',
            }}
          >
            Vacancies
          </Button>
          </Link>
        </Box>

        {/* Second Box (4 parts) - Quick Links and Social Media Icons (All Centered) */}
        <Box
          sx={{
            flex: "4", // 4 parts of the total 12 parts (33.33% on desktop)
            minWidth: "0", // Ensures box shrinks properly
            padding: "10px",
            textAlign: "center", // Center all text in this box on desktop and mobile
            [theme.breakpoints.down("sm")]: {
              flex: "100%", // Full width on mobile
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
            }}
          >
            Quick Links
          </Typography>
          <Link href="#home" passHref>
            <Typography
              variant="body2"
              onClick={() => handleLinkClick('#home')}
              sx={{
                color: activeLink === '#home' ? 'var(--primary)' : '#666',
                marginBottom: "5px",
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'var(--primary)' },
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
              onClick={() => handleLinkClick('#about')}
              sx={{
                color: activeLink === '#about' ? 'var(--primary)' : '#666',
                marginBottom: "5px",
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'var(--primary)' },
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
              onClick={() => handleLinkClick('#services')}
              sx={{
                color: activeLink === '#jobs' ? 'var(--primary)' : '#666',
                marginBottom: "5px",
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'var(--primary)' },
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
              onClick={() => handleLinkClick('#jobs')}
              sx={{
                color: activeLink === '#process' ? 'var(--primary)' : '#666',
                marginBottom: "5px",
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'var(--primary)' },
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
              onClick={() => handleLinkClick('#contact')}
              sx={{
                color: activeLink === '#contact' ? 'var(--primary)' : '#666',
                marginBottom: "5px",
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'var(--primary)' },
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
              marginTop: "15px", // Space between Quick Links and social icons
              display: "flex",
              justifyContent: "center", // Center social icons on both desktop and mobile
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

        {/* Third Box (4 parts) - Logo and Address */}
        <Box
          sx={{
            flex: "4", // 4 parts of the total 12 parts (33.33% on desktop)
            minWidth: "0", // Ensures box shrinks properly
            padding: "10px",
            textAlign: "left",
            [theme.breakpoints.down("sm")]: {
              flex: "100%", // Full width on mobile
              textAlign: "center",
            },
          }}
        >
          <Image
            src={Logo}  // Replace with the actual path to your logo (airplane icon)
            alt="Logo"
            width={50} // Default width for desktop
            height={50} // Default height (adjust based on your logo's aspect ratio)
            style={{
              marginBottom: "10px",
              [theme.breakpoints.down("sm")]: {
                width: "40px", // Adjusted width for mobile
                height: "40px", // Adjusted height for mobile
              },
            }}
            layout="fixed" // or "intrinsic", "responsive", etc., depending on your needs
            priority={true} // Optional: Load this image with priority if it's above the fold
          />
          <Typography
            variant="body2"
            sx={{
              color: "#666",
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
              color: "#666",
              marginBottom: "5px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
            }}
          >
            PIN 629173
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              marginBottom: "5px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
            }}
          >
            +91 97880903129
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              marginBottom: "5px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
            }}
          >
            ESHAAARBCONSULTANCY@GMAIL.COM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}