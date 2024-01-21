const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DB_CONNECTION_STRING;

// Connect to mongodb
mongoose.connect(dbConnectionString)

const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));
db.once('open', () => {
    console.log("Connected to MongoDB");
});

// Define mongoose model
const Task = mongoose.model('Task', {
    title: String,
    description: String,
});

// Express route to get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Express route to add new task
app.post('/tasks', async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTask = new Task({ title, description });
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

