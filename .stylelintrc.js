module.exports = {
  processors: [],
  plugins: [],
  // extends: "stylelint-config-standard", // 这是官方推荐的方式
  rules: {
    // 禁止无效的16禁止颜色
    "color-no-invaild-hex": true,
    // 禁止在font-famil中写重复的字体名称
    "font-family-no-duplicate-name": [true, {
      // 忽略的项
      ignoreFontFamilyNames:[]
    }],
    // 禁止font-family中缺少通用字体族关键字
    "font-family-no-missing-generic-family-keyword":true,
    "at-rule-empty-line-before": "always"|"never",
    "at-rule-name-case": "lower"|"upper",
    "block-no-empty": true,
  }
};