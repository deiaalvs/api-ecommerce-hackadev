require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

const {Pool} = require('pg')

const connectionString = `postgresql://dksvejnsthhcwh:6b249cdb5e760fd05b955156a8729917ce574765cd3f0bfafbd378b135a2a72a@ec2-34-231-221-151.compute-1.amazonaws.com:5432/d4421tca4c4mtk`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL: connectionString
  // descomentar para fazer deploy no heroku
  , ssl: {
    rejectUnauthorized: false,
  }
})

module.exports = {pool}