import express from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

require('dotenv').config();
console.log(process.env);

const DbUrl = process.env.mongoDBURL;
const Port = process.env.PORT;
const app = express();

console.log(DbUrl);
console.log(Port);

app.get('/',  (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
});

// Route to save a new book
app.post('/books', async (request, response) => {
    try{
        // Validation for input
        if(
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