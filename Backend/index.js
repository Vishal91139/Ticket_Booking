const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const session = require('express-session');
// Middleware
app.use(express.json()); // For parsing JSON request bodies
// Enable CORS (make sure to set proper origin and credentials options)
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL (replace with your frontend URL)
  methods: 'GET,POST',
  credentials: true, // Allow sending credentials (cookies) with requests
}));

app.use(session({
  secret: 'your_secret_key', // Secret key for encryption
  resave: false,              // Don't save session if unmodified
  saveUninitialized: false,   // Don't save empty sessions
  cookie: {
    secure: false,            // Set to true if you're using HTTPS
    httpOnly: true,           // Helps prevent XSS attacks
    maxAge: 3600000,          // Cookie expiration time (1 hour)
  },
}));

// Use the routes
app.use("/api/auth", authRoutes);
// app.use("/", mainRoutes)

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
