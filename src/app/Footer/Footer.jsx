"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import Link from "next/link";
import "../Footer/Footer.css";
import Logo from "@/public/Icons/Esha-Logo.png";

export default function Footer() {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "jobs", "process", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneCall = () => {
    window.location.href = "tel: 9788903129";
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
        marginTop: "7%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end", // Align bottoms of the boxes
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {/* First Box - Esha Arab Nursing Consultancy (Highest Step) */}
        <Box
  className="first-con"
  sx={{
    flex: "1",
    minWidth: "0",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#D4E6FA",
    height: "300px", // Tallest box for the highest step
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "flex-start", // Ensure left alignment of text
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      marginBottom: "10px",
    },
  }}
>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#000",
              marginBottom: "13px",
              fontSize: "24px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
            }}
          >
            Esha Arab Nursing Consultancy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              marginBottom: "10px",
              fontSize: "17px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
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
                borderRadius: "30px",
                "&:hover": { backgroundColor: "var(--primary)" },
                height: "50px",
                width: "170px",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  fontSize: "0.8rem",
                },
              }}
            >
              Vacancies
            </Button>
          </Link>
        </Box>

        {/* Second Box - Quick Links and Social Media Icons (Middle Step) */}
        <Box
          className="sec-box"
          sx={{
            flex: "1",
            minWidth: "0",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#fff",
            height: "250px", // Slightly shorter than the first box
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
              marginLeft:'20px'
            }}
          >
            QUICK LINKS <ArrowForwardIcon
    sx={{
      marginLeft: '2px',
      transform: 'rotate(330deg)', 
      color:'var(--primary)'
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

        {/* Third Box - Logo and Address (Lowest Step) */}
        <Box
          className="third-con"
          sx={{
            flex: "1",
            minWidth: "0",
            padding: "20px",
            textAlign: "left",
            backgroundColor: "#fff",
            height: "200px", // Shortest box for the lowest step
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
            style={{
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
      </Box>
    </Box>
  );
}