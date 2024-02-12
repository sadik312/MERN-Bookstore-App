import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
const app = express();

app.get('/',  (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the MERN Stack app")
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});