const db =require('../db-config');

// exports.getUser1 = (username) => {
//     return db('users').where('username', username).first();
// }

exports.getUserNameAndPassword = (username, password) => {
    return db('users').where('username', username).where('password', password).first();
}




exports.addUser = (user) => {
    return db('users').insert(user);
}

