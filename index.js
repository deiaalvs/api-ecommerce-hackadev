const express = require('express')
const cors = require('cors')
const { pool } = require('./config')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const controlPurchaseStatus = require('./server/data/purchaseStatusData')

app
    .route('/purchaseStatus')
    .get(controlPurchaseStatus.getPurchaseStatus)
    .post(controlPurchaseStatus.addPurchaseStatus)
    .put(controlPurchaseStatus.updatePurchaseStatus)

app
    .route('/purchaseStatus/:codigo')
    .get(controlPurchaseStatus.getPurchaseStatusById)
    .delete(controlPurchaseStatus.deletePurchaseStatus)
    
app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando na porta 3002')
})