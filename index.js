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
const userRoute = require('./routes/user')



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

app.use((req,res, next)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Allow-Methods', 'POST')

    next()

})


/*
* Routes
* ----------------------------------------------------------------
*/

app.use('/user', userRoute)


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
app.listen(8080)








