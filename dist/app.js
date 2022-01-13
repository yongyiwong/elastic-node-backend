"use strict";
// app.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// routes
const books = require('./routes/api/books');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Connect Database
//connectDB();
// cors
app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Init Middleware
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const port = process.env.WEB_PORT || 8082;
app.get('/', (req, res) => res.send('Hello world!'));
app.get('/books', (req, res) => res.send(`Hello books!=${port}`));
// use Routes
app.use('/api/books', books);
console.log('Port number', port);
app.listen(port, () => console.log(`Server running on port ${port}`));
//# sourceMappingURL=app.js.map