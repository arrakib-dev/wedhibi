// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const companyController = require('../controllers/companyController');

//define routes
// create new admin
router.post('/createNew', companyController.createNew)
// create new admin
router.post('/login', companyController.login)


// export routes
module.exports = router;