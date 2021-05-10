/*
 * @Author: wangjie59
 * @Date: 2021-05-06 16:35:02
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-05-10 10:14:54
 * @Description: 
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/.lintstagedrc.js
 */

module.exports = {
  "*.{js,vue}": [
    "eslint"
  ],
  "*.{html,vue,css,wxss,sass,scss}": [
    "stylelint"
  ],
  "*.md": [
    "markdownlint-cli2"
  ]
}

