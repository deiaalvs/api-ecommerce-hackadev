const pgp = require('pg-promise')();
const db = pgp (
    {
        user: 'postgres',
        /* Inform below your database adm's password */
        password: '100@CodeUse',
        host: 'localhost',
        /* Inform below your database's port */
        port: '5432',
        /* Inform below your database's name */
        database: 'ecommerce-hackadev'
    }
);

module.exports = db;