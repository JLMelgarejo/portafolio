import { defineConfig } from 'vite';
import astro from '@astrojs/vite';

export default defineConfig({
    plugins: [astro()],
    server: {
        allowedHosts: ['jorgemelgarejo.com'], // Agrega tu dominio aquí
    },
});