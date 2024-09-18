const fs = require('node:fs');

function continueToDoWork(callback) {
    let i = 0;
    // while (i < 10) {
    //     console.log('tik tok');

    //     i++;
    // }

    callback(i);
}

// new Promise((resolve, reject) => {
//     resolve('done');
// }).then(data => {
//     console.log(data);
// });

setImmediate(() => {
    console.log('this is immediate');
});

setTimeout(() => {
    console.log('this is timeout');
}, 0); // 0ms

setInterval(() => {
    console.log('this is interval');
}, 2);

fs.open('newfile.js', 'w+', (error, fd) => { // w+ = write and read
    
    //do some work, close callback function
    fs.close(fd);
});

process.nextTick(() => {
	console.log('process next tick');
})


module.exports = { continueToDoWork };