const express = require('express');
const cors = require('cors');
const { config } = require('./config');

const db = require('./db');

const router = require('./network/routes');

db(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));router(app);

const whitelist = ['http://localhost:8080', 'http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.use(router);

app.use('/app', express.static('src'));

app.listen(4000);
console.log('La aplicación está escuchando en http://localhost:4000');