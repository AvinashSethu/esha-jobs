"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import "../Footer/Footer.css";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";

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
          alignItems: "flex-end",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {/* First Box - Esha Arab Nursing Consultancy */}
        <Box
          className="first-con"
          sx={{
            flex: "1",
            minWidth: "0",
            padding: "20px",
            textAlign: "left",
            backgroundColor: "#D4E6FA",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
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

        {/* Second Box - Quick Links and Social Media */}
        <SecondBox activeLink={activeLink} handleLinkClick={handleLinkClick} />

        {/* Third Box - Logo and Address */}
        <ThirdBox handlePhoneCall={handlePhoneCall} />
      </Box>
    </Box>
  );
}