#!/usr/bin/env node

const { getFileSizes, getFolderFileSizes } = require('../file-sizer');

// const results = getFileSizes(['./fixtures/sample.txt', './fixtures/cropped-coffee.jpg']);

const results = getFolderFileSizes('./fixtures');

console.log(results);