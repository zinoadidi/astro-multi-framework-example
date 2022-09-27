import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import react from "@astrojs/react";
import vue from "@astrojs/vue";


// https://astro.build/config
export default defineConfig({
  integrations: [lit(), react(), vue()]
});