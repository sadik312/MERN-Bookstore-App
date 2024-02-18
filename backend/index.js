const express = require('express');
const mongoose = require('mongoose');
const { Book } = require('./models/bookModel.js');
const booksRoute = require('./routes/booksRoute.js').router;

require('dotenv').config();

const DbUrl = process.env.mongoDBURL;
const Port = process.env.PORT;

const app = express();

// Middleware to parse request.body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow all origins with default of cors(*)
// app.use(cors());
// Option 2: Allow custom origins
/*
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowsHeaders: ['Content-Type'],
    })
);
*/

app.get('/',  (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
});

// Mount booksRoute router to specific base path /books
app.use('/books', booksRoute);

// Connect to DB
mongoose
    .connect(DbUrl)
    .then(() => {
        console.log("App connected to database");
        // Server to only run if db connection is successful
        app.listen(Port, () => {
            console.log(`App is listening on port: ${Port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });