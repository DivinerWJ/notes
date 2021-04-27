<!--
 * @Author: wangjie59
 * @Date: 2021-04-27 12:50:04
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-04-27 15:10:36
 * @Description: commit规范化方案
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/src/项目工程化/commit规范化方案.md
-->

# commit规范化方案

## 现阶段问题

> 为何要制定commit规范，效率和规范哪一个更重要？

commit的次数以及commit携带的message多少并不会影响所编写代码的执行，但当遇到线上问题需要处理，或执行merge，亦或cherry-pick时，log中清一色都是`修复bug`，`update: XXX`，这个时候想筛选出所需的commit其实很难。

平时项目开发时，如果不规范commit提交message，我们基本上总能遇到这些问题

- commit提交的message看不懂
- commit太过简单，一笔带过，不知该次commit的目的何在
- commit太过臃肿
- commit信息与代码内容没有关联或关联性不强

为了更好的解决问题，对commit进行规范化，其实是一件很重要的事情

具体涉及到的内容是

- 关联commit和代码，如果是开源项目还可以关联issue

## 规范
社区中的commit message规范有很多，我们选择[Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)，因为该规范配套工具齐全，使用最为广泛。

每次提交，message都应该包含三个部分：Header、Body、Footer。格式如下：
|Item | Value |
|:------    |:--  |
|type(scope): subject   |     # head 必填，其中 type 和 subject 必填。|
空一行
|72-character wrapped.   |    # body 选填。对本次commit的详情描述，可以多行|
空一行
|BREAKING CHANGE: msg.   |    # footer 选填。主要用于版本回滚或绑定issue|

> **这样写的commit类似于文档或者注释，当然如果在查看log不想全部行展示时，执行git log --oneline即可**

## 工具

为了更规范以及减少写commit的时间，引入工具对commit进行规范校验，所需工具如下：

### commit提示

`commitizen`

`cz-conventional-changelog`

### lint工具

`@commitlint/config-conventional`

`@commitlint/cli`

### 自定义lint

`commitlint-config-cz`

`cz-customizable`

### 拦截commit

`husky`

### 生成changelog

`standard-version`

## 一、commit规范

安装

```
npm i -D commitizen cz-conventional-changelog
```

```JSON
// package.json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
    // 如果是全局安装则为
    // "path": "cz-conventional-changelog"
  }
},
```

看你习惯是安装全局还是针对项目，如果是全局安装，需要在用户全局目录下新建`.czrc`文件，然后输入

```JSON
// .czrc
{
  "path": "cz-conventional-changelog"
}
```

或者直接键入命令：

```
echo '{"path":"cz-conventional-changelog"}' > ~/.czrc
```

而且如果是全局安装则直接在项目根目录使用`git cz`命令就可以看到命令行弹出内容；如果是项目级安装则需要在scripts中新增一条命令，交于node进行操作：

```JSON
// package.json
"scripts":{
  "commit": "git-cz"
}
```

然后按照规范中的要求依次选择以及填写提交的内容等等不再赘述。

一般来说，到这一步其实已经够用了，如果愿意规范自己的代码和commit，但如果没有规则还是会有错误的提交，接下来就继续对commit做校验

## 二、commitlint校验

```
npm i -D @commitlint/config-conventional @commitlint/cli
```

然后在项目根目录新建lint配置文件`.commitlintrc.js`，其实别的格式也可以。

```JavaScript
module.exports = {
  extends: [
    // 使用预设的配置
    '@commitlint/config-conventional'
  ],
  // 改变预设中的提交类型
  // rule由name和配置数组组成，如： name:[0, 'always', 72] ，数组中第一位为 level ，可选 0,1,2 ，0为禁用规则，1为警告，2为错误，第二位为应用与否，可选 always|never ，第三位该rule的值
  rules: {
    'type-enum': [2, 'always', [
      'feat',
      'update',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
    ]]
    // 其余配置不再赘述，移步官方文档查看
  }
};
```

`commitlint`相关文档

[简介](https://github.com/conventional-changelog/commitlint)

[官方文档](https://www.conventionalcommits.org/en/v1.0.0/#summary)

[配置](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md)

[预设配置](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js)

## 三、[husky](https://www.cnblogs.com/jiaoshou/p/12222665.html)拦截commit

husky继承了git提供的`hook`来在不同的时期触发钩子，从而执行不同的操作，阻止`commit`、`push`等等

```JSON
// package.json
"husky": {
  "hooks": {
    "pre-commit": "",  // stylelint or eslint，pre-commit会优先于commit-msg执行
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" // commitlint检测
  }
}
```

这样，当我们在当前项目中执行`git commit -m 'commit message'`时将触发`commit-msg`事件钩子，并通知`husky`，然后执行`commitlint -E HUSKY_GIT_PARAMS`命令，`commitlint`读取`.commitlintrc.js`配置规则并对提交的`commit message`这串文字进行校验，若校验不通过，则在终端输出错误，commit终止。

## 四、自定义提示文案

如果想对提示文案做个性化设置

```
npm i -D commitlint-config-cz cz-customizable
```

```JSON
// package.json 中做如下修改
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

```JavaScript
// .commitlintrc.js 中增加cz
{
  extends: [
    "@commitlint/config-conventional",
    "cz"
  ]
}
```

然后在项目根目录下新建`.cz-config.js`文件，按照官方给的实例文件[cz-config-EXAMPLE.js](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)如下所示：

进行定制化修改，如去掉不使用的value，定制scope，或者汉化等等

```JavaScript
module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name:
        'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    { value: 'test', name: 'test:     Adding missing tests' },
    {
      value: 'chore',
      name:
        'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
```

## 五、生成开发日志`standard-version`

```
npm i -D standard-version
```

```JSON
// package.json
"scripts":{
  "release": "standard-version"
}
```

就可以生成`CHANGELOG.md`，nice！

## END

**写在最后，关于文章开头的问题，我觉得效率包含个人开发效率和项目能稳定发布上线的效率两部分，目前如果项目中依然没有统一的规范来约束开发过程，那随着项目不断迭代更新，在定位问题时带来的成本会越来越大。所以长痛不如短痛，应该在平时的工作中就建立好良好的提交规范，方便自己也方便他人。**
