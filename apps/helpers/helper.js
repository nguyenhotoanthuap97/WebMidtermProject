const bcrypt = require('bcryptjs');
const config = require('config');

function hash_password(password) {
    let saltRounded = config.get('salt');

    let salt = bcrypt.genSaltSync(saltRounded);
    let hash = bcrypt.hashSync(password, salt);

    return hash;
}

function compare_password(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    hash_password: hash_password,
    compare_password: compare_password
}