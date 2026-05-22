import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, projectType, message } = req.body;

  if (!name || !phone || !projectType) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Name, phone, and project type are required.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Upward Development <hello@upwarddevelopment.us>',
      to: ['lucas@upwarddevelopment.us'],
      replyTo: email || undefined,
      subject: `New Quote Request: ${projectType} — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1a1a2e; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Quote Request</h1>
            <p style="color: #a0a0b0; margin: 8px 0 0; font-size: 14px;">Upward Development LLC — Contact Form</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">
                  ${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : '<span style="color: #999;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Project Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${projectType}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #555; white-space: pre-wrap;">${message}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          <div style="background: #f8f9fa; padding: 20px 32px; text-align: center; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This message was sent from the contact form at upwarddevelopment.us
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email', message: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error', message: String(error) });
  }
}
