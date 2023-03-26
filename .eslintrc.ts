module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    "vue/html-indent": ["error", 4], // html 缩进
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }], // 标签换行
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "beside",
      "multiline": "ignore"
    }], // 第一个属性
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 5
      },      
      "multiline": {
        "max": 5
      }
    }], // 属性配置
    "indent": ["error", 4], // 缩进
    "semi": ["error", "never"], // 禁止分号
  }
}
