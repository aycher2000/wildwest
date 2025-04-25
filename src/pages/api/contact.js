import { Resend } from 'resend';

const resend = new Resend('re_Q1BnKNRv_JXmwskxNca6tTPETvjT251zp');

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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Wild West Tech <info@wildwesttech.pro>',
      to: 'info@wildwesttech.pro',
      reply_to: email,
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
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }

    // Send success response
    res.status(200).json({ message: 'Your request has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
} 