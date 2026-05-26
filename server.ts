import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resendApiKey = process.env.RESEND_API_KEY;
if (resendApiKey) {
  var { Resend } = await import('resend');
  var resend = new Resend(resendApiKey);
}

app.post('/api/request-demo', async (req, res) => {
  try {
    const { name, school, email, phone, participants } = req.body;
    
    if (!resend) {
      return res.status(200).json({ success: true, note: 'Email service not configured. Set RESEND_API_KEY in .env to enable email sending.' });
    }
    
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'delivered@resend.dev';
    
    console.log(`Sending demo request notification to ${notificationEmail}`);
    
    const data = await resend.emails.send({
      from: 'ProductSchool <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `New Demo Request: ${school}`,
      html: `
        <h2>New Demo Request for ProductSchool</h2>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>School</strong></td><td>${school}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Expected Participants</strong></td><td>${participants}</td></tr>
        </table>
      `
    });

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

async function createServer() {
  const isProd = process.env.NODE_ENV === 'production';
  
  if (!isProd) {
    // Development Mode: Use Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production Mode: Serve static files
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
