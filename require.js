// examples for requiring files and modoules

// install nodemon to escape manual restarting node process
// we install this as global for reuse on you machine
// run console --- >npm install -g nodemon
// then run --- >nodemon [myFile].js

// install lodash for your project as dependancy
// run --- >npm install --save lodash
// const lodash = require('lodash');

// instal eslint for your project as *development* dependancy
// run --- >npm install eslint --save-dev

// use node builtin module for operating system - os:
const os = require('os');
const user = os.userInfo();
console.log(`Hello ${user.username}!`);

// use node builtin module for file system - fs:
const fs = require('fs');
fs.writeFileSync('user.txt', `Hello ${user.username}!`);

// require you own file
const hello = require('./hello.js'); 