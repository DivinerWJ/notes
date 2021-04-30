<!--
 * @Author: wangjie59
 * @Date: 2021-04-30 14:35:39
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-04-30 14:52:25
 * @Description: js代码规范
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/项目工程化/代码规范_js.md
-->

# 代码规范-js

## 安装eslint

```shell
npm install -g eslint
```

项目根目录下执行

```shell
eslint --init
```

项目根目录下
然后可以选择推荐配置、自选规则、使用已有的配置

校验时

```shell
eslint * # (--fix 自动修复)
```

## 使用VsCode插件

搜索安装`ESLint`

### 校验Vue

在项目目录建个`.vscode`目录，里面建`settings.json`，针对本项目的配置

```JSON
  "eslint.validate": [
    "javascript",
    "html",
    "vue",
  ],
  // 保存自动修复
  // "editor.codeActionsOnSave": {
  //   "source.fixAll.eslint": true
  // },
```

然后就可以校验`Vue`文件了
