const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const signupSchema = new mongoose.Schema({
  username: String,
  password: String,
})


const Signup = mongoose.model('Signup', signupSchema);


exports.create = async(req, res) =>{
    const {username, password} = req.body;

     bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash){
            
            console.log(hash)
            const signup = Signup.create({username: username, password: hash})

            res.send(signup)
            
        })
    })



    

    
}

exports.read = async (req, res) => {
    const signup = await Signup.find({}, {_id:0, __v: 0 })
    res.send(signup)
  }

  exports.findOneUser = async (req, res) => {
    
    const signup = await Signup.find({}, {_id:0, __v: 0 })
    res.send(signup)
  }
