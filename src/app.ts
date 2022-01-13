// app.js

import express, { Application } from "express";
// const config = require('./config/index');
import connectDB from './config/db';
import cors from 'cors';

// routes
const books = require('./routes/api/books');

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
//connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.WEB_PORT || 8082;

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/books', (req, res) => res.send(`Hello books!=${port}`));

// use Routes
app.use('/api/books', books);


console.log( 'Port number', port )
app.listen(port, () => console.log(`Server running on port ${port}`));
