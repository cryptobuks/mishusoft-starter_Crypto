const archiver = require('archiver')
const path = require('path')
const fs = require('fs')

module.exports = async function exportToFile(destination, filename, callback)
{
    const zipPath = path.join(destination, filename)
    if (fs.existsSync(zipPath)) {
        console.log('(Replacing existing [' + filename + '] file)')
        fs.unlinkSync(zipPath)
    }

    const zipFile = fs.createWriteStream(path.join(destination, filename))

    const archive = archiver('zip', {
        zlib: { level: 9 }
    })

    archive.on('warning', err => {
        if (err.code === 'ENOENT') {
            console.warn('File not found')
            console.warn(err)
        } else {
            throw err
        }
    })

    archive.on('error', function (err) {
        throw err
    })

    const finishWritePromise = new Promise(resolve => {
        archive.on('close', resolve)
    })

    archive.pipe(zipFile)

    if (callback) {
        callback(archive)
    }

    await archive.finalize()

    await finishWritePromise
    console.log('Exported [' + filename + '])')
    console.log(`Wrote ${archive.pointer()} bytes`)
}
