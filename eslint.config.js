const js = require('@eslint/js')
const globals = require('globals')
const { fixupPluginRules } = require('@eslint/compat')
const mithrilPlugin = require('eslint-plugin-mithril')

// eslint-plugin-mithril (2019) still uses the pre-ESLint-9 RuleContext API.
// @eslint/compat rewrites those calls so the useful JSX rules still run.
const mithril = fixupPluginRules(mithrilPlugin)

module.exports = [
  {
    ignores: [
      'dist/**',
      'docs/**',
      'extension-bootstrap/**',
      'nostalgia/**',
      'node_modules/**',
      '_scratch/**'
    ]
  },
  js.configs.recommended,
  {
    plugins: { mithril },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Same set as plugin:mithril/recommended
      'mithril/jsx-key': 'error',
      'mithril/jsx-no-comment-textnodes': 'error',
      'mithril/jsx-no-duplicate-props': 'error',
      'mithril/jsx-no-target-blank': 'error',
      'mithril/jsx-no-undef': 'error',
      'mithril/jsx-uses-mithril': 'error',
      'mithril/jsx-uses-vars': 'error'
    }
  }
]
