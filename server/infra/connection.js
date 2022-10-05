const pgp = require('pg-promise')();
const db = pgp (
    {
        user: 'dksvejnsthhcwh',
        /* Inform below your database adm's password */
        password: '6b249cdb5e760fd05b955156a8729917ce574765cd3f0bfafbd378b135a2a72a',
        host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
        /* Inform below your database's port */
        port: '5432',
        /* Inform below your database's name */
        database: 'd4421tca4c4mtk'
    }
);

module.exports = db;