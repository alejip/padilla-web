# Padilla Peritaciones

Web estática en Astro para perito de coches en Alicante.

## Stack
- Astro (HTML/CSS puro, sin frameworks JS)
- Sin CMS, sin base de datos
- Deploy en Vercel

## Estructura
- src/layouts/Layout.astro → head, GA4, Google Ads, scripts globales
- src/pages/index.astro → página principal
- src/pages/landing-page.astro → landing de conversión (sin header/footer)
- src/pages/gracias.astro → página de conversión (dispara Google Ads)
- src/components/ → Header, Footer, Contacto

## Tracking
- GA4: G-TNR4HVND35
- Google Ads base: AW-622351073 (va en TODAS las páginas)
- Conversión: AW-622351073/GS0ACIyAOtIbEOGl4agc (solo en /gracias)

## Formularios
- Usan FormSubmit para envío sin backend
- Al enviar siempre redirigen a /gracias
- Email destino: info@padillaperitaciones.com

## Imágenes
- Logo negro: /wp-content/uploads/2023/04/Logo-negro.png
- Logo blanco: /wp-content/uploads/2023/04/padilla_blanco.png
- APCAS: /wp-content/uploads/2023/04/LOGO_apcas_horizontal-1024x259-1.png
- Las imágenes se sirven desde el dominio actual mientras se migra

## Colores
- Azul oscuro: #0F2A45
- Acento dorado: #D4911A
- Fondo: #FAFAF8

## Convenciones
- Español en todos los textos
- noindex en landing-page (es página de pago)
- Cada página nueva usa Layout.astro como base