const fs = require('fs')

module.exports = async function ensureDir (dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, { recursive: true }, err =>
      err && err.code !== 'EEXIST' ? reject(err) : resolve()
    )
  })
}
