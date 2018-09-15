// examples for requiring files and modoules

// nodemon
/********/
// install nodemon to escape manual restarting node process
// we install this as global for reuse on you machine
// run console 'npm install -g nodemon'
// then 'nodemon require.js'

// 3rd praty library
/******************/
// install lodash for your project as dependancy
// run 'npm install --save lodash' or 'npm i -S lodash'
// const lodash = require('lodash');

// lint
/******/
// instal eslint for your project as *development* dependancy
// run 'npm install eslint --save-dev' or 'npm i eslint -D'

// use node builtin module for operating system - os:
const os = require('os');
const user = os.userInfo();
console.log(`Hello ${user.username}!`);

// use node builtin module for file system - fs:
const fs = require('fs');
fs.writeFileSync('user.txt', `Hello ${user.username}!`);

// require you own file
const hello = require('./hello.js'); 

// require you own module
// const myModule = require('./require.js');

// example 1
// usage: myModule('my message');
module.exports = message => {
    console.log(`message is: ${message}`);
};

// example 2
// usage: myModule.message('my message');
module.exports.message = message => {
    console.log(`message is: ${message}`);
};

// example 3 + example 4 --- predefined functions
// usage: myModule.setMessage('my message');
// usage: myModule.printMessage();
let myMessage;
const setMessage = message => {
    myMessage = message;
};
const printMessage = () => {
    console.log(`message is: ${myMessage}`);
};

// example 3
module.exports = {
    setMessage: setMessage,
    printMessage: printMessage
};

// example 4
module.exports = {
    setMessage,
    printMessage
};