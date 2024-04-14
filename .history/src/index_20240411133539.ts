import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import db from 'mysql';

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

const db = db.createConnection({
    host: "localhost",
    user: "root",
    password: "VkbwXSU3VWsWL2fQ",
    database: "john_schema"
});

app.use('/', router());