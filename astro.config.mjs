// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  integrations: [tailwind()],
});
