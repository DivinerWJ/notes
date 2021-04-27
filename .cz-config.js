/*
 * @Author: wangjie59
 * @Date: 2021-04-26 15:58:40
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-04-27 13:30:14
 * @Description: cz-config.js
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/.cz-config.js
 */

'use strict';
module.exports = {
  types: [{
      value: 'feat',
      name: '特性:    新增一个功能'
    },
    {
      value: 'update',
      name: '更新:    更新一个功能'
    },
    {
      value: 'fix',
      name: '修复:    修复一个Bug'
    },
    {
      value: 'docs',
      name: '文档:    文档变更'
    },
    {
      value: 'style',
      name: '样式:    代码格式（不影响功能，例如空格、分号等格式修正）'
    },
    {
      value: 'refactor',
      name: '重构:    代码重构（注意和特性、修复区分开）'
    },
    {
      value: 'pref',
      name: '优化:    改善性能'
    },
    {
      value: 'test',
      name: '测试:    添加一个测试'
    },
    {
      value: 'build',
      name: '依赖:    变更项目构建或外部依赖(例如scopes: webpack、gulp、npm等)'
    },
    {
      value: 'cli',
      name: '配置:    更改持续集成软件的配置文件和package中的scripts命令,例如scopes: Travis, Circl'
    },
    // {
    //   value: 'WIP',
    //   name: 'WIP:    Work in progress'
    // },
    {
      value: 'chore',
      name: '构建:    变更构建流程或辅助工具'
    },
    {
      value: 'revert',
      name: '回滚:    代码回退'
    }
  ],
  scopes: [{
      name: '系统框架'
    },
    {
      name: '公共组件'
    },
  ],
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
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  // allowBreakingChanges: ['特性', 'Fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 72,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};