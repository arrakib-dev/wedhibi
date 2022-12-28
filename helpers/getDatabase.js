
exports.db = ()=> {
    const mdb = {
        'dbName' : process.env.DB_NAME,
        'dbUrl' : process.env.BD_URL
    }
    return mdb;

}




