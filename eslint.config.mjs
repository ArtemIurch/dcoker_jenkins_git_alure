import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"], // Применяется ко всем файлам .js
    languageOptions: {
      sourceType: "module", // Для поддержки ES-модулей
      ecmaVersion: "latest", // Использование современных возможностей JavaScript
      globals: {
        ...globals.browser, // Глобальные переменные WebDriverIO
        ...globals.mocha, // Глобальные переменные Mocha (describe, it и т.д.)
        $: "readonly", 
        browser: "readonly",
        expect: "readonly",
      },
    },
  },
  pluginJs.configs.recommended, // Рекомендованные правила ESLint
];
