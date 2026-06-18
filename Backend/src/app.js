import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

// Use broad CORS settings to ensure preflight requests pass
app.use(cors({
  origin: "*", // Using "*" initially to rule out origin-matching issues
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/api', enquiryRoutes);

// Catch-all for 404s 
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;