import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import { PiMoneyWavyBold } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid"; // For flip icon
import Logo from "@/public/Icons/Logo-Esha.png";

export default function JobCards({ jobtitle, gender, location, salary, description, keyFeatures,benifits,otherDetails,jobDetails,jobImage }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      sx={{
        perspective: "1000px", // Enable 3D perspective for the flip effect
        maxWidth: { xs: "100%", sm: "500px", md: "500px" },
        marginTop: { xs: 0, sm: 0 },
        marginLeft: { xs: 0, sm: 20 },
        paddingTop:{xs:0,sm:2}
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side (Current Card) - Unchanged */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "500px", md: "500px" },
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            p: { xs: 2, sm: 3 },
            p: 2,
            height: "auto",
            position: "absolute",
            width: "100%",
            backfaceVisibility: "hidden", // Hide back when flipped
          }}
        >
          {/* Job Title, Logo, and View More Button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, sm: 0 } }}>
              <Image src={Logo || jobImage} alt="Company Logo" width={50} height={50} style={{ objectFit: "contain" }} />
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>{jobtitle || "JobTitle"}</Typography>
                <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>{gender || "Gender"}</Typography>
              </Box>
            </Box>
            <Button
              onClick={handleFlip}
              sx={{
                bgcolor: "black",
                color: "white",
                borderRadius: "4px",
                padding: "4px 12px",
                fontSize: { xs: "12px", sm: "14px" },
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              View More
            </Button>
          </Box>

          {/* Job Description */}
          <Typography sx={{ color: "#666666", mb: 3, fontSize: { xs: "12px", sm: "14px" } }}>{description || "Description"}</Typography>

          {/* Location and Salary */}
          <Box sx={{ mb: 3, borderTop: "2px solid #000", pt: 2, px: 1 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PublicIcon sx={{ verticalAlign: "middle", mr: 1, color: "var(--primary)" }} />
              {location || "Location"}
              <PiMoneyWavyBold
                style={{
                  verticalAlign: "middle",
                  marginLeft: 160,
                  marginRight: 8,
                  color: "var(--primary)",
                  fontSize: "22px",
                }}
              />
              {salary || "Salary"}
            </Typography>
          </Box>

          {/* Requirements */}
          <Box sx={{ mb: 4, borderTop: "2px solid #000", pt: 2, px: 1 }}>
            <Typography
              sx={{
                color: "#333333",
                display: "flex",
                alignItems: "center",
                pb: 2,
                fontSize: { xs: "12px", sm: "14px" },
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
              {keyFeatures || "keyfeatures0"}
            </Typography>
            <Typography
              sx={{
                color: "#333333",
                pt: 2,
                display: "flex",
                alignItems: "center",
                borderTop: "2px solid #000",
                fontSize: { xs: "12px", sm: "14px" },
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
              {keyFeatures || "KeyFeatures1"}
            </Typography>
          </Box>

          {/* Bottom Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderRadius: "8px",
            }}
          >
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Edit Job
            </Button>
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <DeleteIcon /> Delete
            </Button>
          </Box>
        </Box>

        {/* Back Side (Flipped View) */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "500px", md: "500px" },
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            p: { xs: 2, sm: 3 },
            p: 2,
            height: "auto",
            position: "absolute",
            width: "100%",
            backfaceVisibility: "hidden", // Hide front when flipped
            transform: "rotateY(180deg)", // Start flipped
          }}
        >
          {/* Logo, Job Title, and Flip Icon */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, sm: 0 } }}>
              <Image src={Logo || jobImage} alt="Company Logo" width={50} height={50} style={{ objectFit: "contain" }} />
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>{jobtitle || "JobTitle"}</Typography>
              </Box>
            </Box>
            <IconButton onClick={handleFlip} sx={{ color: "black" }}>
              <FlipCameraAndroidIcon />
            </IconButton>
          </Box>

          {/* Job Details */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>Job Details:</Typography>
            <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>
              {jobDetails || "JobDetails"}
            </Typography>
          </Box>

          {/* Benefits and Eligibility in One Row */}
          <Box sx={{ mb: 4, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
            {/* Benefits */}
            <Box sx={{ flex: 1, borderTop: "2px solid #000", pt: 2, px: 1, width: "100%" }}>
              <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>Benefits:</Typography>
              <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>
                {benifits || "Benifits"}
              </Typography>
            </Box>

            {/* Eligibility */}
            <Box sx={{ flex: 1, borderTop: "2px solid #000", pt: 2, px: 1, width: "100%" }}>
              <Typography sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "14px", sm: "16px" } }}>Eligibility:</Typography>
              <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>
                {otherDetails || "OtherDetails"}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Bar (same as front) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderRadius: "8px",
            }}
          >
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Edit Job
            </Button>
            <Button sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <DeleteIcon /> Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}