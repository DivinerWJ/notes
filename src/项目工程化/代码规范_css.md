<!--
 * @Author: wangjie59
 * @Date: 2021-04-30 14:52:46
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-05-07 14:16:11
 * @Description: 
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/项目工程化/代码规范_css.md
-->

# Stylelint

## 优点

1. 支持`less`、`sass`预处理器；
2. 活跃、插件多；

## 项目中安装stylelint

```shell
# stylelint-wxss
npm i -d stylelint stylelint-config-standard stylelint-scss stylelint-order stylelint-config-recess-order
```

- stylelint-scss

`scss`拓展，使`stylelint`支持`scss`语法

- stylelint-config-standard

官方的`stylelint`代码规则

- stylelint-order

以某个顺序编写css。例如先写定位，再写盒模型，再写内容区样式，最后写CSS3相关属性。这样可以极大的保证我们代码的可读性。

- stylelint-config-recess-order

`stylelint-order`的第三方配置

## 配置文件.stylelintrc.js

[配置文档](https://stylelint.io/user-guide/rules/list)

[中文文档(不完整)](https://cloud.tencent.com/developer/section/1489630)

## 配置文件.stylelintignore

*.js

*.jpg

*.woff

测试和打包目录

/test/

/dist/

## 校验

在`package.json`中的`scripts`添加指令，然后`npm run lintcss`即可

```JavaScript
{
  "scripts": {
    "lintcss": "stylelint src/**/*.css", // (--fix) 自动修复，不建议使用
  }
}
```

## commit前校验

```JSON
// package.json
"lint-staged": {
  "*.{html,vue,css,sass,scss}": [
    "stylelint"
  ]
}
```

## [附]wxss校验

```shell
npm i -D stylelint-wxss
```

```JavaScript
// .stylelintrc.js
  plugins: ['stylelint-wxss'],
  rules: {
    'wxss/selector-disallowed': ['tag'], {
      // exclude: {
      //   tag: ['page']
      // },
      // // skip lint files under component directory
      // glob: ['**', '!**/component/**']
    }
  }
```
