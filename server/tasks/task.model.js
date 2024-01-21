const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    title: String,
    description: String,
});

module.exports = Task;