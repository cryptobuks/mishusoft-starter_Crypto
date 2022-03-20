import path from "path";

/* include own files */
import getPackageVersion from "./pkg.js";
import ensureDir from "./ensure-dir.js";
import exportToFile from "./export-compressed-file.js";

const rootDir = path.join(__dirname, '../..')
const DEST_DIR = path.join(__dirname, '../..', 'dist-src')

async function main() {
    /* verify output directory */
    console.log('Verifying destination [' + DEST_DIR + '] directory...')
    await ensureDir(DEST_DIR)

    /* collect version of package */
    const versionString = getPackageVersion()
    const zipFilename = `mishusoft-${versionString}-src.zip`
    console.log(`Writing to ${zipFilename}...`)

    await exportToFile(DEST_DIR, zipFilename, function (archive) {
        const dirs = [
            'Sources',
            'Framework'
        ]
        for (const dir of dirs) {
            archive.directory(path.join(rootDir, dir), dir)
        }

        const files = [
            'package.json',
            'package-lock.json',
            'webpack.config.js',
            'tsconfig.json'
        ]
        for (const file of files) {
            archive.file(path.join(rootDir, file), {name: file})
        }
    })
}

main()
    .then(() => {
        console.log('Done.')
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })
