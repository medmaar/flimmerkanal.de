// Cloudflare Pages Function
// Route: /go/wa
// Redirects to WhatsApp with pre-filled message
// Number is kept server-side so it never appears in HTML source

const WHATSAPP_NUMBER = '17828026280';
const BRAND_GREETING  = 'Hallo FlimmerKanal!';

function buildMessage(raw) {
  if (!raw) return BRAND_GREETING;
  let rest = raw.replace(/^Hallo[^!.,\n]{0,40}[!,.]\s*/i, '').trim();
  if (rest) {
    rest = rest.charAt(0).toUpperCase() + rest.slice(1);
    return `${BRAND_GREETING} ${rest}`;
  }
  return BRAND_GREETING;
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const msg = url.searchParams.get('msg');
  const finalMsg = buildMessage(msg);
  const target = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
  return Response.redirect(target, 302);
}
