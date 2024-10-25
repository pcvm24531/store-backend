const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dbMongo = require('./src/config/mongodb');

dbMongo.connect();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/photos', express.static(path.join(__dirname,'photos')));//Exponemos la carpeta photos al cliente

require('./src/routes')(app);

app.listen( port, ()=>{ console.log(`App running localhost:${port}`) });