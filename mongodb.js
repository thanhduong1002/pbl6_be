// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'PBL6'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    // console.log('Connected correctly!');
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Hieu',
        age: 23
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user');
        }
        console.log(result);
    })
})  