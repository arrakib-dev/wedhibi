// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const memberController = require('../controllers/memberController');

//define routes
// create new admin
router.post('/createNew', memberController.createNew)
// create new admin
router.post('/login', memberController.login)
// delete member
router.post('/delete', memberController.delete)
// delete member
router.post('/changePassword', memberController.changePassword)
// delete member
router.post('/changeInfo', memberController.changeInfo)

// export routes
module.exports = router;