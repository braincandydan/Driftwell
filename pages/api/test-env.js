export default function handler(req, res) {
  res.status(200).json({
    hasClientId: !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    hasToken: !!process.env.TINA_TOKEN,
    clientIdLength: process.env.NEXT_PUBLIC_TINA_CLIENT_ID?.length || 0,
    tokenLength: process.env.TINA_TOKEN?.length || 0,
  })
}
