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

//import database info
const db = require('./helpers/getDatabase').db()


//import routes
//admin
const adminRoutes = require('./routes/admin')
const companyRoutes = require('./routes/company')
const memberRoutes = require('./routes/member')
const taskRoutes = require('./routes/task')
const subTaskRoutes = require('/routes/subtask')
const commentRoutes = require('/routes/comment')


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
app.use('/company', companyRoutes)
app.use('/member', memberRoutes)
app.use('/task', taskRoutes)
app.use('/subTask', subTaskRoutes)
app.use('/comment', commentRoutes)


app.use((req,res)=>{
    console.log('server is up & running')
    res.send('<h1>SERVER is UP & RUNNING!! </h1>')
})


/*
* Connect To database
* ----------------------------------------------------------------
*/


mongoose.connect(db.dbUrl, {dbName : db.dbName})
    .catch((error)=>{
        console.log(error)
    })

/*
* Start server
* ----------------------------------------------------------------
*/
app.listen(3000)








