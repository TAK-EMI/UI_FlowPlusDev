module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: "module",
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
    }
};
