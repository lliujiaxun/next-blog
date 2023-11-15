// build: 影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）
// ci: 更改我们的 CI 配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
// docs: 文档修改
// feat: 一个新的功能
// fix: 一个 bug 修复
// perf: 提升性能的代码修改
// refactor: 既不修复错误也不添加功能的代码更改
// style: 不影响代码含义的更改（空格、格式、缺少分号等）
// test: 添加缺失的测试或更正现有测试

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['✨ feat', '🐞 fix', '📄 docs', '🚀 ci', '🖥️ build', '⚙️ refactor', '🌈 style', '⚡ perf', '⏪ revert', '🔵 test']]
  }
}

//   {
//     label: '✨ feat',
//     detail: 'Select when creating new things',
//   },
//   {
//     label: '🐞 fix',
//     detail: 'Select when fixing a bug',
//   },
//   {
//     label: '📄 docs',
//     detail: 'Select when editing documentation',
//   },
//   {
//     label: '🚀 ci',
//     detail: 'Select when editing CI scripts',
//   },
//   {
//     label: '🖥️ build',
//     detail: 'Select when concerning build change or external dependencies',
//   },
//   {
//     label: '⚙️ refactor',
//     detail: 'Select when no new performances or no new functionnality',
//   },
//   {
//     label: '🌈 style',
//     detail: 'Select when working on code style',
//   },
//   {
//     label: '⚡ perf',
//     detail: 'Select when working on performances',
//   },
//   {
//     label: '⏪ revert',
//     detail: 'Select when going back',
//   },
//   {
//     label: '🔵 test',
//     detail: 'Select when adding or editing tests',
//   },
