const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');

module.exports = directory => {
  fs.mkdirSync(directory);
  fs.copy(path.resolve(__dirname, '../project'), directory, err => {
    if (err) return console.error(err)
    process.chdir(directory);
    const child = spawn('yarn', undefined, { stdio: 'inherit' });
    spawn('git', ['init'], { stdio: 'inherit' });
  });
} 
