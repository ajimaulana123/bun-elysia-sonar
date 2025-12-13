import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            eqeqeq: 'error',
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },
];
