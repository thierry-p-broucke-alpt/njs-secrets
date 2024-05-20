const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'help',
  password: 'helpM3Pl3as!!!',
  database: 'helpinformation'
});

// Query to get the tables information
const query = 'select * from information';

// Execute the query
pool.query(query, (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  console.log('Tables in the "helpinformation" database:');
  results.forEach(row => {
        console.log(row);
  });

  // Close the connection pool when done
  pool.end();
});
