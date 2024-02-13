const mongoose = require('mongoose');

// Create book schema variable
const bookSchema = mongoose.Schema(
    {
        // objects
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

// Create a book model
const Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book: Book
};