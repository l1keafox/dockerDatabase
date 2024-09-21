const mysql = require('mysql2/promise');
require('dotenv').config({path:__dirname+'/.env'})
// Create the connection pool
const pool = mysql.createPool({
  host: process.env.DOCKER_URL, // If running from a different machine, replace with your Raspberry Pi's IP address
  user: 'fox',
  password: 'raymond',
  database: 'sql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  try {
    // Test the connection by querying the database
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log('Connected! The solution is:', rows[0].solution);
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

testConnection();