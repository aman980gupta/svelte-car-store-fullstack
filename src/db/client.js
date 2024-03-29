import { MongoClient, ServerApiVersion } from 'mongodb';
import {MONGODB_URI} from "$env/static/private"
const uri = MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//"mongodb+srv://cofferUser:admin@cluster0.s3wwj.mongodb.net/?retryWrites=true&w=majority"
export default client;