"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import './HeroPage.css';
import HeroImg1 from "@/public/Images/Hero1.png";
import HeroImg2 from "@/public/Images/Hero2.png";
import Navbar from '../Navbar/NavBar';

export default function HeroPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [
    `${HeroImg1.src}`,
    `${HeroImg2.src}`,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
        {/*Navbar*/}
        <Navbar />
        <Box
      className="hero-container"
      sx={{
        backgroundImage: `url(${backgroundImages[currentImage]})`,
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
      {/* Hero content */}
      <Box className='Hero-con'>
      <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginBottom: '2rem' }}>
        Esha Arab Nursing Consultancy
      </Typography>
      <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' }, 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              display: 'block', 
              lineHeight: 1.2, 
            }}
          >
            Your Gateway to Global{' '}
            <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}>
              Careers!
            </Box>
          </Typography>
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
          height:'60px',
          textTransform: 'none',
          width:'240px'
        }}
        endIcon={<ArrowForwardIcon />} >
        Explore Vacancies
      </Button>
      </Box>
    </Box>
    </Box>
  );
}