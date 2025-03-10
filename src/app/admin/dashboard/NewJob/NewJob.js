import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import LeftNewJob from "./LeftNewJob";
import RightNewJob from "./RightNewJob";
import "../NewJob/NewJob.css";
import { countries } from "@/src/app/Components/countries";

export default function NewJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    salary: "",
    location: "",
    gender: [],
    description: "",
    keyFeatures: ["", ""],
    jobDetails: "",
    benefits: "",
    otherDetails: "",
    jobImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

 // Snackbar handlers
 const handleCloseSnackbar = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }
  setSnackbar({ ...snackbar, open: false });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  // Clear error for this field when user starts typing
  setErrors((prev) => ({ ...prev, [name]: "" }));
};

const handleKeyFeaturesChange = (index, value) => {
  const newKeyFeatures = [...formData.keyFeatures];
  newKeyFeatures[index] = value;
  setFormData((prev) => ({
    ...prev,
    keyFeatures: newKeyFeatures,
  }));
};

const handleGenderChange = (value) => {
  setFormData((prev) => {
    const genderArray = prev.gender.includes(value)
      ? prev.gender.filter((g) => g !== value)
      : [...prev.gender, value];
    return { ...prev, gender: genderArray };
  });
  // Clear gender error when user selects a gender
  if (formData.gender.length === 0 || !formData.gender.includes(value)) {
    setErrors((prev) => ({ ...prev, gender: "" }));
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    setFormData((prev) => ({ ...prev, jobImage: file }));
    setImagePreview(URL.createObjectURL(file));
  }
};

const removeImage = () => {
  setFormData((prev) => ({
    ...prev,
    jobImage: null,
  }));
  setImagePreview(null);
  URL.revokeObjectURL(imagePreview);
};

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const validateForm = () => {
  const newErrors = {};
  const requiredFields = [
    "jobTitle",
    "salary",
    "location",
    "gender",
    "description",
  ];

  requiredFields.forEach((field) => {
    if (field === "gender") {
      if (!formData.gender || formData.gender.length === 0) {
        newErrors[field] = "At least one gender must be selected";
      }
    } else if (!formData[field]) {
      newErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required`;
    }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form before submission
  if (!validateForm()) {
    return;
  }

  setIsLoading(true);

  try {
    let jsonData = { ...formData };
    console.log("Submitting jsonData:", JSON.stringify(jsonData, null, 2));

    if (formData.jobImage) {
      const base64Image = await fileToBase64(formData.jobImage);
      jsonData.jobImage = base64Image;
    } else {
      jsonData.jobImage = null;
    }

    const response = await axios.post("/api/jobs", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Success:", response.data);
    setSnackbar({
      open: true,
      message: "Job created successfully!",
      severity: "success",
    });
    setFormData({
      jobTitle: "",
      salary: "",
      location: "",
      gender: [],
      description: "",
      keyFeatures: ["", ""],
      jobDetails: "",
      benefits: "",
      otherDetails: "",
      jobImage: null,
    });
    setImagePreview(null);
    setErrors({});
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    setSnackbar({
      open: true,
      message:
        "Failed to create job: " +
        (error.response?.data?.message || error.message),
      severity: "error",
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
    <Box className="new-job-container">
      <Typography className="form-title">
        Complete the details to post your job now!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box className="grid-container">
          <LeftNewJob
            formData={formData}
            handleChange={handleChange}
            countries={countries}
            errors={errors}
            isLoading={isLoading}
          />
          <RightNewJob
            formData={formData}
            handleChange={handleChange}
            handleGenderChange={handleGenderChange}
            handleKeyFeaturesChange={handleKeyFeaturesChange}
            handleImageUpload={handleImageUpload}
            removeImage={removeImage}
            imagePreview={imagePreview}
            errors={errors}
            isLoading={isLoading}
          />
        </Box>

        <Box className="other-details">
          <TextField
            name="otherDetails"
            label="Other Details"
            placeholder="Enter any other required details if needed"
            value={formData.otherDetails}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            className="custom-textfield no-background-change"
            disabled={isLoading}
          />
        </Box>

        <Box className="button-container">
          <Button
            type="submit"
            variant="contained"
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Job"}
          </Button>
          <Button
            variant="outlined"
            className="clear-button"
            onClick={() => {
              setFormData({
                jobTitle: "",
                salary: "",
                location: "",
                gender: [],
                description: "",
                keyFeatures: ["", ""],
                jobDetails: "",
                benefits: "",
                otherDetails: "",
                jobImage: null,
              });
              setImagePreview(null);
              setErrors({});
            }}
            disabled={isLoading}
          >
            Clear All
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}