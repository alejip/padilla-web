export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const AIRTABLE_URL = 'https://airtable.com/app8QpqEfB8gVxqCj';
const NOTIFY_EMAIL = 'padillaperitaciones@tallerlaspalmeretas.com';
const N8N_WEBHOOK = 'https://n8n.pulpodigital.es/webhook/padilla-form';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { nombre, telefono, email, servicio, mensaje, pagina, website } = data;

  // Honeypot: si el campo oculto "website" viene relleno, es un bot
  if (website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Reenviar a n8n para guardar en Airtable
  try {
    await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    // Si n8n falla, seguimos igualmente con el email
  }

  // Enviar email de notificación
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Padilla Peritaciones Web <noreply@padillaperitaciones.com>',
    to: NOTIFY_EMAIL,
    subject: `Nuevo lead: ${nombre} — ${telefono}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f4f8fb; border-radius: 12px;">
        <div style="background: white; border-radius: 10px; padding: 32px; border-top: 4px solid #226D94;">
          <h2 style="color: #0f1e2e; margin: 0 0 24px;">🔔 Nuevo lead desde la web</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px; width: 120px;">Nombre</td>
              <td style="padding: 10px 0; font-weight: 600; color: #0f1e2e;">${nombre || '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #eef4f8;">
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px;">Teléfono</td>
              <td style="padding: 10px 0; font-weight: 600; color: #0f1e2e;">
                <a href="tel:${telefono}" style="color: #226D94; text-decoration: none;">${telefono || '—'}</a>
              </td>
            </tr>
            <tr style="border-top: 1px solid #eef4f8;">
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #0f1e2e;">${email || '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #eef4f8;">
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px;">Servicio</td>
              <td style="padding: 10px 0; color: #0f1e2e;">${servicio || '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #eef4f8;">
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 0; color: #0f1e2e;">${mensaje || '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #eef4f8;">
              <td style="padding: 10px 0; color: #5c7080; font-size: 14px;">Página</td>
              <td style="padding: 10px 0; color: #0f1e2e;">${pagina || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #dce8f0; text-align: center;">
            <a href="${AIRTABLE_URL}" style="display: inline-block; background: #226D94; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
              Ver todos los leads en Airtable →
            </a>
          </div>
        </div>
      </div>
    `,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
