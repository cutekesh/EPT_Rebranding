import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        plan: "url('/src/assets/plan and design.jpeg')",
        build: "url('/src/assets/build and deliver.jpeg')",
        equip: "url('/src/assets/equip and support.jpeg')",
      },
    },
  },
};
