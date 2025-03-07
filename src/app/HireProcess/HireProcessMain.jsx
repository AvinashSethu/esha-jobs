"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../HireProcess/HireProcessMain.css";
import Link from 'next/link';

export default function HireProcessMain() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef(null); // Changed to reference the whole container

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate when container enters viewport and how far we've scrolled through it
        const scrollPosition = window.scrollY;
        const startPoint = container.offsetTop - windowHeight;
        const endPoint = container.offsetTop + containerHeight - windowHeight;

        if (scrollPosition >= startPoint && scrollPosition <= endPoint) {
          // Calculate progress within the container
          const progress = ((scrollPosition - startPoint) / (endPoint - startPoint)) * 100;
          const containerWidth = container.offsetWidth;
          const cappedWidth = Math.min((progress / 100) * containerWidth, containerWidth);
          setScrollWidth(cappedWidth);
        } else if (scrollPosition < startPoint) {
          setScrollWidth(0); // Before container
        } else if (scrollPosition > endPoint) {
          setScrollWidth(container.offsetWidth); // After container
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className="hire-process-container" ref={containerRef}>
      {/* Top Section */}
      <Box className="top-section">
        <Box className="text-container">
          <Typography className="subheading">HOW IT WORKS</Typography>
          <Typography className="heading">Simple & Fast Hiring Process</Typography>
          <Typography className="description">Get Hired in Just 4 Easy Steps.</Typography>
        </Box>

        <Link href="#jobs" passHref>
          <Button 
            className="cta-btn" 
            endIcon={<ArrowForwardIcon />} 
            sx={{bgcolor:'var(--primary)',borderRadius:'30px',height:'60px',color:'#fff',padding:'25px'}}
          >
            Explore Vacancies
          </Button>
        </Link>
      </Box>

      {/* Progress Line */}
      <Box className="progress-wrapper">
        <Box
          className="progress-bar"
          style={{ width: `${scrollWidth}px` }}
        />
      </Box>

      {/* Steps Section */}
      <Box className="steps-container">
        {[
          {
            step: "01",
            title: "Apply Online",
            desc: "Fill out a quick application and submit your details—it's that simple!",
          },
          {
            step: "02",
            title: "Get Shortlisted",
            desc: "Our experts will review your profile, verify documents, and guide you through the process.",
          },
          {
            step: "03",
            title: "Receive a Job Offer",
            desc: "For select jobs, no interview is required! Get an instant offer and start your journey.",
          },
          {
            step: "04",
            title: "Join & Start Your Career!",
            desc: "Complete the final formalities and begin your job—in India or abroad!",
          },
        ].map((item, index) => (
          <Box key={index} className="step-box">
            <Typography className="step-number">{item.step}</Typography>
            <Typography className="step-title">{item.title}</Typography>
            <Typography className="step-desc">{item.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}