export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function renderContactEmailHtml({
  name,
  email,
  subject,
  message,
}: ContactEmailPayload): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${safeSubject}</title>
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
    @media (prefers-color-scheme: dark) {
      body, .email-body {
        background-color: #09090b !important;
        color: #f4f4f5 !important;
      }
      .email-card {
        background-color: #18181b !important;
        border-color: #27272a !important;
      }
      .email-header {
        border-color: #27272a !important;
      }
      .email-title {
        color: #fafafa !important;
      }
      .email-text-primary {
        color: #f4f4f5 !important;
      }
      .email-text-muted {
        color: #71717a !important;
      }
      .email-box {
        background-color: #09090b !important;
        border-color: #27272a !important;
        color: #d4d4d8 !important;
      }
      .email-footer {
        background-color: #0f0f11 !important;
        border-color: #27272a !important;
        color: #71717a !important;
      }
      .email-divider {
        border-color: #27272a !important;
      }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 24px; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #18181b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="email-card" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden;">
    <tr>
      <td class="email-header" style="padding: 24px; border-bottom: 1px solid #e4e4e7;">
        <div style="font-family: 'JetBrains Mono', monospace, Consolas; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #059669; margin-bottom: 6px;">
          ~/nicolasblanco.dev • Mensaje de Contacto
        </div>
        <h1 class="email-title" style="margin: 0; font-size: 20px; font-weight: 700; color: #09090b;">
          ${safeSubject}
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
          <tr>
            <td class="email-text-muted" style="padding: 6px 0; font-size: 12px; font-family: 'JetBrains Mono', monospace, Consolas; color: #71717a; width: 90px;">De:</td>
            <td class="email-text-primary" style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #18181b;">${safeName}</td>
          </tr>
          <tr>
            <td class="email-text-muted" style="padding: 6px 0; font-size: 12px; font-family: 'JetBrains Mono', monospace, Consolas; color: #71717a;">Email:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #059669;">
              <a href="mailto:${safeEmail}" style="color: #059669; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
        </table>
        <div style="margin-top: 16px;">
          <div class="email-text-muted" style="font-size: 11px; font-family: 'JetBrains Mono', monospace, Consolas; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
            Mensaje
          </div>
          <div class="email-box" style="background-color: #f9fafb; border: 1px solid #e4e4e7; border-left: 3px solid #10b981; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #27272a;">
            ${safeMessage}
          </div>
        </div>
        <div class="email-divider" style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e4e4e7;">
          <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background-color: #10b981; color: #09090b; font-size: 13px; font-weight: 600; font-family: 'JetBrains Mono', monospace, Consolas; padding: 10px 18px; border-radius: 6px; text-decoration: none;">
            Responder a ${safeName} &rarr;
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td class="email-footer" style="padding: 16px 24px; background-color: #fafafa; border-top: 1px solid #e4e4e7; font-size: 11px; font-family: 'JetBrains Mono', monospace, Consolas; color: #71717a; text-align: center;">
        Recibido a través del formulario de contacto en nicolasblanco.dev
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

