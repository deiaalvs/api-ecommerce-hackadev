const pgp = require('pg-promise')();
const db = pgp (
    {
        user: 'postgres',
        /* Inform below your database adm's password */
        password: '',
        host: 'localhost',
        /* Inform below your database's port */
        port: '5432',
        /* Inform below your database's name */
        database: ''
    }
);

module.exports = db;