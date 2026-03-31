const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const jwtConfig = require("../config/jwtConfig");

//user registration
exports.register = (req, res) => {

    const { username, password } = req.body;

    // check if user already exists
    const checkUser = User.findUser(username);

    if (checkUser) {
        return res.status(400).json({ message: "Username already in use" });
    }

    // create user
    const user = User.createUser({ username, password });

    res.json({
        message: "User registered successfully",
        user
    });
};

//user login
exports.login = (req, res) => {

    const { username, password } = req.body;

    const user = User.findUser(username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // store user in session
    req.session.user = {
        id: user.id,
        username: user.username
    };

    // optional: JWT if you also want token
    const token = jwt.sign({ username }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    res.json({
        message: "Login successful",
        user: req.session.user,
        token
    });
};