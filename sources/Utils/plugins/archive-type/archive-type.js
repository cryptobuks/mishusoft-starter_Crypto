'use strict';
const fileType = require('file-type');

const extensions = new Set([
    '7z',
    'bz2',
    'gz',
    'rar',
    'tar',
    'zip',
    'xz',
    'gz'
]);

module.exports = input => {
    const ret = fileType(input);
    return extensions.has(ret && ret.ext) ? ret : null;
};
