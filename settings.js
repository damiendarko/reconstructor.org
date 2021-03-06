try {
    var local = require('./local_settings').settings;
} catch(err) {
    var local = {};
}

exports.settings = {
    SECRET_KEY: local.SECRET_KEY || 'secretkeyhere',
    DB_HOST: local.DB_HOST || 'localhost',
    DB_PORT: local.DB_PORT || 27017,
    DB_NAME: local.DB_NAME || 'reconstructor',
    DB_USER: local.DB_USER || '',
    DB_PASS: local.DB_PASS || '',
    SESSION_SECRET: local.SESSION_SECRET || 'sessionkey'
}
