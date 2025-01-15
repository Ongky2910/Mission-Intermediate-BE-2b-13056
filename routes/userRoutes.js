// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpoint untuk mendapatkan semua user
router.get('/users', userController.getAllUsers);

// Endpoint untuk mendapatkan satu user berdasarkan ID
router.get('/users/:id', userController.getOneUser);

// Endpoint untuk membuat user baru
router.post('/users', userController.createUser);

// Endpoint untuk mengupdate user
router.put("/users/:id", userController.updateUser);

router.patch("/users/:id", userController.updateUser);

// Endpoint untuk menghapus user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
