import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import connectDB from "./config/db.js";

const app = express();

// Use broad CORS settings to ensure preflight requests pass
app.use(cors({
  origin: "*", // Using "*" initially to rule out origin-matching issues
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Ensure a DB connection exists before any route handler runs.
// connectDB() is cached internally, so on a warm invocation this resolves
// almost instantly; on a cold start, the request actually WAITS for the
// connection instead of racing ahead of it (this is what fixes the
// "first submission always fails" symptom).
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("Failed to connect to DB:", err.message);
    res.status(503).json({
      success: false,
      message: "Database unavailable, please try again shortly."
    });
  }
});

app.use('/api', enquiryRoutes);

// Catch-all for 404s
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;