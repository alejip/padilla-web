export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, telefono, email, servicio, mensaje } = req.body;

  const params = new URLSearchParams({ nombre, telefono, email, servicio, mensaje });

  await fetch('https://script.google.com/macros/s/AKfycbx0dm5mnuCTdDUZv81ENFFZrPH6gKJuhNGdGDGLZcZpl-ipnimrTg3vzaKg_7r2VcQv/exec?' + params);

  res.status(200).json({ ok: true });
}
