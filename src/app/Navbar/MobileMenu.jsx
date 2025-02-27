"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MobileMenu = ({ isMenuOpen, toggleMenu, logoSrc }) => {
    return (
        <Box
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#000',
                zIndex: 999,
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                visibility: isMenuOpen ? 'visible' : 'hidden',
            }}
        >
            {/* Top Section: Logo and Close Icon */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={logoSrc}
                        alt="Esha Jobs Logo"
                        width={50}
                        height={50}
                        style={{ height: '40px', width: 'auto' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            ml: 2,
                        }}
                    >
                        Esha Jobs
                    </Typography>
                </Box>
                <CloseIcon
                    sx={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
                    onClick={toggleMenu}
                />
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: '50px', marginLeft: '20px' }}>
                <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    Home
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    About us
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    Services
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>
                    Jobs
                </Typography>
            </Box>

            {/* Get Hired Button */}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    fontSize: { xs: '1.2rem', md: '2rem' },
                    '&:hover': { backgroundColor: '#1565c0' },
                    height: '60px',
                    textTransform: 'none',
                    width: '200px',
                    marginTop: '50px',
                }}
                endIcon={<ArrowForwardIcon />}
            >
                Get Hired
            </Button>
        </Box>
    );
};

export default MobileMenu;