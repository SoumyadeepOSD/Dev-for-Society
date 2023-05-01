const http = require('http');

const hostname = 'localhost';

const port = 3000;

const {MongoClient, ServerApiVersion} = require('mongodb');

var databasesList = [];

var collectionList = [];

async function main(){
    
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    */
    const password = encodeURIComponent("Bhowmick@69"); 
    const uri = `mongodb+srv://SoumyadeepOSD:${password}@cluster0.1i9k0fc.mongodb.net/?retryWrites=true&w=majority`;


    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
        await findOneListingByName(client, "Ribeira Charming Duplex");
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db=>console.log(`Name ${db.name}`));      
};



async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });
    collectionList = result;
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(JSON.stringify(collectionList));
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
            });
            
            server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
            });
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
