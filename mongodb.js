// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "antoan";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    // console.log('Connected correctly!');
    const db = client.db(databaseName);

    db.collection("feedbacks").insertOne(
      {
        comment: 'Oke test test'
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert feedback");
        }
        console.log(result);
      }
    );
  }
);
