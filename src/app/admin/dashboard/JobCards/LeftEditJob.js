import React from "react";
import { Box, TextField, Select, MenuItem, Typography } from "@mui/material";

export default function LeftEditJob({
  formData,
  errors,
  handleChange,
  isLoading,
  countries,
}) {
  return (
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
        error={!!errors.jobTitle}
        helperText={errors.jobTitle}
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
        error={!!errors.location}
      >
        <MenuItem value="" disabled>
          Choose country
        </MenuItem>
        {countries.map((location) => (
          <MenuItem key={location.code} value={location.name}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
      {errors.location && (
        <Typography sx={{ color: "red", fontSize: "0.75rem", mt: 0.5 }}>
          {errors.location}
        </Typography>
      )}
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
        className="custom-textfield no-background-change"
        disabled={isLoading}
        error={!!errors.description}
        helperText={errors.description}
      />
      <Typography sx={{ color: "#666" }}>(Max 250 Characters)</Typography>
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
        className="custom-textfield no-background-change"
        disabled={isLoading}
      />
      <Typography sx={{ color: "#666" }}>(Max 350 Characters)</Typography>
    </Box>
  );
}