const express = require('express')
const server = express()
const port = process.env.PORT || 8080;

server.use(express.json())
server.use('/', require('./route/productRoute'))
server.use('/', require('./route/categoryRoute'))
server.use('/', require('./route/customerRoute'))
server.use('/', require('./route/addressRoute'))
server.use('/', require('./route/purchaseRoute'))
server.use('/', require('./route/purchaseStatusRoute'))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})