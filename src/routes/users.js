// FILE UNTUK IMPORT DATA 
const express = require('express');
const UserController = require('../controller/usersController');
const router = express.Router();

// MEMBUAT ROUTER DATA KE CONTROLLERS
router.post('/', UserController.createNewUser);
router.get('/', UserController.getAllUsers);


// DI EXPORT DATANYA KE DALAM INDEX.JS
module.exports = router;