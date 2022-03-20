import path from "path";
import fs from "fs";

export default function getPackageVersion() {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "../..", "package.json"), "utf8"));
    const versionString = packageJson.version;
    if (!versionString) {
        throw new Error("Could not find version in package.json");
    }

    return versionString;
};
