import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://www.padillaperitaciones.com',
  redirects: {
    '/siniestro-total-y-valor-venal': '/siniestro-total',
    '/informe-de-estado-antes-de-comprar': '/antes-de-comprar',
    '/informe-averias-mecanicas': '/averias-mecanicas',
    '/informe-vicios-ocultos': '/vicios-ocultos',
    '/informe-reparacion-mal-realizada': '/reparacion-mal-realizada',
    '/inf': '/',
    '/elementor-216': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/landing-page') && !page.includes('/gracias'),
    }),
  ],
});