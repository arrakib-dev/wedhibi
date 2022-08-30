const bcrypt = require('bcryptjs')

const Admin = require('../models/Admin')

// create new admin
exports.createNew = (req, res)=>{
    // console.log(req)
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name ? req.body.name : ''
    const profilePicture = req.body.profilePicture ? req.params.profilePicture : 'dummy pic'
    const role = 'admin'
    const encPassword = bcrypt.hashSync(password, 12)

    if(email.length !== 0 && password.length !== 0){
        const user = new Admin({
            name: name,
            password: encPassword,
            email: email,
            role: role,
            profilePicture: profilePicture
        })

        user.save()
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

    const user = await Admin.findOne({ email: email, role : 'admin' }).exec();

    if(user !== null){
        if(user._id.length !== 0){
            const password_encrypt = user.password
            if(bcrypt.compareSync(password, password_encrypt)){
                res.json({
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                })
            } else {
                res.status(400).json({message: 'incorrect password'})
            }
        } else {
            res.status(400).json({message: 'user with this email does not exits'})
        }
    } else {
        res.status(500).json({message: 'no admin exists with this email'})
    }


}