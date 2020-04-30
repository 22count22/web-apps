// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

const filePath = __dirname + '/' + process.argv[2];
log(1, filePath);

const newContent = process.argv[3];
log(2, newContent);

const callBack = (err) => {
  if (err) {
    console.error(err);
  } else {
    log(4, err);
  };
};

fs.writeFile(filePath, newContent, callBack);

log(3, '...');
