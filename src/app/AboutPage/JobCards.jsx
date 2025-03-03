import React from "react";
import { Box, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MoneyIcon from "@mui/icons-material/Money";
import "../AboutPage/JobCards.css";
import { PiMoneyWavyBold } from "react-icons/pi";



export default function JobCards() {
  return (
    <Box
      className="job-cards-container"
      sx={{
        border: "0.2px solid var(--primary)",
        padding: { xs: "15px", md: "20px" }, // Smaller padding on mobile
        width: "100%", // Full width, no overflow
        maxWidth: { xs: "100%", md: "600px" }, // Cap width on desktop, full on mobile
        borderRadius: "10px",
        height: { xs: "auto", md: "400px" }, // Auto height on mobile, fixed on desktop
        boxSizing: "border-box",
        margin: "0 auto", // Center the container horizontally
      }}
    >
      <Box
        className="job-header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: { xs: "12px", md: "16px" }, // Smaller margin on mobile
        }}
      >
        <Typography
          sx={{
            color: "#999999",
            fontSize: { xs: "14px", md: "16px" }, // Smaller font on mobile
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
              backgroundColor: "var(--primary)",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#000000",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      <Box
        className="scroll-container"
        sx={{
          height: { xs: "250px", md: "300px" }, // Shorter on mobile
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          className="scroll-content"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            animation: {
              xs: "scrollLoop 8s infinite linear", // Slower on mobile
              md: "scrollLoop 5s infinite linear", // Faster on desktop
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Box
                key={index}
                className="job-card"
                sx={{
                  backgroundColor: "#000000",
                  padding: { xs: "10px", md: "12px" }, // Smaller padding on mobile
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: { xs: "90px", md: "100px" }, // Shorter on mobile
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: { xs: "8px", md: "10px" }, // Smaller margin on mobile
                  }}
                >
                  <Typography
                    className="job-title"
                    variant="h6"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "16px" }, // Smaller font on mobile
                    }}
                  >
                    Staff Nurse
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <PiMoneyWavyBold // Replace MoneyIcon with PiMoneyWavyBold
                      className="job-icon"
                      style={{
                        color: "var(--primary)",
                        fontSize: "22px", // Phosphor icons use style prop instead of sx
                      }}
                    />
                    <Typography
                      className="job-details"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "13px", md: "16px" }, // Smaller font on mobile
                      }}
                    >
                      SAR 4000
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <PublicIcon
                        className="job-icon"
                        sx={{
                          color: "var(--primary)",
                          fontSize: { xs: "14px", md: "16px" }, // Smaller icon on mobile
                        }}
                      />
                      <Typography
                        className="job-details"
                        sx={{
                          color: "#fff",
                          fontSize: { xs: "13px", md: "16px" }, // Smaller font on mobile
                        }}
                      >
                        Saudi Arabia
                      </Typography>
                    </Box>
                    <Typography
                      className="job-details"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "13px", md: "15px" }, // Smaller font on mobile
                      }}
                    >
                      ✓ BSc/PBSc Nursing
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}