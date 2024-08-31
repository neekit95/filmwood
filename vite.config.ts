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
            '@': '/src', // Упрощение путей к файлам
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
