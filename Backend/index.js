const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // Enable CORS for frontend to access the API

// Use the routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/ticketBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start the server
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
    console.log("MongoDB connected successfully");
  })
  .catch((error) => console.log("MongoDB connection error:", error));
