"use client"
import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "../Contact/Contact.css";

export default function ContactForm() {
  return (
    <Box
    sx={{
        flex: 1,
        width: { xs: "100%", md: "50%" },
        margin: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          padding: { xs: "30px", sm: "60px", md: "90px" },
          borderRadius: "1px",
          color: "#fff",
          width: { xs: "100%", md: "50%" },
          overflow: "visible",
          position: "absolute", // Add position relative to allow offset
        top: { md: "10%" }, // Position from the top of the parent (adjust as needed)
        left: { md: "0" }, // Position from the left (adjust as needed)
        zIndex: 10,
        }}
      >
        {/* First Row - Full Name & Email Address */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 5, sm: 2 },
            marginBottom: { xs: 6, sm: 4, md: 9 },
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="FULL NAME"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff", borderBottom: "1px solid #fff" } }}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="EMAIL ADDRESS"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff", borderBottom: "1px solid #fff" } }}
            />
          </Box>
        </Box>

        {/* Second Row - Phone Number & Services */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 2 },
            marginBottom: { xs: 6, sm: 4, md: 6 },
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              label="PHONE NUMBER"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff", borderBottom: "1px solid #fff" } }}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <TextField
              fullWidth
              select
              label="SERVICES"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff", borderBottom: "1px solid #fff" },
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDownIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="Service 1">Service 1</MenuItem>
              <MenuItem value="Service 2">Service 2</MenuItem>
              <MenuItem value="Service 3">Service 3</MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* Third Row - Job Title */}
        <Box sx={{ marginBottom: { xs: 4, md: 4 } }}>
          <TextField
            fullWidth
            select
            label="JOB TITLE"
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{
              style: { color: "#fff", borderBottom: "1px solid #fff" },
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </TextField>
        </Box>

        {/* Fourth Row - Message */}
        <Box sx={{ marginBottom: { xs: 4, md: 4 }, marginTop: { md: 12, xs: 10 } }}>
          <TextField
            fullWidth
            multiline
            rows={{ xs: 3, md: 4 }}
            placeholder="PLEASE TYPE YOUR MESSAGE HERE..."
            variant="standard"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff", borderBottom: "1px solid #fff" } }}
          />
        </Box>

        {/* Send Message Button */}
        <Box sx={{ marginTop: 4, textAlign: "left" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0056b3" },
              fontSize: { xs: "14px", sm: "16px" },
            }}
            endIcon={<ArrowForward sx={{ color: "#fff" }} />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}