import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true, maxlength: 250 },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'others'], default: 'male' },
  description: { type: String, required: true, maxlength: 250 },
  keyFeatures: [{ type: String, maxlength: 100 }],
  jobDetails: { type: String, maxlength: 350 },
  benefits: { type: String, maxlength: 350 },
  otherDetails: { type: String, maxlength: 350 },
  jobImage: { type: String }, // Store URL or path to image
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model('Job', jobSchema);