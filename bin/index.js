#!/usr/bin/env node


const { lines, packageJson, json, install } = require('mrm-core');
const { eslintRules, prettierRules } = require('../src/default');

function task() {
  const pkg = packageJson();
  // package
  pkg
    .setScript('lint', 'eslint src --fix --ext .ts,.tsx')
    .setScript('lint:diy', 'eslint --fix')
    .setScript('format', 'prettier --write \"./**/*.{ts,tsx}\"')
    .setScript('format:diy', 'prettier --write')
    .merge({
			husky: {
				hooks: {
					'pre-commit': 'lint-staged',
				},
			}
    })
    .unset('eslintConfig')
    .save();
  
  // lint-staged
  const lintstagedrc = json('.lintstagedrc');
  lintstagedrc
    .merge({
      "src/**/*.{ts,tsx}": ["eslint --fix"]
    })
    .save();
  
  // eslint
  lines('.eslintignore')
    .add(['node_modules/', 'dist', 'public', 'build'])
    .save();

  // Create or load .eslintrc.
  const eslintrc = json('.eslintrc.json');
  eslintrc
    .merge(eslintRules)
    .save();

  // prettier
  lines('.prettierignore')
    .add([
      'node_modules/',
      'dist',
      'build',
      '**/.vscode',
      '**/*.html',
      'package.json',
      'package-lock.json'
    ])
    .save();
  const prettierrc = json('.prettierrc');
  prettierrc
    .merge(prettierRules)
    .save();
  
  // env
  lines('.env')
    .add([
      'EXTEND_ESLINT=true'
    ])
    .save();

  const packages = [
    'prettier',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'husky',
    'lint-staged',
  ];
  install(packages);
}
task();

// task.description = 'Adds athm ts config';
// module.exports = task;