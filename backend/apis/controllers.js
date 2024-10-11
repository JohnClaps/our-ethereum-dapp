// controllers.js
const twilio = require("twilio");
const pool = require("./db");

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// In-memory storage for OTPs (for demonstration purposes)
const otpStorage = {};

// Send OTP API
exports.sendOtp = async (req, res) => {
  const { phone } = req.body;

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Send OTP via SMS using Twilio
  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    // Store OTP temporarily
    otpStorage[phone] = otp;
    return res.json({ success: true });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// Verify OTP API
exports.verifyOtp = (req, res) => {
  const { phone, otp } = req.body;
  
  // Check if the OTP matches
  if (otpStorage[phone] && otpStorage[phone] === otp) {
    delete otpStorage[phone]; // Remove OTP after verification
    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

// Get User Role API
exports.getUserRole = async (req, res) => {
  const { phone } = req.query;

  try {
    const result = await pool.query("SELECT role FROM users WHERE phone = $1", [phone]);

    if (result.rows.length > 0) {
      return res.json({ success: true, role: result.rows[0].role });
    } else {
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch user role" });
  }
};
