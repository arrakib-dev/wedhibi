// backend index file

/*
* Package Imports
* ---------------------------------------------------------------
*/
// express.js
const express = require('express');
//body-parser
const bodyParser = require('body-parser');
// mongoose
const mongoose = require('mongoose');

/*
* Local Imports
* ---------------------------------------------------------------
*/
//import routes
//admin
const adminRoutes = require('./ routes/admin')

/*
* App Initialization
* ---------------------------------------------------------------
*/
const app = express();

/*
* App Configurations
* ----------------------------------------------------------------
*/

/*
* Middlewares
* ----------------------------------------------------------------
*/

// json body parser
app.use(bodyParser.json())


/*
* Routes
* ----------------------------------------------------------------
*/

app.use('/admin', adminRoutes)

app.use((req,res,next)=>{
    console.log('server is up & running')
    res.send('<h1>SERVER is UP & RUNNING!! </h1>')
})


/*
* Connect To database
* ----------------------------------------------------------------
*/

mongoose.connect('mongodb+srv://arrakib:MyF1rstM0ngoDBU5er@node-app.iroyjx0.mongodb.net/?retryWrites=true&w=majority', {
    dbName : 'wedhibi'
})
    .catch((error)=>{
        console.log(error)
    })

/*
* Start server
* ----------------------------------------------------------------
*/
app.listen(3000)








