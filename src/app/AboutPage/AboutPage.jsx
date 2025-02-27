import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import "../AboutPage/AboutPage.css";

export default function AboutPage() {
    return (
        <Box display="flex" height="100vh">
            {/* Left Side - Typography and Job Listings */}
            <Box flex={1} p={4} display="flex" flexDirection="column" justifyContent="center">
                <Typography 
                    sx={{ 
                        color: "var(--primary)", 
                        fontSize: "14px", 
                        marginBottom: "8px", 
                        marginTop: '-30px',
                        display: "flex", 
                        alignItems: "center", 
                        gap: "10px"
                    }}
                >
                    <Box sx={{ flex: 0.1, borderBottom: "1px solid var(--primary)" }}></Box>
                    ABOUT ESHA JOBS
                    <Box sx={{ flex: 0.1, borderBottom: "1px solid var(--primary)" }}></Box>
                </Typography>
                
                <Typography 
                    variant="h1"
                    sx={{ 
                        color: "#000", 
                        fontSize: "42px", 
                        marginBottom: "16px",
                        marginTop: "20px"
                    }}
                >
                    Your Dream <span style={{color:'var(--primary)'}}>Job Abroad</span> is <br /> 
                    Just One Click Away!
                </Typography>
                
                <Typography 
                    sx={{ 
                        color: "#666", 
                        fontSize: "16px", 
                        marginBottom: "24px",
                        paddingTop: '10px'
                    }}
                >
                    DON’T WAIT—SECURE YOUR FUTURE TODAY!
                </Typography>

                {/* New Box with "Jobs" and Blue/Black Dots */}
                <Box 
                    sx={{ 
                        border: "0.2px solid var(--primary)", 
                        padding: "20px", 
                        width: "600px", 
                        display: "flex", 
                        justifyContent: "space-between",  
                        borderRadius: '10px',
                        height: '350px'
                    }}
                >
                    <Typography 
                        sx={{ 
                            color: "#999999", 
                            fontSize: "16px" 
                        }}
                    >
                        Jobs
                    </Typography>
                    <Box 
                        sx={{ 
                            display: "flex", 
                            gap: "8px",
                        }}
                    >
                        <Box 
                            sx={{ 
                                width: "10px", 
                                height: "10px", 
                                backgroundColor: "var(--primary)", // Blue dot
                                borderRadius: "50%" 
                            }}
                        />
                        <Box 
                            sx={{ 
                                width: "10px", 
                                height: "10px", 
                                backgroundColor: "#000000", // Black dot
                                borderRadius: "50%" 
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Right Side - Button and Small Blue Box */}
            <Box 
                flex={1} 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-end"
                p={0}
                sx={{ width: '100%' }}
            >
                <Box display="flex" justifyContent="flex-end" width="100%" mb={2} pr={4}>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            borderRadius: "20px", 
                            padding: "8px 16px", 
                            borderColor: "#000",
                            color: "#000",
                            marginTop: '50px',
                            height: '50px'
                        }}
                    >
                        BROWSE ALL
                    </Button>
                </Box>
                {/* Blue Box with Image */}
                <Box 
                    bgcolor="var(--primary)" 
                    width="620px"  
                    height="443px" 
                    sx={{ marginTop: '100px', position: 'relative', zIndex: 1 }}
                >
                    <Image 
                        src="/Images/About-Img.png"
                        alt="About Esha Jobs"
                        width={620}
                        height={700} // Increased height to allow the image to extend downward
                        style={{ 
                            objectFit: "cover", 
                            position: "absolute", 
                            top: "10px", // Adjust to move the image downward
                            left: 0,
                            zIndex: 2 // Ensure the image is on top of the blue box
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}