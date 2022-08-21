const bcrypt = require('bcryptjs')

const User = require('../models/Users')

exports.createNew = (req, res)=>{
    // console.log(req)
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name ? req.body.name : '';
    const profilePicture = req.body.profilePicture ? req.params.profilePicture : 'dummy pic';
    const role = 'admin'
    const encPassword = bcrypt.hashSync(password, 12);

    if(email.length !== 0 && password.length !== 0){
        const user = new User({
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
                    res.status(422).json({message: 'user already exists with this email'})
                } else {
                    // console.log(error)
                    res.status(500).json({message: error})
                }
            })
    } else {
        res.status(422).json({message: 'missing email OR password',  test: email.length !== 0 && password.length !== 0})
    }




}