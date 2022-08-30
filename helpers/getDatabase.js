const fs = require('fs'), path = require('path');
exports.db = ()=> {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'db.json'
    );
    const data = fs.readFileSync(p)

    return JSON.parse(data)

}




