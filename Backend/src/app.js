import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

app.use(cors({
  origin: "https://workshop-assignment1.vercel.app", // Your actual frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use('/api', enquiryRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;
