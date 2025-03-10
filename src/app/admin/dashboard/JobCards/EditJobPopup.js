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

const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brazil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CR", name: "Costa Rica" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "North Korea" },
  { code: "KR", name: "South Korea" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

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