const dbpool = require('../config/database');
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM userss';
    return dbpool.execute(SQLQuery);
}

module.exports = { getAllUsers };