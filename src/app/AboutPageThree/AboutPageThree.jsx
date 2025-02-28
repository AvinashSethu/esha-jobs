import React from "react";
import { Box, Typography } from "@mui/material";
import "../AboutPageThree/AboutPageThree.css";

export default function AboutPageThree() {
    return (
        <Box sx={{ height: '100vh', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center' }}>
            <Box 
                className="left-section"
                display="flex" 
                flexDirection="column" 
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: { xs: '100%', md: '50%' },
                    order: { xs: 1, md: 1 },
                    padding: 0,
                    paddingLeft: { xs: 0, md: '40px' }
                }}
            >
                <Typography 
                    className="about-who-text"
                    sx={{ 
                        color: "var(--primary)", 
                        fontSize: "14px", 
                        marginBottom: "8px", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "10px",
                        textAlign: 'center',
                        width: '100%', // Ensure full width for proper line display
                        marginLeft:"460px"
                    }}
                >
                    <Box 
                        component="span"
                        sx={{ 
                            flex: 0.1, // Equal growth on both sides
                            borderBottom: "1px solid var(--primary)",
                            minWidth: '20px' // Ensure minimum visibility
                        }} 
                    />
                    WHO ARE WE
                    <Box 
                        component="span"
                        sx={{ 
                            flex: 0.1, // Equal growth on both sides
                            borderBottom: "1px solid var(--primary)",
                            minWidth: '20px' // Ensure minimum visibility
                        }} 
                    />
                </Typography>
                
                <Typography 
                    className="career-text"
                    variant="h1"
                    sx={{ 
                        color: "#fff", 
                        fontSize: "42px", 
                        marginBottom: "16px",
                        paddingTop: '15px',
                        textAlign: 'center'
                    }}
                >
                    Life-changing global
                    <span style={{color:'var(--primary)'}}> Career Opportunities</span> 
                </Typography>
            </Box>
        </Box>
    );
}