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

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the MySQL database pool!');
    connection.release();
  } catch (err) {
    console.error('Error connecting to the database pool', err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log('Server is up on port ' + port);
  });
})();
