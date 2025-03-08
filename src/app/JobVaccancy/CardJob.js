import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import { PiMoneyWavyBold } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import Logo from "@/public/Icons/Logo-Esha.png";

export default function CardJob({
  jobtitle,
  gender,
  location,
  salary,
  description,
  keyFeatures = ["", ""],
  benefits,
  otherDetails,
  jobDetails,
  jobImage,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Format gender array into a comma-separated string
  const formatGender = (genderArray) => {
    if (!genderArray || !Array.isArray(genderArray) || genderArray.length === 0) {
      return "Gender";
    }
    return genderArray.join(", "); // Join with comma and space
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        perspective: "1000px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            maxWidth: "600px",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 10,
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Scrollable Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              wordWrap: "break-word",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 3,
                overflowX: "hidden",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, sm: 0 } }}>
                <Image
                  src={jobImage || Logo}
                  alt="Company Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <Box sx={{ overflowX: "hidden", width: "100%", height: "100%" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.5rem" } }}>
                    {jobtitle || "Job Title"}
                  </Typography>
                  <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>
                    {formatGender(gender)}
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={handleFlip}
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "30px",
                  padding: "7px 12px",
                  fontSize: { xs: "12px", sm: "14px" },
                  "&:hover": { bgcolor: "#333" },
                  flexShrink: 0,
                }}
              >
                View More
              </Button>
            </Box>

            <Typography sx={{ color: "#666666", mb: 3, fontSize: { xs: "12px", sm: "14px" }, wordWrap: "break-word" }}>
              {description || "Description"}
            </Typography>

            <Box sx={{ mb: 3, borderTop: "2px solid #000", pt: 2, px: 1, overflowX: "hidden" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px" },
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  overflowX: "hidden",
                }}
              >
                <PublicIcon sx={{ verticalAlign: "middle", mr: 1, color: "#000" }} />
                {location || "Location"}
                <PiMoneyWavyBold
                  style={{
                    verticalAlign: "middle",
                    marginLeft: 90,
                    marginRight: 8,
                    color: "#000",
                    fontSize: "22px",
                  }}
                />
                {salary || "Salary"}
              </Typography>
            </Box>

            <Box sx={{ borderTop: "2px solid #000", pt: 2, px: 1, overflowX: "hidden" }}>
              <Typography
                sx={{
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                  pb: 2,
                  fontSize: { xs: "12px", sm: "14px" },
                  wordWrap: "break-word",
                }}
              >
                <CheckIcon
                  sx={{
                    color: "#fff",
                    bgcolor: "#000",
                    borderRadius: "50%",
                    fontSize: { xs: "16px", sm: "20px" },
                    mr: 1,
                  }}
                />
                {keyFeatures[0] || "Key Feature 1"}
              </Typography>
              <Typography
                sx={{
                  color: "#333333",
                  pt: 2,
                  display: "flex",
                  alignItems: "center",
                  borderTop: "2px solid #000",
                  fontSize: { xs: "12px", sm: "14px" },
                  wordWrap: "break-word",
                }}
              >
                <CheckIcon
                  sx={{
                    color: "#fff",
                    bgcolor: "#000",
                    borderRadius: "50%",
                    fontSize: { xs: "16px", sm: "20px" },
                    mr: 1,
                  }}
                />
                {keyFeatures[1] || "Key Feature 2"}
              </Typography>
            </Box>
          </Box>

          {/* Fixed Button Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              overflowX: "hidden",
              flexShrink: 0,
              height: "40px",
              overflowY: "hidden",
            }}
          >
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Apply Now
            </Button>
          </Box>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            maxWidth: "600px",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Scrollable Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              wordWrap: "break-word",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 3,
                overflowX: "hidden",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, sm: 0 } }}>
                <Image
                  src={jobImage || Logo}
                  alt="Company Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <Box sx={{ overflowX: "hidden" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
                    {jobtitle || "Job Title"}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={handleFlip} sx={{ color: "black", flexShrink: 0 }}>
                <FlipCameraAndroidIcon />
              </IconButton>
            </Box>

            <Box sx={{ mb: 3, overflowX: "hidden" }}>
              <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>
                Job Details:
              </Typography>
              <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" }, wordWrap: "break-word" }}>
                {jobDetails || "Job Details"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, overflowX: "hidden" }}>
              <Box sx={{ flex: 1, borderTop: "2px solid #000", pt: 2, px: 1, width: "50%" }}>
                <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>
                  Benefits:
                </Typography>
                <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" }, wordWrap: "break-word" }}>
                  {benefits || "Benefits"}
                </Typography>
              </Box>

              <Box sx={{ flex: 1, borderTop: "2px solid #000", pt: 2, px: 1, width: "100%" }}>
                <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>
                  Eligibility:
                </Typography>
                <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" }, wordWrap: "break-word" }}>
                  {otherDetails || "Other Details"}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Fixed Button Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              overflowX: "hidden",
              flexShrink: 0,
              height: "40px",
              overflowY: "hidden",
            }}
          >
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Apply Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}