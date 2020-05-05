const mysql = require('mysql2');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'flashcard_db',
  }).promise();
}

module.exports = connection;

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'flashcard_db',
// }).promise();

// module.exports = connection;
