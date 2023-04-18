const MongoClient = require('mongodb').MongoClient;

// Set the connection string to your local MongoDB instance
const uri = "mongodb://127.0.0.0.1:27017/admin";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the local MongoDB instance
client.connect(err => {
  if (err) {
    console.error(err);
    return;
  }

  // Get a reference to the 'users' collection in the 'mydb' database
  const collection = client.db("admin").collection("market");

  // Query the collection and log the results
  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Found the following records");
    console.log(docs);

    // Close the connection to the MongoDB instance
    client.close();
  });
});
