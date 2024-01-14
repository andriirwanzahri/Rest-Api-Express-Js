

// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const dbpool = mysql.createPool({
  host: "localhost",
    user: "root",
  password: "",
  database: "express-mysql"
});

module.exports = dbpool.promise();
// module.exports = {dbpool.promise}