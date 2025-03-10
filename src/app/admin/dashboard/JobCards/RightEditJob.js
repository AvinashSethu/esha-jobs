import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Image from "next/image";

export default function RightEditJob({
  formData,
  errors,
  handleChange,
  handleGenderChange,
  handleKeyFeaturesChange,
  handleImageUpload,
  removeImage,
  imagePreview,
  isLoading,
}) {
  return (
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
          error={!!errors.salary}
          helperText={errors.salary}
        />
        <Box className="job-image">
          <Avatar className="job-avatar">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Job Image"
                width={90}
                height={90}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
            <PhotoCamera
              sx={{
                height: "25px",
                width: "25px",
                marginTop: "-40px",
                color: "var(--primary)",
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "4px",
              }}
            />
          </IconButton>
          {imagePreview && (
            <Button onClick={removeImage} color="error" disabled={isLoading}>
              Remove
            </Button>
          )}
          <span style={{ fontWeight: "bold" }}>Company Logo</span>
        </Box>
      </Box>
      <Box className="gender-checkbox-group">
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Gender
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.gender.includes("male")}
              onChange={() => handleGenderChange("male")}
              disabled={isLoading}
            />
          }
          label="Male"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.gender.includes("female")}
              onChange={() => handleGenderChange("female")}
              disabled={isLoading}
            />
          }
          label="Female"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.gender.includes("others")}
              onChange={() => handleGenderChange("others")}
              disabled={isLoading}
            />
          }
          label="Others"
        />
        {errors.gender && (
          <Typography sx={{ color: "red", fontSize: "0.75rem", mt: 0.5 }}>
            {errors.gender}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography variant="h6" className="key-features-title">
          List Two Key Features
        </Typography>
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
          className="custom-textfield no-background-change"
          disabled={isLoading}
        />
        <Typography sx={{ color: "#666" }}>(Max 100 Characters)</Typography>
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
          className="custom-textfield no-background-change"
          disabled={isLoading}
        />
        <Typography sx={{ color: "#666" }}>(Max 100 Characters)</Typography>
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
        className="custom-textfield no-background-change"
        disabled={isLoading}
      />
      <Typography sx={{ color: "#666" }}>(Max 350 Characters)</Typography>
    </Box>
  );
}