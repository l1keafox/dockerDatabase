const { Pool } = require('pg');
require('dotenv').config({ path: __dirname + '/.env' });

// Create the connection pool
const pool = new Pool({
  host: "raspberrypi.local", // If running from a different machine, replace with your Raspberry Pi's IP address
  user: 'fox',
  password: 'raymond',
  database: 'my_database',
  port: 5432, // Default port for PostgreSQL
  max: 10, // Max number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 200000, // Return an error after 2 seconds if connection could not be established
});

async function testConnection() {
  try {
    // Test the connection by querying the database
    const res = await pool.query('SELECT 1 + 1 AS solution');
    console.log('Connected! The solution is:', res.rows[0].solution);
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}
//pool.connect();
testConnection();