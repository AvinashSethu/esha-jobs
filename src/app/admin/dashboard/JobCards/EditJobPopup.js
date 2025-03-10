"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import axios from "axios";
import LeftEditJob from "./LeftEditJob";
import RightEditJob from "./RightEditJob";
import "../NewJob/NewJob.css";
import { countries } from "@/src/app/Components/countries";


export default function EditJobPopup({ jobData, onClose }) {
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
  // Pre-fill form with jobData when it changes
  useEffect(() => {
    if (jobData) {
      setFormData({
        jobTitle: jobData.jobtitle || "",
        salary: jobData.salary || "",
        location: jobData.location || "",
        gender: jobData.gender || [],
        description: jobData.description || "",
        keyFeatures: jobData.keyFeatures || ["", ""],
        jobDetails: jobData.jobDetails || "",
        benefits: jobData.benefits || "",
        otherDetails: jobData.otherDetails || "",
        jobImage: null, // We'll handle the image separately
      });
      setImagePreview(jobData.jobImage || null); // Set initial image preview if exists
    }
  }, [jobData]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleKeyFeaturesChange = (index, value) => {
    const newKeyFeatures = [...formData.keyFeatures];
    newKeyFeatures[index] = value;
    setFormData((prev) => ({ ...prev, keyFeatures: newKeyFeatures }));
  };

  const handleGenderChange = (value) => {
    setFormData((prev) => {
      const genderArray = prev.gender.includes(value)
        ? prev.gender.filter((g) => g !== value)
        : [...prev.gender, value];
      return { ...prev, gender: genderArray };
    });
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
    setFormData((prev) => ({ ...prev, jobImage: null }));
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
    const requiredFields = ["jobTitle", "salary", "location", "gender", "description"];
    requiredFields.forEach((field) => {
      if (field === "gender") {
        if (!formData.gender || formData.gender.length === 0) {
          newErrors[field] = "At least one gender must be selected";
        }
      } else if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
        let jsonData = { ...formData, _id: jobData._id }; // Include _id in the body
        if (formData.jobImage && formData.jobImage instanceof File) {
          const base64Image = await fileToBase64(formData.jobImage);
          jsonData.jobImage = base64Image;
        } else {
          jsonData.jobImage = formData.jobImage;
        }
    
        const response = await axios.patch(`/api/jobs`, jsonData, { // Change URL to /api/jobs
          headers: { "Content-Type": "application/json" },
        });
    
        setSnackbar({
          open: true,
          message: "Job updated successfully!",
          severity: "success",
        });
        setIsLoading(false);
        onClose();
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setSnackbar({
          open: true,
          message: "Failed to update job: " + (error.response?.data?.message || error.message),
          severity: "error",
        });
        setIsLoading(false);
      }
    };

  return (
    <Box className="new-job-container">
      <Typography className="form-title">
        Update the details to edit your job!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box className="grid-container">
          <LeftEditJob
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            isLoading={isLoading}
            countries={countries}
          />
          <RightEditJob
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleGenderChange={handleGenderChange}
            handleKeyFeaturesChange={handleKeyFeaturesChange}
            handleImageUpload={handleImageUpload}
            removeImage={removeImage}
            imagePreview={imagePreview}
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
            {isLoading ? "Updating..." : "Update Job"}
          </Button>
          <Button
            variant="outlined"
            className="clear-button"
            onClick={() => {
              setFormData({
                jobTitle: jobData.jobtitle || "",
                salary: jobData.salary || "",
                location: jobData.location || "",
                gender: jobData.gender || [],
                description: jobData.description || "",
                keyFeatures: jobData.keyFeatures || ["", ""],
                jobDetails: jobData.jobDetails || "",
                benefits: jobData.benefits || "",
                otherDetails: jobData.otherDetails || "",
                jobImage: null,
              });
              setImagePreview(jobData.jobImage || null);
              setErrors({});
            }}
            disabled={isLoading}
          >
            Reset
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}