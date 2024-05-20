const mysql = require('mysql');

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
