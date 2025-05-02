import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://jaydenwoppereryk:pIfQdjBWg1Ga8BKM@octra-bot.4o9re4k.mongodb.net/?retryWrites=true&w=majority&appName=Octra-Bot';
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Typdefinition für global erweitern
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db();
}
