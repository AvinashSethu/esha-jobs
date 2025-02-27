"use client";
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import LogoImage from '@/public/Icons/Esha-Logo.png';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

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

            {/* Mobile Menu Component */}
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}  logoSrc={LogoImage.src}  />
     </Box>
    );
}