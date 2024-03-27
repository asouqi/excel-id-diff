module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/*.css", "**/*.scss"],
  plugins: ["prettier", "@typescript-eslint", "unused-imports"],
  extends: [
    "airbnb/rules/react",

    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports-ts": "error",
    "react/jsx-filename-extension": 0,
    "react/no-danger": 0,
    "react/no-unused-prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-wrap-multilines": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "class-methods-use-this": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-props-no-spreading": 0,
  },
}
