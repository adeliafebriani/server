const http = require('http');
const fs = require ('fs');

fs.readFile('./donaldTrump.md', 'utf8', (err, data) => {
    if (err) return console.log(err); // will show the error, and easy for you to handle the error
    console.log(data);
}); 
console.log('I am on the main thread');

// const {continueToDoWork} = require('./first');
// continueToDoWork(i => {
//     while (i <= 10) {
//         console.log('tik tok');
//         i++;
//     }
// });
// console.log('Stop Talking...');

// // import module, based on their position: lexical scope
// require('./example'); 
// require('./first');

// const example = require('./example');
// console.log(example);
// example.print(10);
// example.echo('This is 10 number :)');

// // import module, based on their name
// const { print, echo } = require('./example');
// print(10);
// echo('This is 10 number :)');

// request from server to client
const server = http.createServer((req, res) => {
    // console.log(req); to see the server connection 
    // we can get the url, method, status, ip
    const path = req.url;
    const method = req.method;

    // if (path === '/' && method === 'GET') {
    //     res.writeHead(200);
    //     res.writeHead('content-type', 'text/html');
    //     res.end('<h1>Hello User</h1>');
    // }

    console.log(res);
    res.write('hello');
    res.end();
}); // always listen if there is request

// PASSING PORT
const PORT = 4000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// node.js: common module and ECMAScript module
// export const nameOfVariable = "value";
// import {nameOfVariable} from './first';
// export default nameOfVariable;
// export keyword to call the function outside this file
