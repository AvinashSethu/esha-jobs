import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Image from "next/image";
import "../NewJob/NewJob.css";
import axios from "axios";

const countries = [
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BO', name: 'Bolivia' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BR', name: 'Brazil' },
  { code: 'BN', name: 'Brunei' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'CV', name: 'Cabo Verde' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CA', name: 'Canada' },
  { code: 'CF', name: 'Central African Republic' },
  { code: 'TD', name: 'Chad' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CO', name: 'Colombia' },
  { code: 'KM', name: 'Comoros' },
  { code: 'CG', name: 'Congo' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'DK', name: 'Denmark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia' },
  { code: 'GE', name: 'Georgia' },
  { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GR', name: 'Greece' },
  { code: 'GD', name: 'Grenada' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GN', name: 'Guinea' },
  { code: 'GW', name: 'Guinea-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'JP', name: 'Japan' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KP', name: 'North Korea' },
  { code: 'KR', name: 'South Korea' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LA', name: 'Laos' },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands' },
  { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia' },
  { code: 'MD', name: 'Moldova' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PW', name: 'Palau' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papua New Guinea' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russia' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: 'Samoa' },
  { code: 'SM', name: 'San Marino' },
  { code: 'ST', name: 'Sao Tome and Principe' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SN', name: 'Senegal' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapore' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'SS', name: 'South Sudan' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syria' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' },
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
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
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
    setImagePreview(null); // Clear preview
    URL.revokeObjectURL(imagePreview); // Clean up memory
  };

  // Helper function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare JSON data
      let jsonData = { ...formData };

      // If there's an image, convert it to base64
      if (formData.jobImage) {
        const base64Image = await fileToBase64(formData.jobImage);
        jsonData.jobImage = base64Image; // Replace file object with base64 string
      } else {
        jsonData.jobImage = null; // Ensure no file object is sent
      }

      // Send the JSON data
      const response = await axios.post("/api/jobs", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
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
      console.error("Error:", error.response?.data || error.message);
      alert(
        "Failed to create job: " +
          (error.response?.data?.message || error.message)
      );
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
              <MenuItem value="" disabled>
                Choose country
              </MenuItem>
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
              className="custom-textfield no-background-change"
              disabled={isLoading}
            />
            <Typography sx={{color:'#666'}}>(Max 250 Characters)</Typography>
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
            <Typography sx={{color:'#666'}}>(Max 350 Characters)</Typography>
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
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
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
                  <Button
                    onClick={removeImage}
                    color="error"
                    disabled={isLoading}
                  >
                    Remove
                  </Button>
                )}
                <span style={{ fontWeight: "bold" }}>Company Logo</span>
              </Box>
            </Box>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
              className="gender-radio-group"
            >
              <FormControlLabel
                value="male"
                control={<Radio disabled={isLoading} />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio disabled={isLoading} />}
                label="Female"
              />
              <FormControlLabel
                value="others"
                control={<Radio disabled={isLoading} />}
                label="Others"
              />
            </RadioGroup>
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
              <Typography sx={{color:'#666'}}>(Max 100 Characters)</Typography>
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
              <Typography sx={{color:'#666'}}>(Max 100 Characters)</Typography>
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
            <Typography sx={{color:'#666'}}>(Max 350 Characters)</Typography>
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
