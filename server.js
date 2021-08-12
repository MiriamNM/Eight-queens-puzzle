const express = require('express');
const { config } = require('./config');

const db = require('./db');

const router = require('./network/routes');

db(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));router(app);

app.use(router);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');