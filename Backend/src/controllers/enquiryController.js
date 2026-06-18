import Enquiry from '../models/Enquiry.js';


export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic Validation Check
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill out all required fields: name, email, phone" 
      });
    }

    // Check if entry already exists with the same email
    const existingEnquiry = await Enquiry.findOne({ email });
    if (existingEnquiry) {
      return res.status(400).json({ 
        success: false, 
        message: "An enquiry has already been submitted using this email address" 
      });
    }

    // Save submission data to MongoDB Atlas
    const newEnquiry = new Enquiry({ name, email, phone, message });
    await newEnquiry.save();

    return res.status(211).json({
      success: true,
      message: "Enquiry submitted successfully!",
      data: newEnquiry
    });

  } catch (error) {
    console.error("Error in createEnquiry Controller:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while processing submission."
    });
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error("Error in getAllEnquiries Controller:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while retrieving data."
    });
  }
};