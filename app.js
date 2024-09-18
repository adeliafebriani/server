const express = require('express'); // express help us to auto put the response in the browser
const dotenv = require('dotenv');
const path = require('node:path');
const { readFile, writeFile } = require('node:fs');

// load the environment variables
// result from port.. to port 5000 in .env
dotenv.config();

// path: http://localhost:3000/home
// http - protocol localhost:3000 - domain localhost:3000 - 
// ... port 3000 home - path 1 path params pageNumber (url) - query params search (url)

// http methods - GET, OPTIONS, POST, PUT, PATCH, DELETE, HEAD, CONNECT, TRACE
// http codes - 200 (everything is ok), 201 (created), 307 (redirect), 
// 400 (bad request), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error)

const app = express();

// METHOD 1-send message
app.get('/', (req, res) => {
    res.send('<h1>Hello User</h1>');
});

// METHOD-redirect to another page
app.get('/redirect', (req, res) => {
    res.redirect(301, '/home');
});

// METHOD 2-sendFile
app.get('/home', (req, res) => {
    const pathToFile = path.join(__dirname, 'public', 'index.html');
	res.sendFile(pathToFile);
}); // to check the result, go search localhost:5500/home and click console network>doc>headers

// METHOD 3-download
// app.get('/download', (req, res) => {
//     const pathToFile = path.join(__dirname, 'donaldTrump.md');
//     res.download(pathToFile, 'DonaldTrump Biography.md'); // put the name of the book after they downloaded
// });
app.get('/download/:name', (req, res) => {
	const { name } = req.params;
	// ask the server to give us message if there is no name
	if (name !== 'donaldTrump,' || name !== 'cheese') {
		res.status(400).json({
			message: 'invalid book name',
			succeeded: false,
		});
		return;
	}	
	console.log(name); // as long as the name of the file is in the server, it can dw
	const pathToFile = path.join(__dirname, name + '.md');
	res.download(pathToFile, name + '.md');
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// // Global object=process
// console.log(process);
// console.log(process.env); 
// console.log(process.argv);




