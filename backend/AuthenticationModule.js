const Pool = require("pg").Pool;
const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');

const pool = new Pool({
    user: "postgres",
    password: "db-pswd24@mw",
    host: "localhost",
    port: 5432,
    database: "off_chain_db"
});

// Function to verify user credentials
const verifyUser = async (username, password) => {
    const query = 'SELECT * FROM accounts WHERE username = $1 AND password = $2';
    try {
        const result = await pool.query(query, [username, password]);
        if (result.rows.length > 0) {
            // User found, generate OTP
            return { user: result.rows[0], otp: generateOTP() };
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Function to generate OTP
const generateOTP = () => {
    return speakeasy.totp({
        secret: 'OTP_SECRET', // Use a strong secret for production
        encoding: 'base32'
    });
};

// Function to send OTP via email
const sendOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or any other email service
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully');
    } catch (err) {
        console.error('Error sending OTP:', err);
        throw err;
    }
};

// Function to authenticate user
const authenticateUser = async (username, password, otpInput) => {
    try {
        const { user, otp } = await verifyUser(username, password);
        
        // Send OTP to user's email
        await sendOTP(user.email, otp); // Make sure the email field exists in the DB

        // Validate OTP (assume user has input the OTP from email)
        if (otpInput === otp) {
            console.log('Authentication successful');
            return getUserDashboard(user);
        } else {
            throw new Error('Invalid OTP');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Function to retrieve dashboard based on user role
const getUserDashboard = (user) => {
    switch (user.role) {
        case 'admin':
            return 'Admin Dashboard';
        case 'verifier':
            return 'Verifier Dashboard';
        case 'user':
            return 'User Dashboard';
        default:
            throw new Error('Invalid role');
    }
};

// Export pool and authentication functions
module.exports = {
    pool,
    authenticateUser
};
