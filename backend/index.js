import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
const app = express();

app.get('/',  (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
});


// Connect to DB
mongoose
    .connect(mongoDBURL)
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