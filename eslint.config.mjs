import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended, // Configurações recomendadas para JS
  ...tseslint.configs.recommended, // Configurações recomendadas para TS
  prettier, // Aplica as configurações do Prettier para garantir que não haja conflitos de formatação
  {},
];
