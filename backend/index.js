const express = require('express');
const mongoose = require('mongoose');
const { Book } = require('./models/bookModel.js');

require('dotenv').config();

const DbUrl = process.env.mongoDBURL;
const Port = process.env.PORT;
const app = express();

// Middleware to parse request.body
app.use(express.json());

app.get('/',  (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
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