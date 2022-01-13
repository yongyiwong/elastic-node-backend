'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = __importDefault(require("process"));
dotenv_1.default.config();
console.log('MongoURI', process_1.default.env.MONGODB_URI);
const config = {
    /**
     * mongoDB atlas connection uri
     */
    DATABASEURL: process_1.default.env.MONGODB_URI,
    APIPORT: process_1.default.env.API_PORT,
    WEBPORT: process_1.default.env.WEB_PORT,
    APIURL: process_1.default.env.API_URL,
    WEBURL: process_1.default.env.WEB_URL
};
exports.default = config;
//# sourceMappingURL=index.js.map