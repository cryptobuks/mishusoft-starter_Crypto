import path from "path";

/* include own files */
import getPackageVersion from "./pkg";
import ensureDir from "./ensure-dir";
import exportToFile from "./export-compressed-file";

const date = new Date();
const months = date.getMonth() < 10 ? "0" + (+date.getMonth() + 1) : +date.getMonth() + 1;
const days = date.getDate() < 10 ? "0" + +date.getDate() : date.getDate();
const hours = date.getHours() < 10 ? "0" + +date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? "0" + +date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? "0" + +date.getSeconds() : date.getSeconds();
const backupTime = `${date.getFullYear()} - ${months} - ${days} - ${hours} - ${minutes} - ${seconds}`;

const rootDir = path.join(__dirname, "../..");
const DEST_DIR = "/home/abir/ts-app-backup";

async function main() {
    /* verify output directory */
    console.log("Verifying destination [" + DEST_DIR + "] directory...");
    await ensureDir(DEST_DIR);

    const versionString = getPackageVersion();
    const backupCompressedFilename = `mishusoft - backup - ${versionString}@${backupTime}.zip`;
    console.log(`Creating to ${backupCompressedFilename}...`);

    await exportToFile(DEST_DIR, backupCompressedFilename, function (archive) {
        const dirs = ["Sources", "Storages"];
        for (const dir of dirs) {
            archive.directory(path.join(rootDir, dir), dir);
        }

        const files = ["budget.json", "package.json", "package-lock.json", "postcss.config.js", "tsconfig.json", "webpack.config.js"];
        for (const file of files) {
            archive.file(path.join(rootDir, file), {name: file});
        }
    });
}

main()
    .then(() => {
        console.log("Done.");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
