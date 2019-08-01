#!/usr/bin/env node

const colors = require('colors');
const { execSync } = require('child_process');

// 检测文件是否冲突的正则
const conflictRE = '^<<<<<<<\\s|^=======$|^>>>>>>>\\s';

let conflict;

try {
  conflict = execSync(`git grep -n -P "${conflictRE}"`, { encoding: 'utf-8' });
} catch (e) {
  process.exit(0);
}

if (conflict) {
  console.log('发现未处理冲突，冲突内容如下：'.rainbow);
  console.log(conflict.trim().bold.red);
  process.exit(1);
}

process.exit(0);
