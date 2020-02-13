const router = require('express').Router();
const mongoose = require('mongoose');

const { AuthController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

module.exports = router;
