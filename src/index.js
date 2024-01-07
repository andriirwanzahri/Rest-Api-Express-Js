const express = require('express');
const usersRoutes = require('./routes/users');


const app = express();



const middlewareLogRequest = require('./middleware/logs');

// menambahkan middleware pada rest api
require('dotenv').config()
const PORT = process.env.PORT|| 5000;
app.use(middlewareLogRequest)
// mengizinkan middleware untuk json
app.use(express.json());

// memanggil pengunaan routes
app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        nama: "andri Irwan Zahri",
        email: "andri.zahri@gmail.com"
    }); 
})



app.listen(PORT, () => {
    console.log(`server Berhasil di buat dengan port ${PORT}`);
})