const path = require("path");
const fs = require("fs").promises;

(async function (path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})(path.resolve(__dirname, "./tmp/hello"));
