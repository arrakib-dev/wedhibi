// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const taskController = require('../controllers/taskController');


// create new task
router.post('/create', taskController.create)

// read a task
router.post('/read', taskController.read)

// update a task
router.post('/update', taskController.update)

// delete a task
router.post('/delete', taskController.delete)


// export routes
module.exports = router;