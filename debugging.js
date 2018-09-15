// examples for deubgging node.js applications

const user = {
    name: 'Ido Lev',
    uid: 'X12'
};

user.department = 38;
user.admin = true;

console.log(user);

// debugging with node builtin inspect
/************************************/
// now run this in debug mode: 'node inspect debugging.js'
// type: 'list(5)' to run next 5 lines
// type: 'n' to go to the next statement
// type: 'c' to continue running the rest of application
// type: 'repl' to enter current application state and ctrl+c to exit
// in repl mode after line 9, you can type 'user.department = 40' then 'console.log(user);'
// output: { name: 'Ido Lev', uid: 'X12', department: 40 }


// pause debugger at this line
debugger;

user.admin = false;
console.log(user);

// debugging with chrome
/**********************/
// run : 'node --inspect-brk debugging.js' or 'nodemon --inspect-brk debugging.js'
// now open chrome on 'chrome://inspect' and click 'Open dedicated DevTools for Node'
// you can now debug your application under 'sources' tab
// on the window menu, you can 'show console drawer'


// debugging with Visual Studio Code 1.10+
/****************************************/
// in the Debug panel, click the settings icon to open .vscode/launch.json. 
// Select "Node.js" for initial setup.
// now configure the main file: "program": "${workspaceFolder}/debugging.js"
// select 'DEBUG CONSOLE' tab in the terminal on the bottom