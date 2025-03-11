// ShowCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ShowCard({ 
  applicant, 
  index, 
  onClose, 
  formatDate 
}) {
  return (
    <Card
      sx={{
        position: { xs: "fixed", md: "absolute" },
        top: { xs: "50%", md: "25%" },
        left: { xs: "50%", md: "auto" },
        right: { xs: "auto", md: "16px" },
        transform: { xs: "translate(-50%, -50%)", md: "none" },
        width: { xs: "90vw", sm: "400px" },
        maxHeight: "90vh",
        backgroundColor: "#fff",
        borderRadius: "17px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1300,
        overflowY: "auto",
        position:'fixed'
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "var(--primary)",
            "&:hover": { backgroundColor: "var(--secondary)" },
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>

        <Stack spacing={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                backgroundColor: "var(--primary)",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
                color: "#fff",
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              {index + 1}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {applicant.fullName || "Full Name"}
            </Typography>
          </Box>

          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
            {applicant.email || "Email"}
          </Typography>
          <Typography variant="body2" sx={{cursor:'pointer'}}>
            <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
            {applicant.phone || "Phone"}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>Job Title:</span>{" "}
            {applicant.jobTitle || "Job Title"}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>Services:</span>{" "}
            {applicant.services || "N/A"}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
            {formatDate(applicant.createdAt)}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>Message:</span>{" "}
            {applicant.message || "Message"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}