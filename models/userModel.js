let users = [];

const createUser = (user) => {
    users.push(user);
    return user;
};

const findUser = (username) => {
    return users.find(u => u.username === username);
};

module.exports = {
    createUser,
    findUser
};