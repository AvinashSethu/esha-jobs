import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true, maxlength: 250 },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  gender: {
    type: [String], // Array of strings
    enum: ["male", "female", "others"], // Restrict values
    required: true, // Ensure the array isn’t empty
    default: ["male"], // Default to an array with "male"
  },
  description: { type: String, required: true, maxlength: 250 },
  keyFeatures: [{ type: String, maxlength: 100 }],
  jobDetails: { type: String, maxlength: 350 },
  benefits: { type: String, maxlength: 350 },
  otherDetails: { type: String, maxlength: 350 },
  jobImage: { type: String }, // Store URL or path to image
  createdAt: { type: Date, default: Date.now },
});

// Prevent model redefinition by checking if it already exists
delete mongoose.models.Job; // Clear the existing model from cache
export default mongoose.model("Job", jobSchema);