import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI
if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const dbName = 'ecommerce'
export const db = client.db(dbName)

