const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = require('../helpers/api/access-token')

exports.create = (req, res) =>{
    // create new user
    const email = req.body.email;
    const password = req.body.password
    const name = req.body.name

    // hash the password
    const passwordEnc = bcrypt.hashSync(password, 12);

    const newUser = new User({
        name: name,
        email: email,
        password: passwordEnc,
        role: 'member'
    })

    newUser.save()
        .then(result => {
            res.json({
                data: {
                    userId: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    workspace: (user.workspace) ? user.workspace : '',
                }
            })
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
}

exports.login = async (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({ email: email }).exec();

    if(user !== null){
        if(user._id.length !== 0){
            const password_db = user.password
            if(bcrypt.compareSync(password, password_db)){
                const token = jwt.sign({
                    email: user.email,
                    userId: user._id.toString(),
                }, key.getKey(), {expiresIn: '24h'})

                res.json({
                    data: {
                        userId: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        workspace: (user.workspace) ? user.workspace : '',
                    },
                    token: token
                })
            } else {
                res.status(400).json({message: 'incorrect password'})
            }
        } else {
            res.status(400).json({message: 'user with this email does not exits'})
        }
    } else {
        res.status(500).json({message: 'could not retrieve users from database'})
    }
}