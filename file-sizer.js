const fs = require('fs');
const path = require('path');
const bytes = require('bytes');

/**
 *
 * @param {string[]} files - A list of file paths
 * @returns {{ filePath: string, size: string, sizeKb: string, sizeRaw: number }[]}
 */
function getFileSizes(files) {
  return files.map(file => {
    const { size: sizeRaw } = fs.statSync(file);
    const sizeKb = bytes(sizeRaw, {
      unit: 'KB',
    });
    const size = bytes(sizeRaw);
    return {
      filePath: file,
      size,
      sizeKb,
      sizeRaw,
    };
  });
}

function getFolderFileSizes(folder) {
  const files = fs.readdirSync(folder).map(file => path.join(folder, file));
  return getFileSizes(files);
}


module.exports = {
  getFileSizes,
  getFolderFileSizes,
};
