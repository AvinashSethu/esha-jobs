// Applicants.js
import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
  Typography,
  useMediaQuery,
  Stack,
} from "@mui/material";
import "../Applicants/Applicants.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShowCard from "./ShowCard";

export default function Applicants({ applicants }) {
  const [showCard, setShowCard] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const applicantList = Array.isArray(applicants) ? applicants : [];

  const handleViewMore = (applicant) => {
    setSelectedApplicant(applicant);
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setSelectedApplicant(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
  };

  return (
    <Box
      sx={{
        padding: 0,
        width: "100%",
        overflowX: "auto",
        margin: 0,
      }}
    >
      <Table
        sx={{
          minWidth: isMobile ? "auto" : 650,
          width: "100%",
          margin: 0,
          padding: 0,
          "& .MuiTableCell-root": {
            padding: "8px",
          },
        }}
        aria-label="applicants table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E3F2FD" }}>
            <TableCell>S.No</TableCell>
            <TableCell>Name / Email</TableCell>
            {!isMobile && <TableCell>Phone No</TableCell>}
            {!isMobile && <TableCell>Job Title</TableCell>}
            {!isTablet && <TableCell>Services</TableCell>}
            {!isTablet && <TableCell>Date</TableCell>}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applicantList.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={isMobile ? 3 : isTablet ? 4 : 7}
                sx={{
                  textAlign: "center",
                  backgroundColor: "#5D88B2",
                  color: "#fff",
                  py: 2,
                }}
              >
                No applicants found.
              </TableCell>
            </TableRow>
          ) : (
            applicantList.map((applicant, index) => (
              <TableRow
                key={applicant._id || index}
                sx={{
                  backgroundColor: "#D4E6FA",
                  "&:hover": { backgroundColor: "#BBDEFB" },
                  borderBottom: "0.1px solid #666",
                  borderRadius: "20px",
                  height: "100px",
                }}
              >
                <TableCell sx={{ borderBottom: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "var(--primary)",
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      paddingLeft: "11px",
                      paddingTop: "5px",
                      color: "#fff",
                    }}
                  >
                    {index + 1}
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: "none", py: 1 }}>
                  <Stack>
                    <Typography variant={isMobile ? "body2" : "body1"}>
                      <strong>{applicant.fullName || "Full Name"}</strong>
                    </Typography>
                    <Typography variant="caption">
                      {applicant.email || "Email"}
                    </Typography>
                  </Stack>
                </TableCell>
                {!isMobile && (
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {applicant.phone || "Phone"}
                  </TableCell>
                )}
                {!isMobile && (
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {applicant.jobTitle || "Job Title"}
                  </TableCell>
                )}
                {!isTablet && (
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {applicant.services || "Services"}
                  </TableCell>
                )}
                {!isTablet && (
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {formatDate(applicant.createdAt)}
                  </TableCell>
                )}
                <TableCell sx={{ borderBottom: "none", py: 1 }}>
                  <Button
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      backgroundColor: "var(--primary)",
                      color: "white",
                      "&:hover": { backgroundColor: "var(--primary)" },
                      borderRadius: "7px",
                      fontSize: "12px",
                      width: { xs: 40, md: 100 },
                    }}
                    onClick={() => handleViewMore(applicant)}
                  >
                    <ArrowForwardIcon sx={{ fontSize: "15px" }} />{" "}
                    {isMobile ? "View" : "View More"}
                  </Button>

                  {showCard && selectedApplicant?._id === applicant._id && (
                    <ShowCard
                      applicant={selectedApplicant}
                      index={index}
                      onClose={handleCloseCard}
                      formatDate={formatDate}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Box>
  );
}