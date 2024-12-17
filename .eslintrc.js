module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    rules: {
        // General formatting rules
        'indent': ['error', 4],
        'max-len': [
            'error',
            {
                'code': 80,
                'ignoreComments': true,
                'ignoreTemplateLiterals': true
            }
        ],
        'eol-last': ['error', 'always'],
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],

        // Code style and structure rules
        'comma-dangle': ['error', 'never'],
        'no-useless-concat': 'error',
        'object-curly-spacing': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'func-style': ['error', 'expression'],
        'no-shadow': 'warn',
        'curly': ['error', 'all'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'space-before-blocks': ['error', 'always'],

        // TypeScript-specific rules
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { 'accessibility': 'explicit' }
        ],

        // Variable and async handling rules
        'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'none' }],
        'prefer-const': 'error',
        'require-await': 'error',

        // Debugging and logging rules
        'no-console': 'error',
        'no-debugger': 'error',

        'import/no-unresolved': 'off',
        '@typescript-eslint/array-type': ['error', { 'default': 'generic' }],
        'arrow-body-style': ['error', 'always']
    }
}
