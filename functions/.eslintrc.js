module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "require-jsdoc": "off",
    "jsdoc/require-jsdoc": "off", 
    "no-multi-spaces": "off",
    "object-curly-spacing": "off",
    "max-len": "off",
    "no-trailing-spaces": "off",
    "missing-trailing-comma": "off",
    'spaced-comment': 'off',
    'arrow-parens': 'off',
    'brace-style': 'off',
    'block-spacing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'operator-linebreak': 'off',
    'quote-props': 'off',
    'quotes': 'off',
    "comma-dangle": "off",
    "padded-blocks": "off",
    "newline-require": "off",
    "eol-last": "off",
  },
};
