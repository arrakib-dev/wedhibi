// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const adminController = require('../controllers/adminController');

//define routes
// create new admin
router.post('/createNew', adminController.createNew)


// export routes
module.exports = router;