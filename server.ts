import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config({ path: '.env.local' });
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/reviews", async (req, res) => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(500).json({ 
        error: "Configuration missing", 
        message: "Please configure GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in your environment variables." 
      });
    }

    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`);
      const data = await response.json();
      
      if (data.status !== 'OK') {
        return res.status(500).json({ error: "Google API Error", message: data.error_message || data.status });
      }
      
      res.json(data.result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews", message: String(error) });
    }
  });

  // Contact form API route
  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, projectType, message } = req.body;

    if (!name || !phone || !projectType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return res.status(500).json({ error: "RESEND_API_KEY not configured" });
    }

    try {
      const resend = new Resend(resendKey);
      const { data, error } = await resend.emails.send({
        from: "Upward Development <hello@upwarddevelopment.us>",
        to: ["lucas@upwarddevelopment.us"],
        replyTo: email || undefined,
        subject: `New Quote Request: ${projectType} — ${name}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a2e; padding: 32px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">New Quote Request</h1>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${email || 'Not provided'}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Project</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${projectType}</td></tr>
                ${message ? `<tr><td style="padding: 12px 0; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 12px 0; white-space: pre-wrap;">${message}</td></tr>` : ''}
              </table>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email", message: error.message });
      }

      return res.status(200).json({ success: true, id: data?.id });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Internal server error", message: String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
