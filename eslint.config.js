import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            ecmaVersion: 2021, // Підтримка сучасного JS
            sourceType: 'module', // Використовуйте 'module' для ESM, або 'script' для CommonJS
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    pluginJs.configs.recommended,
    {
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'warn',
        },
    },
];
