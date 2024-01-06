const express = require('express');
const usersRoutes = require('./routes/users');

const app = express();

const middlewareLogRequest = require('./middleware/logs');

// menambahkan middleware pada rest api
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

app.listen(4000, () => {
    console.log('server Berhasil di buat dengan port 4000');
})