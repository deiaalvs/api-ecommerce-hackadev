const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw ` O erro é no client query ${err}`;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const express = require('express');
const router = express.Router();

router.get('/purchaseStatus', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM PurchaseStatus');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/purchaseStatus', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send(`O erro é no pool get ${err}`);
  }
})

module.exports = router;