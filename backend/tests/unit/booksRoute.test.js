const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { Book } = require('../models/bookModel.js');

// Import your router
const router = require('../routes/bookRoutes.js');

const app = express();
app.use(express.json());
app.use('/', router);

// Connect to a test database before running tests
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Close the database connection after tests
afterAll(async () => {
    await mongoose.connection.close();
});

// Test saving a new book
describe('POST /books', () => {
    it('should save a new book', async () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            publishYear: 2024,
        };

        const response = await request(app)
            .post('/books')
            .send(bookData)
            .expect(201);

        expect(response.body).toHaveProperty('_id');
        expect(response.body.title).toBe(bookData.title);
        expect(response.body.author).toBe(bookData.author);
        expect(response.body.publishYear).toBe(bookData.publishYear);

        // Verify the book is saved in the database
        const savedBook = await Book.findOne({ _id: response.body._id });
        expect(savedBook).toBeTruthy();
        expect(savedBook.title).toBe(bookData.title);
        expect(savedBook.author).toBe(bookData.author);
        expect(savedBook.publishYear).toBe(bookData.publishYear);
    });

    it('should return 400 if required fields are missing', async () => {
        const response = await request(app)
            .post('/books')
            .send({})
            .expect(400);

        expect(response.body).toHaveProperty('message', 'Send all required fields: title, author, publishYear');
    });
});
