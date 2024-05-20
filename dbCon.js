const mysql = require('mysql');

// Log the environment variables to check if they are being correctly retrieved
console.log('MYSQL_HOST:', process.env.MYSQL_HOST);
console.log('MYSQL_USER:', process.env.MYSQL_USER);
console.log('MYSQL_PASSWORD:', process.env.MYSQL_PASSWORD);
console.log('MYSQL_DATABASE:', process.env.MYSQL_DATABASE);

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Query to get the table data
const query = 'SELECT * FROM information';

// Execute the query
pool.query(query, (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  console.log('Data from the "information" table:');
  results.forEach(row => {
    console.log(row);
  });

  // Close the connection pool when done
  pool.end();
});
