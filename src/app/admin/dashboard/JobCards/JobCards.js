import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import { PiMoneyWavyBold } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Logo from "@/public/Icons/Logo-Esha.png";

export default function JobCards({ title, gender, location, salary, description, requirement1, requirement2 }) {
  return (
    <Box>
      <Box
        sx={{
            maxWidth: { xs: "100%", sm: "500px", md: "500px" },
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            p: { xs: 2, sm: 3 },
            p:2,
            height: "auto",
            marginTop:{xs:0,sm:2},
            marginLeft:{xs:0,sm:2},
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
      >
        {/* Job Title, Logo */}
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
            <Image src={Logo} alt="Company Logo" width={50} height={50} style={{ objectFit: "contain" }} />
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>{title}</Typography>
              <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>{gender}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Job Description */}
        <Typography sx={{ color: "#666666", mb: 3, fontSize: { xs: "12px", sm: "14px" } }}>{description}</Typography>

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
            {location}
            <PiMoneyWavyBold
              style={{
                verticalAlign: "middle",
                marginLeft: 160,
                marginRight: 8,
                color: "var(--primary)",
                fontSize: "22px",
              }}
            />
            {salary}
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
            {requirement1}
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
            {requirement2}
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
            borderRadius: " 8px",
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
  );
}
