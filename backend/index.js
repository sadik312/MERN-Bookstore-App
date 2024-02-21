import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import { PORT, DbURL } from './config.js';

const app = express();

// Middleware to parse request.body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
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

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
});

// Mount booksRoute router to specific base path /books
app.use('/books', booksRoute);

// Connect to DB
mongoose
    .connect(DbURL)
    .then(() => {
        console.log("App connected to database");
        // Server to only run if db connection is successful
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });