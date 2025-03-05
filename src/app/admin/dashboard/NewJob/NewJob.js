import React, { useState } from "react";
import { Box, TextField, Select, MenuItem, RadioGroup, FormControlLabel, Radio, Button, Avatar, IconButton, Typography } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Image from 'next/image';
import "../NewJob/NewJob.css";
import axios from "axios";

const countries = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    // ... (rest of your countries array here)
];

export default function NewJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    salary: "",
    location: "",
    gender: "",
    description: "",
    keyFeatures: ["", ""],
    jobDetails: "",
    benefits: "",
    otherDetails: "",
    jobImage: null, // Store the File object here
  });
  
  const [imagePreview, setImagePreview] = useState(null); // Separate state for preview URL
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyFeaturesChange = (index, value) => {
    const newKeyFeatures = [...formData.keyFeatures];
    newKeyFeatures[index] = value;
    setFormData((prev) => ({
      ...prev,
      keyFeatures: newKeyFeatures,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        jobImage: file, // Store the file object
      }));
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      jobImage: null,
    }));
    setImagePreview(null); // Clear preview
    URL.revokeObjectURL(imagePreview); // Clean up memory
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'keyFeatures') {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else if (key === 'jobImage' && formData[key]) {
        formDataToSend.append('jobImage', formData[key]); // Append the file object
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('/api/jobs', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      alert("Job created successfully!");
      setFormData({
        jobTitle: "",
        salary: "",
        location: "",
        gender: "",
        description: "",
        keyFeatures: ["", ""],
        jobDetails: "",
        benefits: "",
        otherDetails: "",
        jobImage: null,
      });
      setImagePreview(null); // Reset preview
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert("Failed to create job: " + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="new-job-container">
      <Typography className="form-title">Complete the details to post your job now!</Typography>
      <form onSubmit={handleSubmit}>
        <Box className="grid-container">
          {/* Left Column */}
          <Box className="left-column">
            <TextField
              name="jobTitle"
              label="Enter Job Title"
              placeholder="Enter Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{ maxLength: 250 }}
              className="custom-textfield job-field"
              disabled={isLoading}
            />
            <Select
              name="location"
              value={formData.location}
              onChange={handleChange}
              displayEmpty
              fullWidth
              margin="normal"
              className="custom-select"
              disabled={isLoading}
            >
              <MenuItem value="" disabled>Choose country</MenuItem>
              {countries.map((location) => (
                <MenuItem key={location.code} value={location.name}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              name="description"
              label="Description"
              placeholder="Enter job description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={6}
              InputProps={{ maxLength: 250 }}
              className="custom-textfield"
              disabled={isLoading}
            />
            <TextField
              name="jobDetails"
              label="Job Details"
              placeholder="Enter job description"
              value={formData.jobDetails}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={6}
              InputProps={{ maxLength: 350 }}
              className="custom-textfield"
              disabled={isLoading}
            />
          </Box>

          {/* Right Column */}
          <Box className="right-column">
            <Box className="salary-image-row">
              <TextField
                name="salary"
                label="Salary"
                placeholder="Enter salary"
                value={formData.salary}
                onChange={handleChange}
                margin="normal"
                className="custom-textfield salary-field"
                disabled={isLoading}
              />
              <Box className="job-image">
                <Avatar className="job-avatar">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Job Image"
                      width={90}
                      height={90}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  ) : null}
                </Avatar>
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="label"
                  disabled={isLoading}
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                    disabled={isLoading}
                  />
                  <PhotoCamera sx={{ height: '25px', width: '25px',marginTop:'-10px' }} />
                </IconButton>
                {imagePreview && (
                  <Button
                    onClick={removeImage}
                    color="error"
                    disabled={isLoading}
                  >
                    Remove
                  </Button>
                )}
                <span style={{ fontWeight: 'bold' }}>Job Image</span>
              </Box>
            </Box>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
              className="gender-radio-group"
            >
              <FormControlLabel value="male" control={<Radio disabled={isLoading} />} label="Male" />
              <FormControlLabel value="female" control={<Radio disabled={isLoading} />} label="Female" />
              <FormControlLabel value="others" control={<Radio disabled={isLoading} />} label="Others" />
            </RadioGroup>
            <Box>
              <Typography variant="h6" className="key-features-title">List Two Key Features</Typography>
              <TextField
                name="keyFeatures1"
                placeholder="E.g., Zoom Interview"
                value={formData.keyFeatures[0]}
                onChange={(e) => handleKeyFeaturesChange(0, e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={2}
                InputProps={{ maxLength: 100 }}
                className="custom-textfield"
                disabled={isLoading}
              />
              <TextField
                name="keyFeatures2"
                placeholder="E.g., Prometric Passed Required"
                value={formData.keyFeatures[1]}
                onChange={(e) => handleKeyFeaturesChange(1, e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={2}
                InputProps={{ maxLength: 100 }}
                className="custom-textfield"
                disabled={isLoading}
              />
            </Box>
            <TextField
              name="benefits"
              label="Benefits"
              placeholder="Enter job benefits"
              value={formData.benefits}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputProps={{ maxLength: 350 }}
              className="custom-textfield"
              disabled={isLoading}
            />
          </Box>
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
            className="custom-textfield"
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
                gender: "",
                description: "",
                keyFeatures: ["", ""],
                jobDetails: "",
                benefits: "",
                otherDetails: "",
                jobImage: null,
              });
              setImagePreview(null);
            }}
            disabled={isLoading}
          >
            Clear All
          </Button>
        </Box>
      </form>
    </Box>
  );
}