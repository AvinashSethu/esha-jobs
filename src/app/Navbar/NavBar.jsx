"use client";
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css';
import LogoImage from '@/public/Icons/Esha-Logo.png';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box
            className="navbar"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                marginTop: '20px',
            }}
        >
            <Box
                className="navbar-container"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0 10px',
                    height: '80px',
                    padding: '0 20px',
                    backgroundColor: '#000',
                    maxWidth: 'calc(100% - 20px)',
                    borderRadius: '50px',
                }}
            >
                {/* Logo and "Esha Jobs" Text */}
                <Box className="navbar-logo" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={LogoImage.src}
                        alt="Esha Jobs Logo"
                        width={50}
                        height={50}
                        style={{ height: '40px', width: 'auto' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
                        <Typography
                            className="nav-title esha-text"
                            variant="h6"
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            Esha
                        </Typography>
                        <Typography
                            className="nav-title jobs-text"
                            variant="h6"
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                marginLeft: '10px',
                            }}
                        >
                            Jobs
                        </Typography>
                    </Box>
                </Box>

                {/* Navigation Links and Button/Hamburger */}
                <Box className="navbar-right">
                    <Box className="navbar-links">
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                marginRight: '2rem',
                                cursor: 'pointer',
                                '&:hover': { color: 'var(--primary)' },
                            }}
                        >
                            Home
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                marginRight: '2rem',
                                cursor: 'pointer',
                                '&:hover': { color: 'var(--primary)' },
                            }}
                        >
                            About us
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                marginRight: '2rem',
                                cursor: 'pointer',
                                '&:hover': { color: 'var(--primary)' },
                            }}
                        >
                            Services
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                marginRight: '3rem',
                                cursor: 'pointer',
                                '&:hover': { color: 'var(--primary)' },
                            }}
                        >
                            Jobs
                        </Typography>
                    </Box>

                    {/* Desktop Button */}
                    <Box className="desktop-button">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'var(--primary)',
                                color: '#fff',
                                borderRadius: '30px',
                                padding: '10px 20px',
                                fontSize: '1rem',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#1976d2' },
                            }}
                        >
                            Get Hired
                        </Button>
                    </Box>

                    {/* Hamburger Icon */}
                    <Box className="hamburger-icon" onClick={toggleMenu}>
                        <MenuIcon sx={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }} />
                    </Box>
                </Box>
            </Box>

            {/* Mobile Menu with Animation */}
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
                    visibility: isMenuOpen ? 'visible' : 'hidden', // Control visibility
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
                            src={LogoImage.src}
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
        </Box>
    );
}