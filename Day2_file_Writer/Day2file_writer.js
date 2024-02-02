//Problem 2: File Writer
//Problem Statement:** Create a function`writeToFile(filePath, content)` that takes the path to a file and userinput content as input. The function should write the //content to thespecified file using the `fs` module.

const fs = require("fs");

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
    } else {
      console.log(`Data written to ${filePath}`);
    }
  });
}

writeToFile("./message.txt", "This message is being written using writeFile");
writeToFile(
  "../day01_readFile/message.txt",
  "Content in a non-existent folder."
);