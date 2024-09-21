const mysql = require('mysql2/promise');

// Create the connection pool
const pool = mysql.createPool({
  host: 'raspberrypi.local', // If running from a different machine, replace with your Raspberry Pi's IP address
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
    console.log('MARIADB Connected! The solution is:', rows[0].solution);
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

testConnection();

const db = require("./connection");

db.once("open", () => {
  console.log("Mongo DB connection is opened once")
});
