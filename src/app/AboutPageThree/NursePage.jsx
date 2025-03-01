import React from "react";
import { Box, Typography, Button } from "@mui/material";
import NurseImg from "@/public/Images/Nurse.png";
import { Rocket, CenterFocusStrong } from "@mui/icons-material"; // Updated to use CenterFocusStrong instead of Target
import "../AboutPageThree/NursePage.css";
import Image from "next/image";

export default function() {
    return (
        <Box sx={{ height: '75vh', backgroundColor: 'var(--secondary)', marginBottom: '10px' }} className="Nurse-con">
            <Box
                className="Main-con"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
                    minHeight: '60vh', // Full viewport height
                    width: '100%',
                    position: 'relative',
                    overflow: 'visible !important'
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' }, // 100% on mobile, 50% on desktop
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2,
                        boxSizing: 'border-box', // Ensures padding doesn't affect width
                    }}
                >
                    {/* Left Side (Unchanged) */}
                    <Box
                        sx={{
                            flex: 1,
                            marginRight: { md: "20px" },
                            marginBottom: { xs: "20px", md: 0 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start", // Align content to the top
                            alignItems: "flex-start", // Align content to the left
                        }}
                    >
                        <Typography
                            className="Esha-text"
                            variant="body1"
                            sx={{
                                color: "#fff",
                                marginBottom: "20px",
                                textAlign: "left", // Ensure text is aligned to the left
                                maxWidth: "100%", // Ensure it doesn't stretch unnecessarily
                                fontSize: "20px",
                                marginLeft: "30px",
                                marginTop: '20px'
                            }}
                        >
                            <span style={{ fontWeight: "bold" }}>Esha Jobs</span> is a leading overseas
                            recruitment consultancy specializing in{" "}
                            <span style={{ color: "var(--primary)" }}>nursing placements </span>
                            across Saudi Arabia, UAE, UK, and beyond. Since 2017, we have helped{" "}
                            <span style={{ color: "var(--primary)" }}>500+ nurses</span> secure
                            high-paying jobs abroad with trusted hospitals and healthcare institutions.
                        </Typography>
                        {/* Added horizontal line below Typography */}
                        <hr style={{ width: "136%", border: "0.1px solid #999999", margin: "0 0 20px 0", marginLeft: '30px', marginTop: '30px' }} className="hor-line" />
                        <Box>
                            <Button
                                sx={{
                                    backgroundColor: "var(--primary)",
                                    color: "#FFFFFF",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "15px",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                    height: '60px',
                                    width: '150px',
                                    marginLeft: "30px",
                                    marginTop: '30px'
                                }}
                            >
                                GET HIRED →
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "#FFFFFF",
                                    padding: "10px 20px",
                                    border: "1px solid #FFFFFF",
                                    borderRadius: "15px",
                                    cursor: "pointer",
                                    height: '60px',
                                    width: '150px',
                                    marginTop: '30px'
                                }}
                            >
                                SERVICES
                            </Button>
                        </Box>

                        {/* New Cards for Mission and Vision */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side by side on desktop
                                gap: 2, // Spacing between cards
                                marginTop: '20px', // Space above the cards
                                marginLeft: '30px', // Align with other content on the left
                            }}
                        >
                            {/* Mission Card */}
                            <Box
                            className="mis-con"
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '20px 25px', // Increased padding for better spacing
                                    width: { xs: '100%', md: '280px' }, // Full width on mobile, fixed width on desktop
                                    boxShadow: '0 8px 15px rgba(0, 0, 255, 0.3)', // Blue box shadow at the bottom
                                    display: 'flex',
                                    flexDirection: 'column', // Stack title and text vertically
                                    alignItems: 'flex-start', // Align content to the left
                                    marginTop:'100px',
                                    height:'230px'
                                }}
                            >
                                <Typography
                                className="mis-text"
                                    variant="body2"
                                    sx={{
                                        color: '#000000',
                                        fontWeight: 'bold',
                                        marginBottom: '8px', // Space between title and text
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize:'23px'
                                    }}
                                >
                                    <CenterFocusStrong sx={{ marginRight: '8px', color: 'var(--primary)',fontSize:'30px' }} /> Mission
                                </Typography>
                                <Typography
                                className="mis-texttwo"
                                    variant="body2"
                                    sx={{ color: '#666666',fontSize:'18px',paddingTop:'15px' }}
                                >
                                    Empowering nurses with seamless overseas job opportunities for a brighter future!
                                </Typography>
                            </Box>

                            {/* Vision Card */}
                            <Box
                            className="vis-con"
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '20px 25px', // Increased padding for better spacing
                                    width: { xs: '100%', md: '280px' }, // Full width on mobile, fixed width on desktop
                                    boxShadow: '0 8px 15px rgba(0, 0, 255, 0.3)', // Blue box shadow at the bottom
                                    display: 'flex',
                                    flexDirection: 'column', // Stack title and text vertically
                                    alignItems: 'flex-start', // Align content to the left
                                    marginTop:'100px',
                                    height:'230px'
                                }}
                            >
                                <Typography
                                className="vis-text"
                                    variant="body2"
                                    sx={{
                                        color: '#000000',
                                        fontWeight: 'bold',
                                        marginBottom: '8px', // Space between title and text
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize:'23px'
                                    }}
                                >
                                    <Rocket sx={{ marginRight: '8px', color: 'var(--primary)',fontSize:'30px' }} /> Vision
                                </Typography>
                                <Typography
                                className="vis-texttwo"
                                    variant="body2"
                                    sx={{ color: '#666666',fontSize:'18px',paddingTop:'15px' }}
                                >
                                    Placing 100+ nurses abroad every year, transforming lives through global careers!
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right Side - Background and Image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' }, // 100% on mobile, 50% on desktop
                        backgroundColor: 'var(--secondary)',
                        position: 'relative',
                        minHeight: { xs: '50vh', md: 'auto' }, // Ensure some height on mobile
                        zIndex: 1,
                        display: 'flex',           // Add flex to center the image
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',      // Center vertically
                        marginTop: '30px'
                    }}
                >
                    <Image 
                        src={NurseImg} 
                        alt="Nurse" 
                        style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            objectFit: 'contain' 
                        }} 
                    />
                </Box>
            </Box>
        </Box>
    );
}