import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; 
import AddIcon from '@mui/icons-material/Add'; 
import LogoutIcon from '@mui/icons-material/Logout'; 
import Image from 'next/image'; 
import Logo from "@/public/Icons/Esha-Logo.png";
import "../navbar/navbar.css";

export default function NavbarDash() {
    return (
        <Box sx={{ padding: '20px 0' }} className="nav-con"> 
            <Box 
                sx={{
                    backgroundColor: 'var(--secondary)', 
                    display: 'flex',
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '10px 20px', 
                    borderRadius: '10px', 
                    color: '#fff',
                    marginLeft:'20px',
                    marginRight:'20px',
                    height:'80px'
                }}
            >
                {/* Left side: Logo and "Esha Jobs" text */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={Logo}
                        alt="Esha Jobs Logo"
                        width={30}
                        height={30}
                        style={{
                            borderRadius: '50%',
                            marginRight: '10px',
                        }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Esha Jobs
                    </Typography>
                </Box>

                {/* Right side: Buttons with icons as specified */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Jobs button with Home icon */}
                <Button 
                        startIcon={<HomeIcon 
                            sx={{ 
                                color: '#fff',
                                height: '25px',
                                width: '25px'
                            }}
                        />}
                        sx={{ 
                            color: '#fff',
                            '&:hover': { 
                                backgroundColor: "var(--primary)",
                            },
                            marginRight: '25px',
                            height: '50px',
                            textTransform: 'none',
                            width: '150px',
                            fontSize: '17px'
                        }}
                    >
                        Jobs
                    </Button>
                    {/* Applicants button with person icon */}
                    <Button 
                        startIcon={<PersonOutlineIcon 
                            sx={{ 
                                borderRadius: '50%',
                                color: '#fff',
                                border: '1px solid #fff',
                                height: '25px',
                                width: '25px'
                            }}
                        />}
                        sx={{ 
                            color: '#fff',
                            '&:hover': { 
                                backgroundColor: "var(--primary)",
                            },
                            marginRight: '25px',
                            height: '50px',
                            textTransform: 'none',
                            width: '150px',
                            fontSize: '17px'
                        }}
                    >
                        Applicants
                    </Button>

                    {/* New Jobs button with plus icon */}
                    <Button 
                        startIcon={<AddIcon 
                            sx={{ 
                                borderRadius: '50%', 
                                color: '#fff',
                                border: '1px solid #fff',
                                height: '20px',
                                width: '20px'
                            }}
                        />}
                        sx={{ 
                            '&:hover': { backgroundColor: '#1565c0' },
                            marginRight: '25px',
                            height: '50px',
                            textTransform: 'none',
                            width: '150px',
                            fontSize: '17px',
                            color:'#fff'
                        }}
                    >
                        New Jobs
                    </Button>

                    {/* Logout button with icon above text */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button 
                            variant="outlined" 
                            sx={{ 
                                color: '#fff', 
                                border: '1px #fff',
                                '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                                minWidth: '0',
                                padding: '4px',
                                marginTop:'3px'
                            }}
                        >
                            <LogoutIcon />
                        </Button>
                        <Typography 
                            variant="caption" 
                            sx={{ color: '#fff', marginTop: '4px',fontSize:'15px' }}
                        >
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}