import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true }), // Проверка TypeScript
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Алиас @ для папки src
            '@pages': path.resolve(__dirname, 'src/pages'), // Alias для страниц
        },
    },
    server: {
        port: 3000, // Порт разработки
    },
    build: {
        target: 'esnext', // Целевая версия ECMAScript
    },
});
