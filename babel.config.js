// const prodPlugins = [];
// // 发布阶段，则向`prodPlugins `数组中加入插件`transform-remove-console`
// if (process.env.NODE_ENV !== 'production') {
//   prodPlugins.push('transform-remove-console')
// }

module.exports = {
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ],
    "stage-2",
  ],
  "plugins": [
    [
      "prismjs",
      {
        "languages": [
          "javascript",
          "css",
          "html"
        ], //这是语言类型
        "plugins": [
          "previewers",
          "autolinker",
          "line-numbers",
          "copy-to-clipboard"
        ], //使用了行号还可以添加其他插件，具体去官网看看吧
        "theme": "twilight", //主题！！
        "css": true
      }
    ],
    // ...prodPlugins
  ]
}