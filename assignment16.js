// ASSIGNMENT 
// get method-get book on the server (only retrieve data)
// slash book
// use readFile
// list of book created on the server, there a cheese.md, donaldTrump.md, eventLoop.md

// post method - causing a change in state
// slash book
// should be able to create book (.md) on the server
// write the book and save the book on the server
// check what method should use to save the book? appendFile or writeFile? 
// this http get and post method is to differentiate between creating and getting

const fs = require('fs');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

// GET method to retrieve the list of books
app.get('/bookList', (req, res) => {
    fs.readdir('./', (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        
        const bookFiles = files.filter(file => file.endsWith('.md'));
        res.json(bookFiles);
    });
});

// POST method to create a new book
app.post('/createBook', (req, res) => {
    const { bookName } = req.body;

    if (!bookName) {
        return res.status(400).send('Book name is required');
    }

    const filePath = `./${bookName}.md`;
 
    if (fs.existsSync(filePath)) {
        return res.status(400).send('Book already exists');
    }

    fs.writeFile(filePath, `This is the content of the ${bookName} book.`, 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error creating the book');
        }
        res.send('Book created successfully');
    });
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
