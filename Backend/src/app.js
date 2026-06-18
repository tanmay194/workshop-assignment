import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

// 1. Configure CORS
app.use(cors({
  origin: "https://workshop-assignment1.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Ensure OPTIONS is here
  credentials: true
}));

// 2. Explicitly handle OPTIONS requests for all routes
app.options('*', cors()); 

app.use(express.json());

app.use('/api', enquiryRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;