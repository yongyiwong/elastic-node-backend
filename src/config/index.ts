'use strict';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

console.log( 'MongoURI', process.env.MONGODB_URI );
const config = {
  /**
   * mongoDB atlas connection uri
   */
  DATABASEURL: process.env.MONGODB_URI,
  APIPORT: process.env.API_PORT,
  WEBPORT: process.env.WEB_PORT,
  APIURL:process.env.API_URL,
  WEBURL:process.env.WEB_URL
};

export default config;