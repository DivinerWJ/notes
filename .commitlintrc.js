/*
 * @Description: 提交规范
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2020-12-04 02:41:49
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-04-30 17:01:08
 * @FilePath: /weixin/Users/wangjie/Documents/study/github/notes/.commitlintrc.js
 */
'user strict'
module.exports = {
  extends: [
    '@commitlint/config-conventional',
    'cz'
  ],
  // plugins: [
  //   'with-jira-issue'
  // ],
  // parserPreset: 'commitlint-with-demand',
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
      'cli',
      // 'WIP',
      'chore',
      'revert',
    ]],
    // 'with-jira-issue': [2, 'always'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
//   build ：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
//   ci ：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
//   docs ：文档更新
//   feat ：新增功能
//   fix ：bug 修复
//   perf ：性能优化
//   refactor ：重构代码(既没有新增功能，也没有修复 bug)
//   style ：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
//   test ：新增测试用例或是更新现有测试
//   revert ：回滚某个更早之前的提交
//   chore ：不属于以上类型的其他类型
