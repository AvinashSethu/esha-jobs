"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, TextField, Button, Typography } from "@mui/material";
import { FaLock } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import Image from "next/image";
import BackgroundImage from "@/public/Images/LoginBg.png";
import Logo from "@/public/Icons/Incrix-Logo.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for testing
    const validEmail = "admin@eshajobs.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      // Set login state in localStorage
      localStorage.setItem("isLoggedIn", "true");
      // Redirect to dashboard on successful login
      router.push("/admin/dashboard/dashpage");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", md: "100vh" },
        width: "100%",
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "transparent",
          padding: { xs: "1.5rem", md: "2rem" },
          borderRadius: "8px",
          width: { xs: "95%", md: "400px" },
          maxWidth: "500px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Box
            component="h2"
            sx={{
              color: "white",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mt: 1,
            }}
          >
            Esha Jobs Admin Login
          </Box>
        </Box>

        {error && (
          <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>
        )}

        <TextField
          fullWidth
          variant="outlined"
          placeholder="ADMIN USERNAME"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: "transparent",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <FaRegUser size={16} color="white" />
              </Box>
            ),
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: "transparent",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <FaLock size={16} color="white" />
              </Box>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "white",
            color: "var(--primary)",
            fontWeight: "bold",
            padding: { xs: "8px", md: "10px 20px" },
            borderRadius: "4px",
            fontSize: { xs: "0.9rem", md: "1rem" },
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          LOGIN
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "50px", md: "20px" },
          left: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          component="span"
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          CRAFTED BY
        </Box>
        <Image
          src={Logo.src}
          alt="Incrix Logo"
          width={80}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}