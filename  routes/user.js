// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const userController = require('../controllers/userController');

//define routes
// create new admin
router.post('/createNew', userController.createNew)
// create new admin
router.post('/login', userController.login)


// export routes
module.exports = router;