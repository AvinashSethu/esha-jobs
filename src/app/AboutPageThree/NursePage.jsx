import React from "react";
import { Box, Typography, Button } from "@mui/material";
import NurseImg from "@/public/Images/Nurse.png";
import { Rocket, CenterFocusStrong } from "@mui/icons-material";
import "../AboutPageThree/NursePage.css";
import Image from "next/image";
import Link from "next/link";

export default function () {
    return (
        <Box sx={{ height: "75vh", backgroundColor: "var(--secondary)", marginBottom: "10px" }} className="Nurse-con">
            <Box
                className="Main-con"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
                    minHeight: "60vh",
                    width: "100%",
                    position: "relative",
                    overflow: "visible !important",
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // 100% on mobile, 50% on desktop
                        display: "flex",
                        flexDirection: "column",
                        padding: 2,
                        boxSizing: "border-box",
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            marginRight: { md: "20px" },
                            marginBottom: { xs: "20px", md: 0 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            className="Esha-text"
                            variant="body1"
                            sx={{
                                color: "#fff",
                                marginBottom: "20px",
                                textAlign: "left",
                                maxWidth: "100%",
                                fontSize: "20px",
                                marginLeft: "30px",
                                marginTop: "20px",
                            }}
                        >
                            <span style={{ fontWeight: "bold" }}>Esha Jobs</span> is a leading overseas
                            recruitment consultancy specializing in{" "}
                            <span style={{ color: "var(--primary)" }}>nursing placements </span>
                            across Saudi Arabia, UAE, UK, and beyond. Since 2017, we have helped{" "}
                            <span style={{ color: "var(--primary)" }}>500+ nurses</span> secure
                            high-paying jobs abroad with trusted hospitals and healthcare institutions.
                        </Typography>
                        <hr
                            style={{
                                width: "136%",
                                border: "0.1px solid #999999",
                                margin: "0 0 20px 0",
                                marginLeft: "30px",
                                marginTop: "30px",
                            }}
                            className="hor-line"
                        />
                        <Box>
                            <Link href="#contact" passHref>
                                <Button
                                    className="nur-btn"
                                    sx={{
                                        backgroundColor: "var(--primary)",
                                        color: "#FFFFFF",
                                        padding: "10px 20px",
                                        border: "none",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        marginRight: "10px",
                                        height: "60px",
                                        width: "200px",
                                        marginLeft: "30px",
                                        marginTop: "30px",
                                    }}
                                >
                                    GET HIRED →
                                </Button>
                            </Link>
                            <Link href="#services" passHref>
                                <Button
                                    className="nur-btn"
                                    sx={{
                                        backgroundColor: "transparent",
                                        color: "#FFFFFF",
                                        padding: "10px 20px",
                                        border: "1px solid #FFFFFF",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        height: "60px",
                                        width: "200px",
                                        marginTop: "30px",
                                    }}
                                >
                                    SERVICES
                                </Button>
                            </Link>
                        </Box>

                        {/* Existing Mission and Vision Cards */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 2,
                                marginTop: "20px",
                                marginLeft: "30px",
                            }}
                        >
                            {/* Mission Card */}
                            <Box
                                className="mis-con"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "20px",
                                    padding: "20px 25px",
                                    width: { xs: "100%", md: "280px" },
                                    boxShadow: "0 8px 15px rgba(0, 0, 255, 0.3)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    marginTop: "100px",
                                    height: "230px",
                                }}
                            >
                                <Typography
                                    className="mis-text"
                                    variant="body2"
                                    sx={{
                                        color: "#000000",
                                        fontWeight: "bold",
                                        marginBottom: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "23px",
                                    }}
                                >
                                    <CenterFocusStrong
                                        sx={{ marginRight: "8px", color: "var(--primary)", fontSize: "30px" }}
                                    />{" "}
                                    Mission
                                </Typography>
                                <Typography
                                    className="mis-texttwo"
                                    variant="body2"
                                    sx={{ color: "#666666", fontSize: "18px", paddingTop: "15px" }}
                                >
                                    Empowering nurses with seamless overseas job opportunities for a brighter future!
                                </Typography>
                            </Box>

                            {/* Vision Card */}
                            <Box
                                className="vis-con"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "20px",
                                    padding: "20px 25px",
                                    width: { xs: "100%", md: "280px" },
                                    boxShadow: "0 8px 15px rgba(0, 0, 255, 0.3)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    marginTop: "100px",
                                    height: "230px",
                                }}
                            >
                                <Typography
                                    className="vis-text"
                                    variant="body2"
                                    sx={{
                                        color: "#000000",
                                        fontWeight: "bold",
                                        marginBottom: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "23px",
                                    }}
                                >
                                    <Rocket sx={{ marginRight: "8px", color: "var(--primary)", fontSize: "30px" }} />{" "}
                                    Vision
                                </Typography>
                                <Typography
                                    className="vis-texttwo"
                                    variant="body2"
                                    sx={{ color: "#666666", fontSize: "18px", paddingTop: "15px" }}
                                >
                                    Placing 100+ nurses abroad every year, transforming lives through global careers!
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right Side - Background and Image */}
                <Box
                    classsName="right-box"
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        backgroundColor: {xs:"#fff",md:"var(--secondary)"},
                        position: "relative", // Required for absolute positioning of overlay
                        minHeight: { xs: "50vh", md: "auto" },
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                    }}
                >
                    {/* Image */}
                    <Image
                        className="nur-img"
                        src={NurseImg}
                        alt="Nurse"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                            position: "relative",
                            zIndex: 1,
                        }}
                    />

                    {/* Overlay Cards (Mobile Only) */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: -50,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center", // Vertically center the cards
                            alignItems: "flex-start", // Align cards to the left
                            gap: 2,
                            padding: "20px", // Padding to keep cards from touching the edge
                            boxSizing: "border-box",
                            zIndex: 2, // Ensure cards are above the image
                        }}
                    >
                        {/* Mission Card (Overlay) */}
                        <Box
                            className="mis-con-overlay"
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent for overlay effect
                                borderRadius: "20px",
                                padding: "20px 25px",
                                width: { xs: "50%", md: "280px" },
                                boxShadow: "0 8px 15px rgba(0, 0, 255, 0.3)",
                                display: { xs: "block", md: "none" }, // Visible on mobile, hidden on desktop
                                flexDirection: "column",
                                alignItems: "flex-start",
                                height:'160px'
                            }}
                        >
                            <Typography
                       
                                variant="body2"
                                sx={{
                                    color: "#000000",
                                    fontWeight: "bold",
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "16px",
                                }}
                            >
                                <CenterFocusStrong
                                    sx={{ marginRight: "8px", color: "var(--primary)", fontSize: "30px" }}
                                />{" "}
                                Mission
                            </Typography>
                            <Typography
                      
                                variant="body2"
                                sx={{ color: "#666666", fontSize: "12px", paddingTop: "5px" }}
                            >
                                Empowering nurses with seamless overseas job opportunities for a brighter future!
                            </Typography>
                        </Box>

                        {/* Vision Card (Overlay) */}
                        <Box
                            className="vis-con-overlay"
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent for overlay effect
                                borderRadius: "20px",
                                padding: "20px 25px",
                                width: { xs: "50%", md: "280px" },
                                boxShadow: "0 8px 15px rgba(0, 0, 255, 0.3)",
                                display: { xs: "block", md: "none" }, // Visible on mobile, hidden on desktop
                                flexDirection: "column",
                                alignItems: "flex-start",
                                height:'160px'
                            }}
                        >
                            <Typography
                             
                                variant="body2"
                                sx={{
                                    color: "#000000",
                                    fontWeight: "bold",
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "16px",
                                }}
                            >
                                <Rocket sx={{ marginRight: "8px", color: "var(--primary)", fontSize: "30px" }} />{" "}
                                Vision
                            </Typography>
                            <Typography
                           
                                variant="body2"
                                sx={{ color: "#666666", fontSize: "12px", paddingTop: "5px" }}
                            >
                                Placing 100+ nurses abroad every year, transforming lives through global careers!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}