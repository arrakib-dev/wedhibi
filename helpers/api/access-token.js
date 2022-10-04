const md5 = require('md5')

const fs = require('fs'), path = require('path');

exports.getKey = ()=>{
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'key.json'
    );
    const data = fs.readFileSync(p)
    let key = JSON.parse(data).key
    key = md5(key)

    return key
}