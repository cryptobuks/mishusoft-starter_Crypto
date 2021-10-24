const fs = require("fs").promises;
const path = require("path");

async function readDirectories(path) {
  const dir = await fs.opendir(path);
  for await (const dirent of dir) {
    const stats = await fs.stat(dirent.name);
    console.log(stats);
    console.log(dirent);
    console.log(dirent.name);
  }
}

async function readOptFile(path) {
  const stats = await fs.stat(path);
  // console.log(stats);
  const dir2 = await fs.open(path, "r");
  console.log(dir2);
}
// print("./").catch(console.error);
readDirectories(".").catch(console.error);

readOptFile(path.resolve(__dirname, "./tmp/world")).catch(console.error);
