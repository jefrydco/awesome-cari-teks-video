module.exports = {
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/strongly-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off'
  }
}
