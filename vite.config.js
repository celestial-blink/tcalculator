import { defineConfig } from 'vite';
import Precss from 'precss';

export default defineConfig({
    base: "https://celestial-blink.github.io/tcalculator/",
    css: {
        postcss: {
            plugins: [
                Precss()
            ]
        },
        devSourcemap: true
    },
    server: {
        port: 1111
    }
});