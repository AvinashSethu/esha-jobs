import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Dialog, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import { PiMoneyWavyBold } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import WarningIcon from "@mui/icons-material/Warning";
import Logo from "@/public/Icons/Logo-Esha.png";
import axios from "axios";

export default function JobCards({
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
  _id,
  onDelete,
  onEditJob,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const formatGender = (genderArray) => {
    if (!genderArray || !Array.isArray(genderArray) || genderArray.length === 0) {
      return "Gender";
    }
    return genderArray.join(", ");
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log("Attempting to delete job with ID:", _id);
      const response = await axios.delete("/api/jobs", {
        data: { id: _id },
      });
      console.log("Delete response:", response.data);
      if (onDelete) {
        console.log("Calling onDelete with ID:", _id);
        onDelete(_id, "Job deleted successfully!", "success");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      if (onDelete) {
        onDelete(_id, "Failed to delete job: " + (error.response?.data?.message || error.message), "error");
      }
    } finally {
      setOpenDialog(false);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleEditClick = () => {
    if (onEditJob) { // Check if onEditJob exists
      onEditJob({
        jobtitle,
        gender,
        location,
        salary,
        description,
        keyFeatures,
        benefits,
        otherDetails,
        jobDetails,
        jobImage,
        _id,
      });
    } else {
      console.error("onEditJob is not defined");
    }
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
                  <Typography sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", sm: "1.5rem" } }}>
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
                  padding: "4px 12px",
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
                    fontSize: "18px",
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              overflowX: "hidden",
              flexShrink: 0,
            }}
          >
            <Button
            onClick={handleEditClick}
             sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Edit Job
            </Button>
            <Button
              sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}
              onClick={handleDeleteClick}
            >
              <DeleteIcon /> Delete
            </Button>
          </Box>
        </Box>

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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "black",
              color: "white",
              width: "100%",
              p: 2,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              overflowX: "hidden",
              flexShrink: 0,
            }}
          >
            <Button
            onClick={handleEditClick}
             sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}>
              <EditIcon /> Edit Job
            </Button>
            <Button
              sx={{ color: "white", display: "flex", alignItems: "center", gap: 1 }}
              onClick={handleDeleteClick}
            >
              <DeleteIcon /> Delete
            </Button>
          </Box>
        </Box>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            maxWidth: "400px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <WarningIcon
            sx={{
              fontSize: 40,
              color: "white",
              bgcolor: "red",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "red",
            mb: 1,
          }}
        >
          Delete?
        </Typography>

    

        <DialogContent>
          <DialogContentText
            sx={{
              color: "black",
              fontSize: "16px",
            }}
          >
            Are you sure you want to delete this job?
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            gap: 2,
            pb: 2,
          }}
        >
          <Button
            onClick={handleDeleteConfirm}
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              borderRadius: "4px",
              px: 4,
              py: 1,
              textTransform: "none",
              "&:hover": {
                borderColor: "black",
                bgcolor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            sx={{
              bgcolor: "var(--primary)",
              color: "white",
              borderRadius: "4px",
              px: 4,
              py: 1,
              textTransform: "none",
              "&:hover": {
                bgcolor: "darkblue",
              },
            }}
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}