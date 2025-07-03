import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      'tailwindcss/version.js': path.resolve(__dirname, 'src/fake-tailwind-version.js')
    }
  },
})