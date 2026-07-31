import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = "camhernandezri@gmail.com";

type ContactPayload = {
  nombre?: string;
  telefono?: string;
  tipo?: string;
  mensaje?: string;
  empresa_web?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({
  nombre,
  telefono,
  tipo,
  mensaje,
}: {
  nombre: string;
  telefono: string;
  tipo: string;
  mensaje: string;
}) {
  const brandBlueDark = "#132342";
  const brandGold = "#C9A24D";
  const rowBg = "#f7f5f0";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #e8e2d4;">
        <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${brandGold};font-weight:bold;">
          ${label}
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:${brandBlueDark};line-height:1.5;">
          ${value}
        </p>
      </td>
    </tr>
  `;

  return `
  <div style="background-color:#eef0f4;padding:32px 12px;">
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e3e6ec;">
      <tr>
        <td style="background-color:${brandBlueDark};padding:28px 24px;text-align:center;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:bold;letter-spacing:4px;color:#ffffff;">
            INVI<span style="color:${brandGold};">CAR</span>
          </p>
          <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:1px;color:#c7cbe0;">
            Nueva solicitud desde el sitio web
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:24px 20px 4px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#555;line-height:1.5;">
            Recibiste una nueva solicitud de cotización a través del formulario de contacto de la página web.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:8px 20px 20px;">
          <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:${rowBg};border-radius:10px;overflow:hidden;border:1px solid #e8e2d4;">
            ${row("Nombre", nombre)}
            ${row("Teléfono", `<a href="tel:${telefono}" style="color:${brandBlueDark};text-decoration:none;">${telefono}</a>`)}
            ${row("Tipo de vehículo", tipo)}
            ${row("Mensaje", mensaje.replace(/\n/g, "<br />"))}
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:0 20px 28px;text-align:center;">
          <a href="https://wa.me/573001234567" style="display:inline-block;background-color:${brandGold};color:${brandBlueDark};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;text-decoration:none;padding:12px 28px;border-radius:999px;">Responder por WhatsApp</a>
        </td>
      </tr>

      <tr>
        <td style="background-color:#f4f4f6;padding:16px 20px;text-align:center;border-top:1px solid #e3e6ec;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9aa0ad;">
            Este correo se generó automáticamente desde el formulario de contacto de invicar.com.co
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error(
      "Faltan configurar GMAIL_USER y/o GMAIL_APP_PASSWORD en las variables de entorno.",
    );
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: si un bot llenó este campo oculto, respondemos "ok" sin enviar el correo
  if (body.empresa_web) {
    return NextResponse.json({ ok: true });
  }

  const nombre = body.nombre?.trim();
  const telefono = body.telefono?.trim();
  const tipo = body.tipo?.trim() || "No especificado";
  const mensaje = body.mensaje?.trim() || "(sin mensaje)";

  if (!nombre || !telefono) {
    return NextResponse.json(
      { error: "Nombre y teléfono son obligatorios." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `Invicar Web <${gmailUser}>`,
      to: DESTINATION_EMAIL,
      replyTo: undefined,
      subject: `Nueva solicitud de cotización — ${nombre}`,
      html: buildEmailHtml({
        nombre: escapeHtml(nombre),
        telefono: escapeHtml(telefono),
        tipo: escapeHtml(tipo),
        mensaje: escapeHtml(mensaje),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando el correo con Nodemailer/Gmail:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 502 },
    );
  }
}
