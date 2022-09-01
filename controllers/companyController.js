const bcrypt = require('bcryptjs')

const Company = require('../models/Company')

// create new admin
exports.createNew = (req, res)=>{
    // console.log(req)
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name ? req.body.name : ''
    const description = req.body.description ? req.params.description : ''
    const encPassword = bcrypt.hashSync(password, 12)

    if(email.length !== 0 && password.length !== 0){
        const company = new Company({
            name: name,
            password: encPassword,
            email: email,
            description: description
        })

        company.save()
            .then(result => {
                res.json({ userID : result._id })
            })
            .catch(error => {
                if(error.code === 11000){
                    // console.log(error)
                    res.status(400).json({message: 'user already exists with this email'})
                } else {
                    // console.log(error)
                    res.status(500).json({message: error})
                }
            })
    } else {
        res.status(400).json({message: 'missing email OR password',  test: email.length !== 0 && password.length !== 0})
    }




}

// admin login
exports.login = async (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    const company = await Company.findOne({ email: email, role : 'user' }).exec();

    if(company !== null){
        if(company._id.length !== 0){
            const password_encrypt = company.password
            if(bcrypt.compareSync(password, password_encrypt)){
                res.json({
                    _id: company._id,
                    email: company.email,
                    name: company.name,
                    description: company.description
                })
            } else {
                res.status(400).json({message: 'incorrect password'})
            }
        } else {
            res.status(400).json({message: 'user with this email does not exits'})
        }
    } else {
        res.status(500).json({message: 'could not retrieve user from database'})
    }


}