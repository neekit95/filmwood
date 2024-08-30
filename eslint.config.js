import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                module: 'readonly',
                __dirname: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsEslint,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': 'error', // Неиспользуемые переменные
            'object-shorthand': ['error', 'always'], // Сокращённый синтаксис для объектов
            curly: ['error', 'all'], // Использование фигурных скобок у if
            'no-redeclare': 'error', // Переопределение переменных
            quotes: ['error', 'single'], // Одинарные кавычки у строк
            'keyword-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            eqeqeq: ['error', 'always'], // Использование === вместо ==
            'no-unreachable': 'error', // Недостижимый код
            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                    ignoreReadBeforeAssign: false,
                },
            ],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
    pluginJs.configs.recommended,
];
