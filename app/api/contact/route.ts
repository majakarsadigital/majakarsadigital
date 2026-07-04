import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log('========== CONTACT FORM ==========')

    const body = await req.json()

    console.log('Request Body:')
    console.log(body)

    const { name, email, subject, message } = body

    console.log('Mengirim email...')
    console.log({
      name,
      email,
      subject,
      message,
    })

    const result = await resend.emails.send({
      from: 'MajakarsaDigital <noreply@majakarsadigital.site>',
      to: ['majakarsadigital@gmail.com'],
      subject,
      replyTo: email,
      html: `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Pesan Baru dari Website</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">

  <!-- Preheader (tersembunyi, muncul di preview inbox) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    Pesan baru masuk dari formulir kontak Majakarsa Digital
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;background:#f4f5f7;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px;border-bottom:1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;">
                      Majakarsa Digital
                    </p>
                    <h1 style="margin:0;font-size:20px;font-weight:600;color:#111827;">
                      Pesan Baru Masuk
                    </h1>
                    <p style="margin:8px 0 0;font-size:13px;color:#6b7280;">
                      Dikirim melalui formulir kontak website
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px 8px;">
              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#4b5563;">
                Anda menerima pesan baru dari pengunjung website. Detail lengkap tercantum di bawah ini.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                <tr>
                  <td width="130" style="padding:14px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;font-size:13px;font-weight:bold;color:#6b7280;">
                    Nama
                  </td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;font-size:13px;font-weight:bold;color:#6b7280;">
                    Email
                  </td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;">
                    <a href="mailto:${email}" style="color:#374151;text-decoration:none;font-weight:bold;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background:#f9fafb;font-size:13px;font-weight:bold;color:#6b7280;">
                    Subjek
                  </td>
                  <td style="padding:14px 16px;font-size:14px;color:#111827;">
                    ${subject}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 10px;font-size:12px;font-weight:bold;letter-spacing:.5px;text-transform:uppercase;color:#6b7280;">
                Isi Pesan
              </p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;white-space:pre-wrap;font-size:15px;line-height:1.8;color:#374151;">
${message}
              </div>

              <!-- CTA Reply Button -->
              <table cellpadding="0" cellspacing="0" style="margin:28px 0 4px;">
                <tr>
                  <td style="border-radius:8px;border:1px solid #d1d5db;">
                    <a href="mailto:${email}" style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:bold;color:#111827;text-decoration:none;border-radius:8px;">
                      Balas Pesan Ini
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#111827;">
                Majakarsa Digital
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#9ca3af;">
                Email ini dikirim otomatis melalui formulir kontak website
              </p>
              <a href="https://majakarsadigital.site" style="font-size:12px;color:#6b7280;text-decoration:none;">
                majakarsadigital.site
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
    })

    console.log('Email berhasil dikirim:')
    console.log(result)

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Gagal mengirim email:')
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}