
//import { request } from "supertest";
//import app from '../../index';
//import mongoose from "mongoose";


const request = require('supertest');
const app = require('../../config.js'); 
const mongoose = require('mongoose');


// Import PORT, DbURL from config.js
const { PORT, DbURL } = require('../../config.js');

describe('Database Connection Test', () => {
    let server;

    beforeAll(async () => {
        // Connect to the database before running tests
        await mongoose.connect(DbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        server = app.listen(PORT);
    });

    afterAll(async () => {
        // Close the server and disconnect from the database after tests are done
        await server.close();
        await mongoose.disconnect();
    });

    it('should connect to the database successfully', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(234);
    });
});

module.exports = {}; // Export an empty object to satisfy CommonJS syntax
