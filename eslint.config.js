import path from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import pluginJs from '@eslint/js';
import parser from '@typescript-eslint/parser';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                module: 'readonly',
                __dirname: 'readonly',
            },
            parser: parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                tsconfigRootDir: __dirname,
                project: [path.join(__dirname, 'tsconfig.eslint.json')],
            },
        },
        rules: {
            'no-unused-vars': 'error',
            'object-shorthand': ['error', 'always'],
            curly: ['error', 'all'],
            'no-redeclare': 'error',
            quotes: ['error', 'single'],
            'keyword-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            eqeqeq: ['error', 'always'],
            'no-unreachable': 'error',
            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                    ignoreReadBeforeAssign: false,
                },
            ],
        },
        ignores: ['eslint.config.js'],
    },
    pluginJs.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                tsconfigRootDir: __dirname,
                project: [path.join(__dirname, 'tsconfig.eslint.json')],
            },
        },
        plugins: {
            '@typescript-eslint': eslintPluginTypescript,
        },
        rules: {
            '@typescript-eslint/explicit-function-return-type': ['warn'],
            '@typescript-eslint/no-unused-vars': ['error'],
        },
        ignores: ['eslint.config.js'],
    },
];
