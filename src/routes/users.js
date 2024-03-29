// FILE UNTUK IMPORT DATA 
const express = require('express');
const UserController = require('../controller/usersController');
const router = express.Router();

// MEMBUAT ROUTER DATA KE CONTROLLERS

//ROUTE MENAMBAHKAN DATA
router.post('/', UserController.createNewUser);

// ROURE MENAMPILAKAN DATA
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUsers);

// UPDATE - PATCH
router.patch('/:id', UserController.updateUSer);

// delete data
router.delete('/:id', UserController.deleteUser);


// DI EXPORT DATANYA KE DALAM INDEX.JS
module.exports = router;