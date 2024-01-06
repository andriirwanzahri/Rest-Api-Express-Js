// MEMBUAT CONTROLLER GET ALL USERS
const getAllUsers = (req, res) => {
    res.json({
        message: 'Get AllUsers Success'
    })
}

// MEMBUAT CONTROLLER POST NEW USER
const createNewUser = (req, res) => {
    res.json({
        message: 'Create data success'
    })
}

// INI DATA CONTROLLERS DI EXPORT TERLEBIH DAHULU
module.exports = {
    getAllUsers,
    createNewUser
}