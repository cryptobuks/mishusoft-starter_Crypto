const path = require("path");
const fs = require("fs").promises;

/*(async function (path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})(path.resolve(__dirname, "./tmp/hello"));

const fs = require("fs").promises;*/

(async function (from, to) {
  try {
    await fs.rename(from, to);
    const stats = await fs.stat(to);
    console.log(`stats: ${JSON.stringify(stats)}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})(
  path.resolve(__dirname, "./tmp/hello"),
  path.resolve(__dirname, "./tmp/world")
);
