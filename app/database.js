const { Client } = require('pg');

const client = new Client(process.env.PGDATABASE);

client.connect();

module.exports = client;
