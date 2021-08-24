const { writeFile, unlink } = require("fs");
const path = require("path");

class ExitCommand {
  get name() {
    return "exit... bye!";
  }

  execute() {
    process.exit(0);
  }
}

class CreateCommand {
  constructor(fileName, text) {
    this.fileName = fileName;
    this.body = text;
    this.fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `Create ${this.fileName}`;
  }

  execute() {
    writeFile(this.fullPath, this.body, f => f);
  }

  undo() {
    unlink(this.fullPath, f => f);
  }
}

module.exports = { ExitCommand, CreateCommand };
