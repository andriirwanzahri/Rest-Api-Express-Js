const dbpool = require('../config/database');
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbpool.execute(SQLQuery);
}

const getUsers = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id=${id}`;
    return dbpool.execute(SQLQuery);
}

const createNewUser = (body) => {
    // query nya jika tidak ada deklarasi colum di awal maka harus menambahkan id sesuai urutan tetapi jika columnya di deklarasi maka tidak perlu menambahkan id nya
    const SQLQuery = `INSERT INTO users (nama,email,address) VALUES ('${body.nama}','${body.email}','${body.address}')`;
    // mengembalikan hasil query
    return dbpool.execute(SQLQuery);
}

const updateUser = (body,id) => {
    const SQLQuery = `UPDATE users SET nama='${body.nama}',email='${body.email}',address='${body.address}' WHERE id=${id}`;
    // console.log(SQLQuery);
    return dbpool.execute(SQLQuery);
}



module.exports = {
    getAllUsers,
    getUsers,
    updateUser,
    createNewUser
};