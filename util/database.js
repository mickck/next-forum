import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;
const option = { useNewUrlParser: true };
let connectDB;

//  prevent to reconnect to the same database
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, option).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, option).connect();
}

export { connectDB };
