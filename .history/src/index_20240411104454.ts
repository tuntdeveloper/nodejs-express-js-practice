import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
improt router from '/router/o'
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

const MONGO_URL = "mongodb+srv://tuntdeveloper:VkbwXSU3VWsWL2fQ@cluster0.nvii10b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', ( error : Error) => {console.log(error)})

app.use('/', router());