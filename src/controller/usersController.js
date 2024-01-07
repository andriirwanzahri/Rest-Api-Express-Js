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

const getUsers = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    try {
        const [data] = await UsersModel.getUsers(id);
        res.json({
            message: 'Get Users id Success',
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
const createNewUser = async (req, res) => {
    const { body } = req;
   try {
       await UsersModel.createNewUser(body);
       res.json({
           message: "Create New User Success",
           data: {body}
       })
   } catch (error) {
       res.status(500).json({
           message: "Server Create Error",
           serverMessage: error,
    })
   }
}

// MEMBUAT CONTROLLLER UPDATE DATA
const updateUSer = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    // console.log tidak boleh diatas variable
    console.log("userId:",id);
    console.log(body);
    try {
        await UsersModel.updateUser(body,id);
        res.json({
           message: "update data success",
            data: {
                id: id,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
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
    getUsers,
    createNewUser,
    updateUSer,
    deleteUser
}