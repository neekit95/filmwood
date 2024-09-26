import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
    plugins: [react(), checker({ typescript: true })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@components': path.resolve(__dirname, 'src/components'),
            colors: path.resolve(__dirname, 'src/styles/colors.scss'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use 'colors' as *;`,
            },
        },
    },
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
