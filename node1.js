const fs = require('fs');

function readFiles() {
  fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFile('output.txt', data1 + data2, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Files processed successfully!');
      });
    });
  });
}

readFiles();
