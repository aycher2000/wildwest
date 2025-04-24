import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, deviceType, issue } = req.body;

    // Validate required fields
    if (!name || !email || !deviceType || !issue) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@wildwesttech.pro',
      subject: `New Service Request from ${name}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Device Type:</strong> ${deviceType}</p>
        <p><strong>Issue Description:</strong></p>
        <p>${issue}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({ message: 'Your request has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
} 