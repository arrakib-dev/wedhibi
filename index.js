// backend index file

/*
* Package Imports
* ---------------------------------------------------------------
*/
// express.js
const express = require('express');
//body-parser
const bodyParser = require('body-parser');

/*
* Local Imports
* ---------------------------------------------------------------
*/

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


/*
* Routes
* ----------------------------------------------------------------
*/

app.use((req,res,next)=>{
    console.log('server is up & running')
    res.send('<h1>SERVER is UP & RUNNING!! </h1>')
})


/*
* Start server
* ----------------------------------------------------------------
*/

app.listen(3000)








