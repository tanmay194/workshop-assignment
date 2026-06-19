import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// Cache the connection across invocations (serverless functions can reuse
// the same Node.js process between requests when "warm"). Without this,
// every single request — not just cold starts — could open a new connection.
let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    // Already connected (warm invocation) — reuse it, no network round-trip.
    return cached.conn;
  }

  if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is completely undefined!");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // fail fast instead of queueing ops on a dead connection
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000, // give Atlas time on cold starts, but still bounded
    };

    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongooseInstance) => {
        console.log("DB connected successfully.");
        return mongooseInstance;
      })
      .catch((err) => {
        // Reset promise so the NEXT request can retry instead of being
        // stuck forever on a rejected promise.
        cached.promise = null;
        console.error("MongoDB connection error:", err.message);
        throw err; // let the caller (route handler) decide what to do — never process.exit() in serverless
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;