#!/usr/bin/env node
const chalk = require('chalk');
const { getFolderFileSizes } = require('../file-sizer');

const folder = process.argv[2];

if (!folder) {
  console.log('Must pass in folder name');
  process.exit(1);
}

const results = getFolderFileSizes(folder);

results.forEach(result => {
  process.stdout.write(`
    ${chalk.blue(result.sizeKb)} ${chalk.dim('-')} ${result.filePath}
  `.trim());
  console.log();
});

// console.log(results);
