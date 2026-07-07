import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const fullName = formData.get('fullName') as string
    const companyName = formData.get('companyName') as string
    const email = formData.get('email') as string
    const whatsapp = formData.get('whatsapp') as string
    const productName = formData.get('productName') as string
    const productCategory = formData.get('productCategory') as string
    const productPrice = formData.get('productPrice') as string
    const description = formData.get('description') as string
    const featuresRaw = formData.get('features') as string
    const colorPalettesRaw = formData.get('colorPalettes') as string
    const colorNotes = formData.get('colorNotes') as string
    const pageCount = formData.get('pageCount') as string
    const budget = formData.get('budget') as string
    const deadline = formData.get('deadline') as string
    const referenceUrl = formData.get('referenceUrl') as string
    const notes = formData.get('notes') as string
    const file = formData.get('file') as File | null

    if (!fullName || !email || !whatsapp || !description || !productName) {
      return NextResponse.json({ success: false, error: 'Field wajib belum lengkap' }, { status: 400 })
    }

    let features: string[] = []
    try { features = JSON.parse(featuresRaw || '[]') } catch { features = [] }

    let colorPalettes: string[] = []
    try { colorPalettes = JSON.parse(colorPalettesRaw || '[]') } catch { colorPalettes = [] }

    const attachments: { filename: string; content: Buffer }[] = []
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ success: false, error: 'Ukuran file maksimal 10 MB' }, { status: 400 })
      }
      const arrayBuffer = await file.arrayBuffer()
      attachments.push({ filename: file.name, content: Buffer.from(arrayBuffer) })
    }

    const formatDeadline = (dateStr: string) => {
      if (!dateStr) return '-'
      try {
        return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      } catch {
        return dateStr
      }
    }

    const formattedPrice = productPrice
      ? `Rp ${Number(productPrice).toLocaleString('id-ID')}`
      : '-'

    const colorSummary = [colorPalettes.join(', '), colorNotes].filter(Boolean).join(' — ') || '-'

    const result = await resend.emails.send({
      from: 'MajakarsaDigital <noreply@majakarsadigital.site>',
      to: ['majakarsadigital@gmail.com'],
      subject: `Pesanan Baru — ${productName}`,
      replyTo: email,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Pesanan Baru</title></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#1f2937;">

  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    Pesanan baru dari ${fullName} untuk ${productName}
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;background:#f4f5f7;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <tr><td style="padding:0 4px 20px;">
          <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.5px;color:#374151;">MAJAKARSA DIGITAL</p>
        </td></tr>

        <tr><td style="background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">

          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:36px 40px 24px;">
            <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#eef2ff;font-size:11px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4f46e5;margin-bottom:14px;">Pesanan Baru</span>
            <h1 style="margin:14px 0 8px;font-size:19px;font-weight:600;color:#111827;">${fullName} memesan "${productName}"</h1>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">Permintaan proyek dikirim melalui halaman detail produk website.</p>
          </td></tr></table>

          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid #eef0f2;"></td></tr></table>

          <!-- SECTION: Produk -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:28px 40px 8px;">
            <p style="margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#9ca3af;">Produk Dipesan</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 16px;width:34%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Nama Produk</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${productName}</p>
                </td>
                <td style="padding:0 0 16px;width:33%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Kategori</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${productCategory || '-'}</p>
                </td>
                <td style="padding:0 0 16px;width:33%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Harga Katalog</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${formattedPrice}</p>
                </td>
              </tr>
            </table>
          </td></tr></table>

          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:4px 40px;"><div style="border-top:1px solid #eef0f2;"></div></td></tr></table>

          <!-- SECTION: Kontak -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px 8px;">
            <p style="margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#9ca3af;">Informasi Kontak</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Nama Lengkap</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${fullName}</p>
                </td>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Perusahaan</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${companyName || '-'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 4px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Email</p>
                  <p style="margin:0;font-size:14.5px;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></p>
                </td>
                <td style="padding:0 0 4px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">WhatsApp</p>
                  <p style="margin:0;font-size:14.5px;"><a href="https://wa.me/${String(whatsapp).replace(/[^0-9]/g, '')}" style="color:#2563eb;text-decoration:none;">${whatsapp}</a></p>
                </td>
              </tr>
            </table>
          </td></tr></table>

          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:4px 40px;"><div style="border-top:1px solid #eef0f2;"></div></td></tr></table>

          <!-- SECTION: Detail Proyek -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px 8px;">
            <p style="margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#9ca3af;">Detail Proyek</p>

            <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;">Deskripsi Kebutuhan</p>
            <div style="background:#f9fafb;border:1px solid #eef0f2;border-radius:8px;padding:18px 20px;white-space:pre-wrap;font-size:14.5px;line-height:1.75;color:#374151;margin-bottom:18px;">${description}</div>

            ${features.length > 0 ? `
            <p style="margin:0 0 10px;font-size:12px;color:#9ca3af;">Fitur Tambahan</p>
            <div style="margin-bottom:18px;">
              ${features.map((f: string) => `<span style="display:inline-block;font-size:12px;color:#4f46e5;background:#eef2ff;border-radius:999px;padding:5px 12px;margin:0 6px 6px 0;">${f}</span>`).join('')}
            </div>` : ''}

            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Jumlah Halaman</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${pageCount || '-'}</p>
                </td>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Kombinasi Warna</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${colorSummary}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Estimasi Budget</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${budget || '-'}</p>
                </td>
                <td style="padding:0 0 16px;width:50%;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Target Selesai</p>
                  <p style="margin:0;font-size:14.5px;color:#111827;">${formatDeadline(deadline)}</p>
                </td>
              </tr>
              ${referenceUrl ? `
              <tr>
                <td colspan="2" style="padding:0;vertical-align:top;">
                  <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Link Referensi</p>
                  <p style="margin:0;font-size:14.5px;"><a href="${referenceUrl}" style="color:#2563eb;text-decoration:none;">${referenceUrl}</a></p>
                </td>
              </tr>` : ''}
            </table>
          </td></tr></table>

          ${notes ? `
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:4px 40px;"><div style="border-top:1px solid #eef0f2;"></div></td></tr></table>
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:24px 40px 8px;">
            <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;">Catatan Tambahan</p>
            <div style="background:#f9fafb;border:1px solid #eef0f2;border-radius:8px;padding:18px 20px;white-space:pre-wrap;font-size:14.5px;line-height:1.75;color:#374151;">${notes}</div>
          </td></tr></table>` : ''}

          ${attachments.length > 0 ? `
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:20px 40px 8px;">
            <div style="display:flex;align-items:center;gap:10px;background:#f9fafb;border:1px solid #eef0f2;border-radius:8px;padding:12px 16px;">
              <span style="font-size:13px;color:#374151;">📎 Lampiran: <strong>${file?.name}</strong></span>
            </div>
          </td></tr></table>` : ''}

          <!-- CTA -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:28px 40px 36px;">
            <table cellpadding="0" cellspacing="0"><tr><td style="border-radius:8px;background:#111827;">
              <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">Balas ${String(fullName).split(' ')[0]} →</a>
            </td></tr></table>
          </td></tr></table>

        </td></tr>

        <tr><td style="padding:24px 4px 0;text-align:center;">
          <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Email ini dikirim otomatis oleh sistem pemesanan produk — Majakarsa Digital.</p>
          <a href="https://majakarsadigital.site" style="font-size:12px;color:#9ca3af;text-decoration:underline;">majakarsadigital.site</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    })

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Gagal mengirim pesanan:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}