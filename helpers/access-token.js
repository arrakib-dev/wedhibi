const md5 = require('md5')

exports.getKey = ()=>{
    
    let key = process.env.API_KEY;
    key = md5(key)

    return key
}