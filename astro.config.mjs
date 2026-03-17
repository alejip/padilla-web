import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://padillaperitaciones.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/landing-page') && !page.includes('/gracias'),
    }),
  ],
});
