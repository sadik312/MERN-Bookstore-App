// Using express router to refactor Nodejs
// making routes in separate folder for scalability - i.e having more than one model that needs its own routes

const express = require('express');
const { Book } = require('./models/bookModel.js');


const router = express.Router();

// Route to save a new book
router.post('/books', async (request, response) => {
    try {
        // Validation for input
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        // Var for newBook using request.body for required fields
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        // save result to newBook var
        const book = await Book.create(newBook);

        // return status 201 and return book to client
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all books from database
router.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            // create object for better structure for data in db
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get one book from database by id
router.get('/books/:id', async (request, response) => {
    try {
        // destructure
        const { id } = request.params;

        const book = await Book.findById(id);
        // return book to client
        return response.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a book
router.put('/books/:id', async (request, response) => {
    try {
        // validation
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Fill in all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        // check result
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// delete a book from db
router.delete('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            // if result is false
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log(error.message);
        return response(500).send({ message: error.message });
    }
})

module.exports = {
    router
};