"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import './HeroPage.css';
import HeroImg1 from "@/public/Images/Hero1.png";
import HeroImg2 from "@/public/Images/Hero2.png";
import Navbar from '../Navbar/NavBar';
import Link from 'next/link';

export default function HeroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent = [
    {
      subtitle: "Esha Arab Nursing Consultancy",
      title: "Your Gateway to Global Careers!",
      buttonText: "Explore Vacancies",
      image: `${HeroImg1.src}`
    },
    {
      subtitle: "Esha Arab Nursing Consultancy",
      title: "Unlocking Doors to a Brighter Tomorrow!",
      buttonText: "Explore Vacancies",
      image: `${HeroImg2.src}`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderTitle = (title, index) => {
    if (index === 1) { // Apply logic only to the second hero content
      const parts = title.split("Brighter Tomorrow!"); // Split at the desired point
      return (
        <>
          <Box
            component="span"
            sx={{
              display: { xs: 'inline', md: 'block' } // Block on md+, inline on xs
            }}
          >
            {parts[0].trim()}{' '} {/* "Unlocking Doors to a" */}
          </Box>
          <Box
            component="span"
            sx={{
              display: { xs: 'inline', md: 'block' } // Block on md+, inline on xs
            }}
          >
            Brighter Tomorrow! {/* Second part */}
          </Box>
        </>
      );
    }
    // For the first hero content or any other, keep it as is
    return title.split(' ').map((word, idx, arr) => (
      <Box 
        key={idx} 
        component="span" 
        sx={{ display: { xs: 'inline', md: idx === arr.length - 1 ? 'block' : 'inline' } }}
      >
        {word}{' '}
      </Box>
    ));
  };

  return (
    <Box>
      <Navbar />
      <Box
        className="hero-container"
        sx={{
          backgroundImage: `url(${heroContent[currentIndex].image})`,
          transition: 'background-image 1s ease-in-out',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'left',
          height: '100vh',
          paddingLeft: '10%',
        }}
      >
        <Box className='Hero-con'>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.5rem' }, 
              marginBottom: '2rem' 
            }}
          >
            {heroContent[currentIndex].subtitle}
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.2rem', md: '4rem' }, 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              display: 'block', 
              lineHeight: 1.2, 
            }}
          >
            {renderTitle(heroContent[currentIndex].title, currentIndex)}
          </Typography>
          <Link href="#jobs" passHref>
          <Button 
            variant="contained" 
            className='hero-btn'
            sx={{ 
              backgroundColor: 'var(--primary)', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '30px',
              fontSize: { xs: '0.8rem', md: '1rem' },
              '&:hover': { backgroundColor: '#1565c0' },
              height: '60px',
              textTransform: 'none',
              width: '240px'
            }}
            endIcon={<ArrowForwardIcon />}
          >
            {heroContent[currentIndex].buttonText}
          </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}