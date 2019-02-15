#!/usr/bin/env node
const { getFolderFileSizes } = require('../file-sizer');

const folder = process.argv[2];

if (!folder) {
  console.log('Must pass in folder name');
  process.exit(1);
}

const results = getFolderFileSizes(folder);

console.log(results);
