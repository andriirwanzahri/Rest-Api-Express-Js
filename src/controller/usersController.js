const UsersModel = require('../models/userModel');


// MEMBUAT CONTROLLER GET ALL USERS


const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: 'Get AllUsers Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

// MEMBUAT CONTROLLER POST NEW USER
const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create data success',
        data: req.body
    })
}

// MEMBUAT CONTROLLLER UPDATE DATA
const updateUSer = (req, res) => {
    const { id } = req.params;
    console.log("idUser:",id);
    res.json({
        message: "update data success",
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({

        message: "Delete User Seccess",
        data: {
            id: id,
            nama: "andri irwan zahri",
            email: "andriirwanzahri@gmail.com"
        }
    })
}

// INI DATA CONTROLLERS DI EXPORT TERLEBIH DAHULU
module.exports = {
    getAllUsers,
    createNewUser,
    updateUSer,
    deleteUser
}