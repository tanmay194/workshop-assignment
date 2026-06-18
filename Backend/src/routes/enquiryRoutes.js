import express from 'express';
import { createEnquiry, getAllEnquiries } from '../controllers/enquiryController.js';

const router = express.Router();

// Route mappings
router.post('/enquiry', createEnquiry);
router.get('/enquiry', getAllEnquiries);

export default router;