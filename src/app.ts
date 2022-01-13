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

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/books', (req, res) => res.send('Hello books!'));

// use Routes
app.use('/api/books', books);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
