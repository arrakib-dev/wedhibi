
const fs = require('fs')
const path = require('path')
exports.db = (cb)=> {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'db.json'
    );
    const data = fs.readFileSync(p)

    return JSON.parse(data)

}




