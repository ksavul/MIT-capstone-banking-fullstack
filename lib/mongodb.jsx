import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

// Ensure that 'MONGODB_URI' environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
// const uri = 'localhost/';
const options = {};

let client = null;
let clientPromise;

try {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log('connection established');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

export default clientPromise;
