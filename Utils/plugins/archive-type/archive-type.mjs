'use strict';
import fileType from "./file-type";

const extensions = new Set(['7z', 'bz2', 'gz', 'rar', 'tar', 'zip', 'xz', 'gz']);

export default input => {
    const ret = fileType(input);
    return extensions.has(ret && ret.ext) ? ret : null;
}
