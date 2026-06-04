import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://padillaperitaciones.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/landing-page') && !page.includes('/gracias'),
    }),
  ],
});
