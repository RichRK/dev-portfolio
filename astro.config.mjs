import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import panda from "@pandacss/dev/postcss";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [panda],
  },
});
