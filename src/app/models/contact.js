import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, maxlength: 100 },
  phone: { type: String, required: true, maxlength: 20 },
  services: { type: String, required: true },
  jobTitle: { type: String, required: true },
  message: { type: String, required: true, maxlength: 500 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);