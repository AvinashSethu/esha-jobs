import React from "react";
import { Box, Typography, } from "@mui/material";
import "../AboutPageThree/AboutThreeMain.css";


export default function AboutThreeMain() {
  return (
    <Box sx={{ height: "auto", backgroundColor: "var(--secondary)" }} className="Three-main">
      {/* "Center Text" */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* "WHO WE ARE" */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Box
              className="Who-text"
              sx={{
                height: "2px",
                backgroundColor: "var(--primary)",
                width: "30px",
                marginRight: "10px",
              }}
            />
            <Typography
              className="Who-text"
              variant="h6"
              sx={{
                color: "var(--primary)",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              WHO WE ARE
            </Typography>
            <Box
              className="Who-text"
              sx={{
                height: "2px",
                backgroundColor: "var(--primary)",
                width: "30px",
                marginLeft: "10px",
              }}
            />
          </Box>

          {/* "Life-changing global career opportunities!" */}
          <Typography
            className="Car-text"
            variant="h3"
            sx={{
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Life-changing  global{" "} 
            <span style={{ color: "var(--primary)" }}>career <br /> opportunities!</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}