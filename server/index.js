const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { pool } = require('./util/database');
const routes = require('./routes');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

pool.getConnection(function (err, connection) {
  if (err) throw err;
  console.log('Connected to the MySQL database pool!');
  connection.release();
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
