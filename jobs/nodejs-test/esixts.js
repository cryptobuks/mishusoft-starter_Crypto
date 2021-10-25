const { F_OK, access, existsSync } = require("fs");
const path = require("path");

if (existsSync(path.resolve(__dirname, "./tmp/world")))
  console.log("The path exists.");

access("./file.txt", F_OK, (err) => {
  if (err) {
    console.error(err);
  }

  //file exists
  console.log("./file.txt exists.");
});
