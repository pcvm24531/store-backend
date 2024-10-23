const express = require('express');
const app = express();
const cors = require('cors');
const dbMongo = require('./src/config/mongodb');

dbMongo.connect();

const port = process.env.PORT || 3000;

app.use(cors());

require('./src/routes')(app);

app.listen( port, ()=>{ console.log(`App running localhost:${port}`) });