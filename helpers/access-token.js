

exports.getKey = ()=>{
    
    let key = process.env.API_KEY;
    key = md5(key)

    return key
}