/*
 * @Author: wangjie59
 * @Date: 2021-04-30 15:26:10
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-04-30 15:50:35
 * @Description: 
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/.stylelintrc.js
 */
module.exports = {
  "extends": [
    "stylelint-config-standard" // 标准配置规则
  ],
  'plugins': [
    'stylelint-order', // 指定排序，比如声明的块内(插件包)属性的顺序。
    'stylelint-scss' // 执行各种各样的 SCSS语法特性检测规则(插件包)
  ],
  "rules": {
    'at-rule-no-unknown': null, // 屏蔽一些语法检查
    'scss/at-rule-no-unknown': true,
    // css书写顺序
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules'
    ],
    'order/properties-order': [
      'position',
      'z-index',
       // 其他样式的顺序
    ],
    // 其他规则
    'no-empty-source': null
  }
}