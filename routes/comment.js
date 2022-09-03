// import express
const express = require('express');

// get Router from express
const router = express.Router();

// load controllers
const commentController = require('../controllers/commentController');


// create new task
router.post('/create', commentController.create)

// read a task
router.post('/read', commentController.read)

// update a task
router.post('/update', commentController.update)

// delete a task
router.post('/delete', commentController.delete)


// export routes
module.exports = router;