module.exports = {
  extends: ['@commitlint/config-conventional'],
  headerCorrespondence: ['type', 'scope', 'subject'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'perf', 'chore', 'doc', 'style', 'refactor', 'test']
    ],
    'scope-enum': [2, 'always', ['ci', 'build', 'common', 'view', 'model']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [2, 'never'],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
