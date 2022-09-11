import { defineConfig } from 'vite';
import Precss from 'precss';

export default defineConfig({
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