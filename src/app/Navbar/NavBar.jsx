"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import LogoImage from '@/public/Icons/Esha-Logo.png';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effect to disable/enable body scrolling when mobile menu is open/closed
    useEffect(() => {
        const body = document.body;
        if (isMenuOpen) {
            console.log('Menu opened: Disabling scroll'); // Debug log
            body.style.overflow = 'hidden';
            body.style.height = '100vh'; // Lock viewport height
            body.style.position = 'fixed'; // Prevent any movement
            body.style.width = '100%'; // Ensure full width
        } else {
            console.log('Menu closed: Enabling scroll'); // Debug log
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
        }

        // Cleanup on unmount
        return () => {
            console.log('Cleanup: Restoring scroll'); // Debug log
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
        };
    }, [isMenuOpen]);

    // Scroll tracking effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'jobs', 'contact'];
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
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false); // Close menu on link click
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
                    height: '70px',
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
                        <Link href="#home" passHref>
                            <Typography
                                variant="body1"
                                onClick={() => handleLinkClick('#home')}
                                sx={{
                                    color: activeLink === '#home' ? 'var(--primary)' : '#fff',
                                    marginRight: '2rem',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'var(--primary)' },
                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link href="#about" passHref>
                            <Typography
                                variant="body1"
                                onClick={() => handleLinkClick('#about')}
                                sx={{
                                    color: activeLink === '#about' ? 'var(--primary)' : '#fff',
                                    marginRight: '2rem',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'var(--primary)' },
                                    textDecoration: 'none',
                                }}
                            >
                                About us
                            </Typography>
                        </Link>
                        <Link href="#services" passHref>
                            <Typography
                                variant="body1"
                                onClick={() => handleLinkClick('#services')}
                                sx={{
                                    color: activeLink === '#services' ? 'var(--primary)' : '#fff',
                                    marginRight: '2rem',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'var(--primary)' },
                                    textDecoration: 'none',
                                }}
                            >
                                Services
                            </Typography>
                        </Link>
                        <Link href="#jobs" passHref>
                            <Typography
                                variant="body1"
                                onClick={() => handleLinkClick('#jobs')}
                                sx={{
                                    color: activeLink === '#jobs' ? 'var(--primary)' : '#fff',
                                    marginRight: '3rem',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'var(--primary)' },
                                    textDecoration: 'none',
                                }}
                            >
                                Jobs
                            </Typography>
                        </Link>
                    </Box>

                    {/* Desktop Button */}
                    <Box className="desktop-button">
                        <Link href="#contact" passHref>
                            <Button
                                variant="contained"
                                onClick={() => handleLinkClick('#contact')}
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
                        </Link>
                    </Box>

                    {/* Hamburger Icon */}
                    <Box className="hamburger-icon" onClick={toggleMenu}>
                        <MenuIcon sx={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }} />
                    </Box>
                </Box>
            </Box>

            {/* Mobile Menu Component */}
            <MobileMenu 
                isMenuOpen={isMenuOpen} 
                toggleMenu={toggleMenu} 
                logoSrc={LogoImage.src}
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
            />
        </Box>
    );
}