const { error } = require('node:console');
const fs = require('node:fs');
const path = require('node:path');

// Checking file information
// run sycronously or not
// fs.statSync('modules.js');

// Combining Paths:  combines the current directory with the filename to create a path
const ph = path.join(__dirname + '/empty.js');

// Directory name
console.log(__dirname);
// File name
console.log(__filename);


// Getting File Stats Asynchronously
fs.stat(path, (error, stats) => {
    if (error) return console.log('error reading file stats: ', error);

    // to check file size is 0, it will show empty
    // console.log(stats);
    if (stats.size === 0) {
        console.log('file is empty');
    }
    
    if (stats.isFile()) {
        console.log('it is a file');
    }

    if (stats.isDirectory()) {
        console.log('it is a directory');
    }    
});

// Opening a File: for writing ('w' flag)
// If the file does not exist, it creates it.
fs.open('./cheese.md', 'w', (error, fd) => {
    if (error) return console.log('error opening file: ', error);

    // Reading from the Opened File
    // using fd here is misleading because it's opened in write mode only.
    fs.readFile(fd, 'utf8', (error, content) => {
        if (error) return console.log('error reading file: ', error);

        console.log(content);
    });

    // Writing to the File: writes the specified content to the file. 
    // If the file exists, it will overwrite it.
    // fs.writeFile(fd, 'this is new cheese', (error) => {
    //     if (error) return console.log('error writing file: ', error);
    // });

    // Appending to the File
    // If the file does not exist, it creates it.
    fs.appendFile(fd, '\nthis is another cheese \n', (error) => {
        if (error) return console.log('error writing file: ', error);
    });

    // Closing the File
    // If the file is not open, it will do nothing.
    // fs.close(fd, (error) => {
    //     if (error) return console.log('error closing file: ', error);
    // });
});

// File Modes
// r open the file open, read file, dont exist error
// r+ open the file read and write, dont exist error
// w open the file write file, dont exist create it
// w+ open the file read and write, dont exist create it
// a open the file append, dont exist create it
// a+ open the file read and append, dont exist create it

// pass file content
// fs.stat(__dirname);
// OS UNIX all are files

// Reading a Directory
fs.readdir(__dirname, {encoding: 'utf8'}, (error, files) => {
    console.log(files);
});