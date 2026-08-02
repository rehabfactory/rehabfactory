require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Contact Form API ────────────────────────────────────────────────────────

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name, email, and message.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const recipientEmail = process.env.EMAIL_TO || 'admin@rehabfactory.com.au';

  // ── Check if credentials are configured ─────────────────────────────────
  const hasCredentials = process.env.EMAIL_USER && process.env.EMAIL_PASS;

  if (!hasCredentials) {
    // Mock mode: log to console for local development
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📬  NEW CONTACT ENQUIRY (Mock Mode — credentials not set)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`   Name:     ${name}`);
    console.log(`   Email:    ${email}`);
    console.log(`   Phone:    ${phone || 'Not provided'}`);
    console.log(`   Service:  ${service || 'Not specified'}`);
    console.log(`   Message:  ${message}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('ℹ️  To enable real email delivery, add EMAIL_USER and EMAIL_PASS to your .env file.\n');

    return res.json({ success: true, mock: true });
  }

  // ── Real email delivery via Gmail SMTP ───────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Google App Password
      },
    });

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
            .header { background: #020C1B; padding: 32px 40px; }
            .header h1 { color: #F3B73A; margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
            .header p { color: #94a3b8; margin: 8px 0 0; font-size: 13px; }
            .body { padding: 40px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #94a3b8; margin-bottom: 6px; display: block; }
            .value { font-size: 16px; color: #020C1B; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #F3B73A; padding: 16px 20px; border-radius: 4px; }
            .message-box .value { font-weight: 400; color: #475569; line-height: 1.7; }
            .footer { background: #f8fafc; padding: 24px 40px; border-top: 1px solid #e2e8f0; }
            .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Enquiry</h1>
              <p>Rehab Factory Physiotherapy — Website Contact Form</p>
            </div>
            <div class="body">
              <div class="field">
                <span class="label">Full Name</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email Address</span>
                <span class="value"><a href="mailto:${email}" style="color:#F3B73A;">${email}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone Number</span>
                <span class="value">${phone || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="label">Preferred Service</span>
                <span class="value">${service || 'Not specified'}</span>
              </div>
              <div class="field">
                <span class="label">Message</span>
                <div class="message-box"><span class="value">${message.replace(/\n/g, '<br />')}</span></div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent via the Rehab Factory website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send notification to admin
    await transporter.sendMail({
      from: `"Rehab Factory Website" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Enquiry from ${name} - Rehab Factory`,
      html: htmlBody,
    });

    // Send auto-reply to the person who enquired
    await transporter.sendMail({
      from: `"Rehab Factory Physiotherapy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your enquiry — Rehab Factory`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
              .header { background: #020C1B; padding: 32px 40px; }
              .header h1 { color: #F3B73A; margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
              .body { padding: 40px; color: #475569; line-height: 1.7; font-size: 16px; }
              .body h2 { color: #020C1B; font-size: 20px; margin-top: 0; }
              .footer { background: #f8fafc; padding: 24px 40px; border-top: 1px solid #e2e8f0; }
              .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
              .cta { display: inline-block; margin-top: 24px; background: #020C1B; color: #F3B73A; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thanks for reaching out</h1>
              </div>
              <div class="body">
                <h2>Hi ${name},</h2>
                <p>Thank you for contacting Rehab Factory Physiotherapy. We've received your enquiry and one of our team members will be in touch with you shortly.</p>
                <p>In the meantime, if you'd like to book directly, you can do so online:</p>
                <a href="https://book.nookal.com/bookings/book/e1AbE0C0-AD43-9c68-3AFa-cEFB7EE18217/location" class="cta">Book Online</a>
              </div>
              <div class="footer">
                <p>Rehab Factory Physiotherapy | 9/25-35 Cranbourne Road, Narre Warren VIC 3805 | (03) 9704 6111</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log(`✅  Enquiry from ${name} <${email}> delivered to ${recipientEmail}`);
    return res.json({ success: true });

  } catch (err) {
    console.error('❌  Failed to send contact email:', err.message);
    return res.status(500).json({
      success: false,
      error: 'There was a problem sending your message. Please call us directly or try again later.'
    });
  }
});

// ─── Newsletter Subscribe API (Kit.com) ──────────────────────────────────────

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  const apiKey  = process.env.KIT_API_KEY;
  const formId  = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.log(`📬 Newsletter signup (mock - KIT_API_KEY/KIT_FORM_ID missing in .env): ${email}`);
    return res.json({ success: true, mock: true });
  }

  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email: email,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('❌ Kit.com subscriber API error:', response.status, data);
      return res.status(400).json({ success: false, error: data.message || 'Subscription failed. Please try again.' });
    }

    console.log(`✅  Newsletter subscriber added to Kit.com: ${email}`);
    return res.json({ success: true });

  } catch (err) {
    console.error('❌  Kit.com fetch error:', err.message);
    return res.status(500).json({ success: false, error: 'Could not subscribe. Please try again.' });
  }
});

// ─── Serve React App ─────────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, 'dist')));

// Handle all React Router routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, function () {
  console.log('🏋️  Rehab Factory running on port ' + PORT);
});
