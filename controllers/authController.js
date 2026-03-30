const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const jwtConfig = require("../config/jwtConfig");

//user registration
exports.register = (req,res)=>{

    const {username,password} = req.body;

    const user = User.createUser({username,password});

    res.json(user);
};

//user login
exports.login = (req,res)=>{

    const {username,password} = req.body;

    const user = User.findUser(username);

    if(!user || user.password !== password){
        return res.status(401).json({message:"Invalid credentials"});
    }

    const token = jwt.sign({username}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});

    res.json({token});
};