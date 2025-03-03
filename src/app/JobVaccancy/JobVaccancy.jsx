import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import { PiMoneyWavyBold } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";
import Logo from "@/public/Icons/Logo-Esha.png";

const JobCard = ({ title, gender, location, salary, description, requirement1, requirement2 }) => (
  <Box
    sx={{
      maxWidth: { xs: "100%", sm: "500px", md: "500px" },
      bgcolor: "white",
      borderRadius: 2,
      boxShadow: 1,
      p: { xs: 2, sm: 3 },
      height: "auto",
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
        <Image
          src={Logo}
          alt="Company Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#666666", fontSize: { xs: "12px", sm: "14px" } }}>
            {gender}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "white",
          borderRadius: "15px",
          px: { xs: 1.5, sm: 2 },
          fontSize: { xs: "12px", sm: "10px", md: "12px" },
          "&:hover": { bgcolor: "gray" },
          width: "auto",
          height: "40px",
        }}
      >
        View More
      </Button>
    </Box>

    {/* Job Description */}
    <Typography sx={{ color: "#666666", mb: 3, fontSize: { xs: "12px", sm: "14px" } }}>
      {description}
    </Typography>

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
            marginLeft: 40,
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

    {/* Apply Now Button */}
    <Button
      variant="contained"
      sx={{
        bgcolor: "black",
        color: "white",
        width: "100%",
        borderRadius: 2,
        py: { xs: 0.8, sm: 1 },
        fontSize: { xs: "12px", sm: "14px" },
        "&:hover": { bgcolor: "gray" },
      }}
    >
      Apply Now
    </Button>
  </Box>
);

export default function JobVacancy() {
  return (
    <Box
      sx={{
        minHeight: "auto",
        backgroundColor: "#fff",
        padding: { xs: 1, sm: 2, md: 3 },
        mb: { xs: 10, md: 0 },
      }}
    >
      {/* Header Section */}
      <Box sx={{ marginTop: { xs: "5%", md: "5%" }, justifyContent: "center", textAlign: "center" }}>
        <Typography sx={{ color: "var(--primary)", fontWeight: "bold" }}>JOB VACANCY</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            mt: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Discover the best job
        </Typography>
        <Typography
          sx={{
            mt: 3,
            color: "#999999",
            fontSize: { xs: "12px", sm: "14px", md: "15px" },
            px: { xs: 1, sm: 0 },
          }}
        >
          Start career with the best company in the world, we ensure <br /> you to get the best job possible.
        </Typography>
      </Box>

      {/* Job Cards Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Job Cards */}
        <Box
          sx={{
            flex: {
              xs: "1 1 100%", // Full width below 600px
              sm: "1 1 100%", // Full width below 800px
              md: "1 1 calc(50% - 12px)", // Two columns above 800px
            },
            display: "flex",
            justifyContent: "center", // Center the card horizontally
            maxWidth: { xs: "500px", sm: "500px", md: "100%" }, // Limit width for centering
            mx: "auto", // Center the Box itself within the parent
            "@media (min-width: 800px)": {
              flex: "1 1 calc(50% - 12px)", // Two columns above 800px
              maxWidth: "100%", // Reset maxWidth above 800px
              mx: 0, // Remove margin above 800px
            },
          }}
        >
          <JobCard
            title="Staff Nurse"
            gender="Male"
            location="Saudi Arabia"
            salary="SR 4000"
            description="You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability."
            requirement1="No Interview – Direct Job Offer"
            requirement2="Prometric Passed Required"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%", // Full width below 600px
              sm: "1 1 100%", // Full width below 800px
              md: "1 1 calc(50% - 12px)", // Two columns above 800px
            },
            display: "flex",
            justifyContent: "center", // Center the card horizontally
            maxWidth: { xs: "500px", sm: "500px", md: "100%" }, // Limit width for centering
            mx: "auto", // Center the Box itself within the parent
            "@media (min-width: 800px)": {
              flex: "1 1 calc(50% - 12px)", // Two columns above 800px
              maxWidth: "100%", // Reset maxWidth above 800px
              mx: 0, // Remove margin above 800px
            },
          }}
        >
          <JobCard
            title="Staff Nurse"
            gender="Male"
            location="Saudi Arabia"
            salary="SR 4000"
            description="You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability."
            requirement1="No Interview – Direct Job Offer"
            requirement2="Prometric Passed Required"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%", // Full width below 600px
              sm: "1 1 100%", // Full width below 800px
              md: "1 1 calc(50% - 12px)", // Two columns above 800px
            },
            display: "flex",
            justifyContent: "center", // Center the card horizontally
            maxWidth: { xs: "500px", sm: "500px", md: "100%" }, // Limit width for centering
            mx: "auto", // Center the Box itself within the parent
            "@media (min-width: 800px)": {
              flex: "1 1 calc(50% - 12px)", // Two columns above 800px
              maxWidth: "100%", // Reset maxWidth above 800px
              mx: 0, // Remove margin above 800px
            },
          }}
        >
          <JobCard
            title="Staff Nurse"
            gender="Male"
            location="Saudi Arabia"
            salary="SR 4000"
            description="You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability."
            requirement1="No Interview – Direct Job Offer"
            requirement2="Prometric Passed Required"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%", // Full width below 600px
              sm: "1 1 100%", // Full width below 800px
              md: "1 1 calc(50% - 12px)", // Two columns above 800px
            },
            display: "flex",
            justifyContent: "center", // Center the card horizontally
            maxWidth: { xs: "500px", sm: "500px", md: "100%" }, // Limit width for centering
            mx: "auto", // Center the Box itself within the parent
            "@media (min-width: 800px)": {
              flex: "1 1 calc(50% - 12px)", // Two columns above 800px
              maxWidth: "100%", // Reset maxWidth above 800px
              mx: 0, // Remove margin above 800px
            },
          }}
        >
          <JobCard
            title="Staff Nurse"
            gender="Male"
            location="Saudi Arabia"
            salary="SR 4000"
            description="You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability."
            requirement1="No Interview – Direct Job Offer"
            requirement2="Prometric Passed Required"
          />
        </Box>
      </Box>
    </Box>
  );
}