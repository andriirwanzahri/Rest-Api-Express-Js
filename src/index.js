const express = require('express');
const usersRoutes = require('./routes/users');


const app = express();



const middlewareLogRequest = require('./middleware/logs');

// Middleware untuk menangani CORS
app.use((req, res, next) => {
    //menambahkan * pada header origin untuk memberikan semua akses kedalam rest api
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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