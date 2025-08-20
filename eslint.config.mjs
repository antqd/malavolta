// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import * as espree from 'espree' // <— parser per i file .js CommonJS

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  // Base Next + TS
  ...compat.config({
    extends: ['next', 'plugin:@typescript-eslint/recommended'],
    plugins: ['import', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
  }),

  // Regole globali
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',

      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
    },
  },

  // ✅ Override SOLO per i loader/utility JS CommonJS
  {
    files: ['src/visual-edits/**/*.js'],
    languageOptions: {
      parser: espree,              // usa espree per i .js
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-expressions': 'off', // <— qui il punto
      'no-unused-expressions': 'off',
      'import/no-dynamic-require': 'off',
    },
  },
]

export default eslintConfig
