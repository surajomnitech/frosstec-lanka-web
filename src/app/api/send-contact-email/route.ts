import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const FROM_EMAIL = 'Frosstec Lanka <no-reply@frossteclanka.com>';

// For final production, use info@frossteclanka.com.
// For testing, you can temporarily change this to phonefixdotlk@gmail.com.
const OWNER_EMAILS = ['info@frossteclanka.com'];

const SERVICE_LABELS: Record<string, string> = {
  'emergency-repairs': 'Emergency Repairs',
  'preventative-maintenance': 'Service & Preventative Maintenance',
  'design-installation': 'Custom Design & Installation',
  'equipment-sales': 'Equipment Sales',
  'cold-room-solutions': 'Cold Room & Freezer Room Solutions',
  consultation: 'Expert Advice & Guidance',
};

function getResend() {
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }

  return new Resend(key);
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const rawEmail = String(body.email ?? '').trim();
    const rawService = String(body.service ?? '').trim();

    const name = escapeHtml(body.name).trim();
    const company = escapeHtml(body.company).trim();
    const phone = escapeHtml(body.phone).trim();
    const email = escapeHtml(rawEmail);
    const message = escapeHtml(body.message).trim().replaceAll('\n', '<br />');

    const serviceLabel = SERVICE_LABELS[rawService] || 'Not specified';

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const resend = getResend();

    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAILS,
      subject: `New Website Inquiry - ${serviceLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Website Inquiry</title>
        </head>

        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#F8F9FA;">
          <div style="max-width:640px; margin:0 auto; background-color:#ffffff;">
            
            <div style="background:linear-gradient(135deg,#071B3A 0%,#273A73 100%); padding:34px 30px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:800; letter-spacing:0.5px;">
                Frosstec Lanka
              </h1>
              <div style="width:56px; height:3px; background-color:#BF4215; margin:18px auto;"></div>
              <p style="color:#D8DEEF; margin:0; font-size:15px;">
                New Website Contact Form Inquiry
              </p>
            </div>

            <div style="padding:34px 30px;">
              <div style="background-color:#EEF1F8; border-left:4px solid #BF4215; border-radius:10px; padding:26px;">
                <h2 style="color:#273A73; margin:0 0 24px 0; font-size:22px;">
                  Inquiry Details
                </h2>

                <div style="margin-bottom:18px;">
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Name</p>
                  <p style="color:#111827; margin:0; font-size:17px; font-weight:700;">${name}</p>
                </div>

                <div style="margin-bottom:18px;">
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Company</p>
                  <p style="color:#111827; margin:0; font-size:16px;">${company || 'Not provided'}</p>
                </div>

                <div style="margin-bottom:18px;">
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Phone</p>
                  <p style="color:#111827; margin:0; font-size:17px; font-weight:700;">${phone}</p>
                </div>

                <div style="margin-bottom:18px;">
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Email</p>
                  <p style="color:#111827; margin:0; font-size:16px;">${email || 'Not provided'}</p>
                </div>

                <div style="margin-bottom:18px;">
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Service Requirement</p>
                  <p style="color:#111827; margin:0; font-size:16px; font-weight:700;">${serviceLabel}</p>
                </div>

                <div>
                  <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Message</p>
                  <p style="color:#111827; margin:0; font-size:15px; line-height:1.7;">${message || 'No message provided.'}</p>
                </div>
              </div>
            </div>

            <div style="background-color:#0E1630; padding:24px 30px; text-align:center;">
              <p style="color:#AEB8D0; margin:0; font-size:13px;">
                © 2026 Frosstec Lanka. Website inquiry notification.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    if (ownerError) {
      console.error('Owner email error:', ownerError);

      return NextResponse.json(
        { error: ownerError.message || 'Failed to send inquiry email.' },
        { status: 500 }
      );
    }

    let clientEmailId: string | undefined;

    if (rawEmail && isValidEmail(rawEmail)) {
      const { data: clientData, error: clientError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [rawEmail],
        subject: 'Thank you for contacting Frosstec Lanka',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Thank You - Frosstec Lanka</title>
          </head>

          <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#F8F9FA;">
            <div style="max-width:640px; margin:0 auto; background-color:#ffffff;">
              
              <div style="background:linear-gradient(135deg,#071B3A 0%,#273A73 100%); padding:34px 30px; text-align:center;">
                <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:800;">
                  Frosstec Lanka
                </h1>
                <div style="width:56px; height:3px; background-color:#BF4215; margin:18px auto;"></div>
                <p style="color:#D8DEEF; margin:0; font-size:15px;">
                  Thank you for contacting us
                </p>
              </div>

              <div style="padding:34px 30px;">
                <div style="background-color:#EEF1F8; border-left:4px solid #BF4215; border-radius:10px; padding:26px;">
                  <h2 style="color:#273A73; margin:0 0 18px 0; font-size:22px;">
                    Dear ${name},
                  </h2>

                  <p style="color:#111827; margin:0 0 16px 0; font-size:15px; line-height:1.7;">
                    Thank you for reaching out to Frosstec Lanka. We have received your inquiry and our team will contact you shortly.
                  </p>

                  <p style="color:#111827; margin:0 0 16px 0; font-size:15px; line-height:1.7;">
                    If your requirement is urgent, please contact our hotline directly on <strong>077 739 9999</strong>.
                  </p>

                  <div style="background-color:#ffffff; border-radius:8px; padding:18px; margin-top:24px;">
                    <p style="color:#6B7280; margin:0 0 5px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">
                      Your selected requirement
                    </p>
                    <p style="color:#273A73; margin:0; font-size:16px; font-weight:700;">
                      ${serviceLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div style="background-color:#0E1630; padding:24px 30px; text-align:center;">
                <p style="color:#AEB8D0; margin:0; font-size:13px;">
                  © 2026 Frosstec Lanka. This is an automated confirmation.
                </p>
              </div>

            </div>
          </body>
          </html>
        `,
      });

      if (clientError) {
        console.error('Client acknowledgement email error:', clientError);
      } else {
        clientEmailId = clientData?.id;
      }
    }

    return NextResponse.json({
      message: 'Email sent successfully',
      ownerEmailId: ownerData?.id,
      clientEmailId,
    });
  } catch (error) {
    console.error('Contact form email error:', error);

    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}