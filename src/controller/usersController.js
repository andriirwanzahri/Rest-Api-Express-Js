// MEMBUAT CONTROLLER GET ALL USERS

// FILE DUMMY
const data = {
    nama: "andri irwan Zahri",
    email: "andri.zahri@gmail.com",
    address: "lhoksukon"
}

const getAllUsers = (req, res) => {
    res.json({
        message: 'Get AllUsers Success',
        data: data
    })
}

// MEMBUAT CONTROLLER POST NEW USER
const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create data success',
        data: req.body
    })
}

// INI DATA CONTROLLERS DI EXPORT TERLEBIH DAHULU
module.exports = {
    getAllUsers,
    createNewUser
}