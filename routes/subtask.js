// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const subTaskController = require('../controllers/subtaskController');


// create new task
router.post('/create', subTaskController.create)

// read a task
router.post('/read', subTaskController.read)

// update a task
router.post('/update', subTaskController.update)

// delete a task
router.post('/delete', subTaskController.delete)


// export routes
module.exports = router;