module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    ],
    rules: {
        'react/prop-types': 'off',

        'react/react-in-jsx-scope': 'off',

        'jsx-a11y/anchor-is-valid': 'off',

        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    },
    plugins: ['simple-import-sort']
};
