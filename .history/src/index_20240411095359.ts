import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen((8080), () => {
    console.log('Server is running on http://localhost:8080/');
});

const uri = "mongodb+srv://tuntdeveloper:VkbwXSU3VWsWL2fQ@cluster0.nvii10b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);