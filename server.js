const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const { config } = require('./config');

const db = require('./db');

const router = require('./network/routes');

db(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);

app.use('/app', express.static('src'));

app.listen(4000);
console.log('La aplicación está escuchando en http://localhost:4000');