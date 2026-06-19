import dotenv from "dotenv";
dotenv.config(); // 1. Load variables from .env first!

import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]); // 2. Configure DNS

import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app; // fixed: was module.exports = app (invalid in an ESM file)