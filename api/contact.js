export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, telefono, email, servicio, mensaje } = req.body;

  const params = new URLSearchParams({ nombre, telefono, email, servicio, mensaje });

  await fetch('https://script.google.com/macros/s/AKfycbxqF0cctRKDMB-MJ6S3eL6sFcvYP-qGS42zGVxdW0OQiS2bW6VtP-FvcuyzPtHWPRjN/exec?' + params);

  res.status(200).json({ ok: true });
}
