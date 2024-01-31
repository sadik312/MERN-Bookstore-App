const Task = require('./task.model');

const sampleTasks = [
    { title: 'Task 1', description: 'Description for Task 1' },
    { title: 'Task 2', description: 'Description for Task 2' },
    { title: 'Task 3', description: 'Description for Task 3' },
];

// inser sample tasks into db
Task.insertMany(sampleTasks)
    .then(tasks => {
        console.log("Sample tasks inserted successfully: ", tasks);
    })
    .catch(err => {
        console.error("Error inserting sample tasks: ", err);
    });