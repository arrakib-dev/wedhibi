const bcrypt = require('bcryptjs')

const Member = require('../models/Member')


// create new admin
exports.createNew = async (req, res)=>{
    // console.log(req)
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name ? req.body.name : ''
    const companyId = req.body.companyId ? req.body.companyId : ''
    const encPassword = bcrypt.hashSync(password, 12)

    // const company = await Company.findById(companyID).exec();
    // if(company !== null){
    //     companyID = company._id
    // }


    if(email.length !== 0 && password.length !== 0){
        const member = new Member({
            name: name,
            password: encPassword,
            email: email,
            companyId: companyId
        })

        member.save()
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

    const member = await Member.findOne({ email: email, role : 'user' }).exec();

    if(member !== null){
        if(member._id.length !== 0){
            const password_encrypt = member.password
            if(bcrypt.compareSync(password, password_encrypt)){
                res.json({
                    _id: member._id,
                    email: member.email,
                    name: member.name,
                    companyId: member.companyId
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

// admin login
exports.delete = async (req, res)=>{
    const email = req.body.email
    const id = req.body.id
    const company = req.body.companyId

    const member = await Member.findOneAndDelete({_id: id, email: email, companyId: company}).exec();

    if(member !== null){
          res.json("success")
    } else {
        res.status(500).json({message: 'No member such member exists with this credentials'})
    }


}

// admin login
exports.changePassword = async (req, res)=>{
    const email = req.body.email
    const oldPassword = req.body.oldPassword
    const newPassowrd = req.body.newPassword


    const member = await Member.findOne({email: email}).exec();

    if(member !== null){
        if(bcrypt.compareSync(oldPassword, member.password)){
            member.password = bcrypt.hashSync(newPassowrd, 12)
            member.save().then(()=>{
                res.json("success")
            })
        } else {
            res.status(400).json({message: 'wrong old password'})
        }

    } else {
        res.status(500).json({message: 'No member such member exists with this credentials'})
    }


}

// admin login
exports.changeInfo = async (req, res)=>{
    const id = req.body.id
    const password = req.body.password
    const newName = req.body.name ? req.body.name : ''
    const newEmail = req.body.name ? req.body.email : ''

    const member = await Member.findById(id).exec();

    if(member !== null){
        const exMember = await Member.findOne({email: newEmail}).exec();
        if(exMember!== null && exMember._id === member._id){
            res.status(400).json({message: 'a member with same this email already exists'})
        } else {
            member.name = newName
            member.email = newEmail
            member.save().then(()=>{
                res.json("success")
            })
        }

    } else {
        res.status(500).json({message: 'No member such member exists with this credentials'})
    }


}