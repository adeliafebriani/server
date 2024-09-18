const fs = require('fs');
const path = require('path');

// Define the name of the new folder and file
const folderName = 'newFolder';
const fileName = 'newFile.txt';

// Get the current directory
const currentDir = __dirname;

// Read the current directory
fs.readdir(currentDir, { encoding: 'utf8' }, (error, files) => {
    console.log('Current directory contents:', files);

    // Create a new folder
    const newFolderPath = path.join(currentDir, folderName);
    fs.mkdir(newFolderPath, { recursive: true }, (error) => {
        console.log(`Folder '${folderName}' created successfully!`);

        // Create a new file in the new folder
        const filePath = path.join(newFolderPath, fileName);
        fs.writeFile(filePath, 'This is the content of the new file.', (error) => {
            console.log(`File '${fileName}' created successfully in '${folderName}'!`);
        });
    });
});
