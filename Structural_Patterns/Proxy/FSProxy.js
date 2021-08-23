class FSProxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read Markdown files."));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }

  // Proxies must implement the full interface of the target object,
  // but for this simple example this is enough.
}

module.exports = FSProxy;
