import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true }), // Проверка TypeScript
    ],
    resolve: {
        alias: {
            '@': '/src', // Упрощение путей к файлам
        },
    },
    server: {
        port: 3000, // Порт разработки
    },
    build: {
        target: 'esnext', // Целевая версия ECMAScript
    },
});
