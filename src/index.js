const express = require('express');
const usersRoutes = require('./routes/users');


const app = express();



const middlewareLogRequest = require('./middleware/logs');
const corsRestApi = require('./middleware/cors');

// Middleware untuk menangani CORS
app.use(corsRestApi);

// menambahkan middleware pada rest api
app.use(middlewareLogRequest)
// mengizinkan middleware untuk json
app.use(express.json());
require('dotenv').config()
const PORT = process.env.PORT|| 5000;

// memanggil pengunaan routes
app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        nama: "andri Irwan Zahri",
        email: "andri.zahri@gmail.com"
    }); 
})



app.listen(PORT, () => {
    console.log(`server Berhasil dibuka di PORT http://localhost:${PORT}`);
})