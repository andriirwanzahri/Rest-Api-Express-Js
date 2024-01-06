const express = require('express');
const usersRoutes = require('./routes/users');

const app = express();

// app.use("/user", (req, res) => {
//     res.send("ini adalah percobaan res api");
// })

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