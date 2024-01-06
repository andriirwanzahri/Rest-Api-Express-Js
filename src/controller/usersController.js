// MEMBUAT CONTROLLER GET ALL USERS

// FILE DUMMY
const data = {
    id: '1',
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