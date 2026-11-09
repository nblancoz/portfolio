import type { APIRoute } from 'astro';
import { z } from 'astro/zod';
import { Resend } from 'resend';
import { renderContactEmailHtml } from '@/templates/contactEmail';

export const prerender = false;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(5000),
  company_website: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  let rawData: Record<string, unknown> = {};
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      rawData = (await request.json()) as Record<string, unknown>;
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid JSON payload',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } else {
    try {
      const formData = await request.formData();
      rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        company_website: formData.get('company_website'),
      };
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid form data',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }

  const honeypot = rawData.company_website;
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const result = contactSchema.safeParse(rawData);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        errors: result.error.flatten().fieldErrors,
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const { name, email, subject, message } = result.data;
  const apiKey = import.meta.env.RESEND_API_KEY;
  const recipientEmail = import.meta.env.CONTACT_RECIPIENT_EMAIL || 'nblancozappala@gmail.com';
  const fromEmail =
    import.meta.env.RESEND_FROM_EMAIL || 'Nicolás Blanco <contacto@nicolasblanco.dev>';

  if (!apiKey) {
    console.warn('RESEND_API_KEY is not defined in environment variables.');
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Email service is not configured',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const htmlContent = renderContactEmailHtml({ name, email, subject, message });
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject} - ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('Unexpected error while sending email:', err);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
