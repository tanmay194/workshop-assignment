import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true
  },
  message: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;